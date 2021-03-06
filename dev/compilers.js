var SmackParser = require('./smack/SmackParser').SmackParser;
var generators = require('./jsGenerators');

module.exports = (function(){
	return {
		getIds : function(dottedId) {
			var ids = [];
			for(var i = 0; dottedId.Id(i); i++)
				ids.push(dottedId.Id(i).getText());
			return ids;
		},
		getPackageParts : function(ctx) {
			return this.getIds(ctx.dottedId(0));
		},
		compilePackageDecl : function(ctx) {
			return generators.generatePackageDecl(this.getPackageParts(ctx));
		},
		compileComment : function(ctx) {
			return generators.generateComment(ctx.getText());
		},
		compileValue : function(ctx) {
			return generators.generateValue(ctx.getText());
		},
		compileResolvable : function(ctx, pack, methodContext) {
			ctx = ctx.children[0];
			if(ctx instanceof SmackParser.ValueContext)
				return this.compileValue(ctx);
			if(ctx instanceof SmackParser.JsonPathContext)
				return this.compileJsonPath(ctx, pack, methodContext);
			if(ctx instanceof SmackParser.FuncInvokeContext)
				return this.compileFuncInvoke(ctx, pack, methodContext);
			throw 'Unhandled resolvable';
		},
		compileKeyRef : function(ctx, pack, methodContext) {
			var resolvablePart = this.compileResolvable(ctx.resolvable(0), pack, methodContext);
			return generators.generateKeyRef(resolvablePart);
		},
		compileJsonPath : function(ctx, pack, methodContext) {
			var id = ctx.Id(0).getText();
			var keyRefParts = [];
			for(var i = 0; ctx.keyRef(i); i++)
				keyRefParts.push(this.compileKeyRef(ctx.keyRef(i), pack, methodContext));
			return generators.generateJsonPath(id, keyRefParts);
		},
		compileExpression : function(ctx, pack, methodContext) {
			if(ctx instanceof SmackParser.AtomExprContext)
				return this.compileResolvable(ctx.resolvable(0), pack, methodContext);
			if(ctx instanceof SmackParser.SignedExprContext)
				return generators.generateSignedExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			if(ctx instanceof SmackParser.NotExprContext)
				return generators.generateNotExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			if(ctx instanceof SmackParser.ParenExprContext)
				return generators.generateParenExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			var expr1Part = this.compileExpression(ctx.expression(0), pack, methodContext);
			var expr2Part = this.compileExpression(ctx.expression(1), pack, methodContext);
			if(ctx instanceof SmackParser.SumExprContext) {
				var isPos = true;
				for(var i = 1; i < ctx.children.length; i++) {
					var c = ctx.children[i];
					if(c.symbol && c.symbol.type === SmackParser.Minus)
						isPos = !isPos;
				}
				if(isPos)
					return generators.generatePlusExpr(expr1Part, expr2Part);
				else
					return generators.generateMinusExpr(expr1Part, expr2Part);
			}
			if(ctx instanceof SmackParser.PowExprContext) {
				if(ctx.expression(0) instanceof SmackParser.SignedExprContext)
					return generators.generateSignedPowExpr(this.compileExpression(ctx.expression(0).expression(0), pack, methodContext), expr2Part);
				return generators.generatePowExpr(expr1Part, expr2Part);
			}
			if(ctx instanceof SmackParser.MulExprContext)
				return generators.generateMulExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.DivExprContext)
				return generators.generateDivExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.ModExprContext)
				return generators.generateModExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.EqExprContext)
				return generators.generateEqExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.NeqExprContext)
				return generators.generateNeqExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.LtExprContext)
				return generators.generateLtExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.LeExprContext)
				return generators.generateLeExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.GtExprContext)
				return generators.generateGtExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.GeExprContext)
				return generators.generateGeExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.AndExprContext)
				return generators.generateAndExpr(expr1Part, expr2Part);
			if(ctx instanceof SmackParser.OrExprContext)
				return generators.generateOrExpr(expr1Part, expr2Part);
			else
				throw 'Uhandled expression';
		},
		compileVarAssign : function(ctx, pack, methodContext) {
			var jsonPathRes = this.compileJsonPath(ctx.jsonPath(0), pack, methodContext);
			var expressionPart = this.compileExpression(ctx.expression(0), pack, methodContext);
			return generators.generateVarAssign(jsonPathRes, expressionPart);
		},
		compileFuncInvoke : function(ctx, pack, methodContext) {
			var ids = this.getIds(ctx.dottedId(0));
			var resolvableParts = [];
			for(var i = 0; ctx.resolvable(i); i++)
				resolvableParts.push(this.compileResolvable(ctx.resolvable(i), pack, methodContext));
			return generators.generateFuncInvoke(pack, ids, resolvableParts, methodContext);
		},
		compileRetStatement : function(ctx, pack, methodContext) {
			var expressionPart = this.compileExpression(ctx.expression(0), pack, methodContext);
			return generators.generateRetStatement(expressionPart);
		},
		compileStatement : function(ctx, pack, methodContext) {
			var statement = ctx.children[0];
			var result;
			if(statement instanceof SmackParser.VarAssignContext)
				result = this.compileVarAssign(statement, pack, methodContext);
			else if(statement instanceof SmackParser.FuncInvokeContext)
				result = this.compileFuncInvoke(statement, pack, methodContext);
			else if(statement instanceof SmackParser.RetStatementContext)
				result = this.compileRetStatement(statement, pack, methodContext);
			return generators.generateClosedStatement(result);
		},
		compileLoop : function(ctx, pack, methodContext) {
			var expressionPart = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockPart = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return generators.generateLoop(expressionPart, codeBlockPart);
		},
		compileElseStat : function(ctx, pack, methodContext) {
			var codeBlockPart = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return generators.generateElseStat(codeBlockPart);
		},
		compileElseIfStat : function(ctx, pack, methodContext) {
			var expressionPart = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockPart = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return generators.generateElseIfStat(expressionPart, codeBlockPart);
		},
		compileIfStat : function(ctx, pack, methodContext) {
			var expressionPart = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockPart = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			var elseifStatParts = [];
			for(var i = 0; ctx.elseIfStat(i); i++)
				elseifStatParts.push(this.compileElseIfStat(ctx.elseIfStat(i), pack, methodContext));
			var elseStatPart = '';
			if(ctx.elseStat(0))
				elseStatPart = this.compileElseStat(ctx.elseStat(0), pack, methodContext);
			return generators.generateIfStat(expressionPart, codeBlockPart, elseifStatParts, elseStatPart);
		},
		compileSentence : function(ctx, pack, methodContext) {
			var sentence = ctx.children[0];
			var src;
			if(sentence instanceof SmackParser.StatementContext)
				src = this.compileStatement(sentence, pack, methodContext);
			else if(sentence instanceof SmackParser.LoopContext)
				src = this.compileLoop(sentence, pack, methodContext);
			else if(sentence instanceof SmackParser.IfStatContext)
				src = this.compileIfStat(sentence, pack, methodContext);
			return src;
		},
		compileCodeBlock : function(ctx, pack, methodContext) {
			var sentenceParts = [];
			for(var i = 0; ctx.sentence(i); i++)
				sentenceParts.push(this.compileSentence(ctx.sentence(i), pack, methodContext));
			return generators.generateCodeBlock(sentenceParts);
		},
		compileFuncDecl : function(ctx, pack, methodContext) {
			var codeBlockPart
			var ids = [];

			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c.symbol && c.symbol.type === SmackParser.Id)
					ids.push(c.getText());
				else if(c instanceof SmackParser.CodeBlockContext)
					codeBlockPart = this.compileCodeBlock(c, pack, methodContext);
			}
			return generators.generateFuncDecl(pack, ids, codeBlockPart, methodContext);
		},
		compileSmkFile : function(ctx, pack, methodContext) {
			if(Array.isArray(pack))
				pack = pack.join('.');
			var funcNames = [];
			var funcDeclParts = [];
			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c instanceof SmackParser.FuncDeclContext) {
					funcDeclParts.push(this.compileFuncDecl(c, pack, methodContext));
					funcNames.push(c.Id(0).getText());
				}
			}
			var smkFileResult = generators.generateSmkFile(funcDeclParts, methodContext);
			smkFileResult.funcNames = funcNames;
			smkFileResult.methodContext = methodContext;
			return smkFileResult;
		}
	}
})();
