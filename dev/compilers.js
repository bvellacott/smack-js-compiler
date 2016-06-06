var SmackParser = require('./smack/SmackParser').SmackParser;
var jsGenerators = require('./jsGenerators');
var newCompileResult = require('./general').newCompileResult;

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
			return jsGenerators.generatePackageDecl(this.getPackageParts(ctx));
		},
		compileComment : function(ctx) {
			return jsGenerators.generateComment(ctx.getText());
		},
		compileValue : function(ctx) {
			return jsGenerators.generateValue(ctx.getText());
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
			var resolvableSrc = this.compileResolvable(ctx.resolvable(0), pack, methodContext);
			return jsGenerators.generateKeyRef(resolvableSrc);
		},
		compileJsonPath : function(ctx, pack, methodContext) {
			var id = ctx.Id(0).getText();
			var keyRefSrcs = [];
			for(var i = 0; ctx.keyRef(i); i++)
				keyRefSrcs.push(this.compileKeyRef(ctx.keyRef(i), pack, methodContext));
			return jsGenerators.generateJsonPath(id, keyRefSrcs);
		},
		compileExpression : function(ctx, pack, methodContext) {
			if(ctx instanceof SmackParser.AtomExprContext)
				return this.compileResolvable(ctx.resolvable(0), pack, methodContext);
			if(ctx instanceof SmackParser.SignedExprContext)
				return jsGenerators.generateSignedExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			if(ctx instanceof SmackParser.NotExprContext)
				return jsGenerators.generateNotExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			if(ctx instanceof SmackParser.ParenExprContext)
				return jsGenerators.generateParenExpr(this.compileExpression(ctx.expression(0), pack, methodContext));
			var expr1Src = this.compileExpression(ctx.expression(0), pack, methodContext);
			var expr2Src = this.compileExpression(ctx.expression(1), pack, methodContext);
			if(ctx instanceof SmackParser.SumExprContext) {
				var isPos = true;
				for(var i = 1; i < ctx.children.length; i++) {
					var c = ctx.children[i];
					if(c.symbol && c.symbol.type === SmackParser.Minus)
						isPos = !isPos;
				}
				if(isPos)
					return jsGenerators.generatePlusExpr(expr1Src, expr2Src);
				else
					return jsGenerators.generateMinusExpr(expr1Src, expr2Src);
			}
			if(ctx instanceof SmackParser.PowExprContext) {
				if(ctx.expression(0) instanceof SmackParser.SignedExprContext)
					return jsGenerators.generateSignedPowExpr(this.compileExpression(ctx.expression(0).expression(0), pack, methodContext), expr2Src);
				return jsGenerators.generatePowExpr(expr1Src, expr2Src);
			}
			if(ctx instanceof SmackParser.MulExprContext)
				return jsGenerators.generateMulExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.DivExprContext)
				return jsGenerators.generateDivExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.ModExprContext)
				return jsGenerators.generateModExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.EqExprContext)
				return jsGenerators.generateEqExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.NeqExprContext)
				return jsGenerators.generateNeqExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.LtExprContext)
				return jsGenerators.generateLtExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.LeExprContext)
				return jsGenerators.generateLeExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.GtExprContext)
				return jsGenerators.generateGtExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.GeExprContext)
				return jsGenerators.generateGeExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.AndExprContext)
				return jsGenerators.generateAndExpr(expr1Src, expr2Src);
			if(ctx instanceof SmackParser.OrExprContext)
				return jsGenerators.generateOrExpr(expr1Src, expr2Src);
			else
				throw 'Uhandled expression';
		},
		compileVarAssign : function(ctx, pack, methodContext) {
			var jsonPathSrc = this.compileJsonPath(ctx.jsonPath(0), pack, methodContext);
			var expressionSrc = this.compileExpression(ctx.expression(0), pack, methodContext);
			return jsGenerators.generateVarAssign(jsonPathSrc, expressionSrc);
		},
		compileFuncInvoke : function(ctx, pack, methodContext) {
			var ids = this.getIds(ctx.dottedId(0));
			var resolvableSrcs = [];
			for(var i = 0; ctx.resolvable(i); i++)
				resolvableSrcs.push(this.compileResolvable(ctx.resolvable(i), pack, methodContext));
			return jsGenerators.generateFuncInvoke(pack, ids, resolvableSrcs, methodContext);
		},
		compileRetStatement : function(ctx, pack, methodContext) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack, methodContext);
			return jsGenerators.generateRetStatement(expressionSrc);
		},
		compileStatement : function(ctx, pack, methodContext) {
			var statement = ctx.children[0];
			var src;
			if(statement instanceof SmackParser.VarAssignContext)
				src = this.compileVarAssign(statement, pack, methodContext);
			else if(statement instanceof SmackParser.FuncInvokeContext)
				src = this.compileFuncInvoke(statement, pack, methodContext);
			else if(statement instanceof SmackParser.RetStatementContext)
				src = this.compileRetStatement(statement, pack, methodContext);
			return jsGenerators.generateClosedStatement(src);
		},
		compileLoop : function(ctx, pack, methodContext) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return jsGenerators.generateLoop(expressionSrc, codeBlockSrc);
		},
		compileElseStat : function(ctx, pack, methodContext) {
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return jsGenerators.generateElseStat(codeBlockSrc);
		},
		compileElseIfStat : function(ctx, pack, methodContext) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			return jsGenerators.generateElseIfStat(expressionSrc, codeBlockSrc);
		},
		compileIfStat : function(ctx, pack, methodContext) {
			var expressionSrc = this.compileExpression(ctx.expression(0), pack, methodContext);
			var codeBlockSrc = this.compileCodeBlock(ctx.codeBlock(0), pack, methodContext);
			var elseifStatSrcs = [];
			for(var i = 0; ctx.elseIfStat(i); i++)
				elseifStatSrcs.push(this.compileElseIfStat(ctx.elseIfStat(i), pack, methodContext));
			var elseStatSrc = '';
			if(ctx.elseStat(0))
				elseStatSrc = this.compileElseStat(ctx.elseStat(0), pack, methodContext);
			return jsGenerators.generateIfStat(expressionSrc, codeBlockSrc, elseifStatSrcs, elseStatSrc);
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
			var sentenceSrcs = [];
			for(var i = 0; ctx.sentence(i); i++)
				sentenceSrcs.push(this.compileSentence(ctx.sentence(i), pack, methodContext));
			return jsGenerators.generateCodeBlock(sentenceSrcs);
		},
		compileFuncDecl : function(ctx, pack, methodContext) {
			var codeBlockSrc 
			var ids = [];
			
			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c.symbol && c.symbol.type === SmackParser.Id)
					ids.push(c.getText());
				else if(c instanceof SmackParser.CodeBlockContext)
					codeBlockSrc = this.compileCodeBlock(c, pack, methodContext);
			}
			return jsGenerators.generateFuncDecl(pack, ids, codeBlockSrc, methodContext);
		},
		compileSmkFile : function(ctx, methodContext) {
			var pack = this.compilePackageDecl(ctx.packageDecl(0));
			var funcNames = [];
			var funcDeclSrcs = [];
			for(var i = 0; i < ctx.children.length; i++) {
				var c = ctx.children[i];
				if(c instanceof SmackParser.FuncDeclContext) {
					funcDeclSrcs.push(this.compileFuncDecl(c, pack, methodContext));
					funcNames.push(c.Id(0).getText());
				}
			}
			var smkFileResult = jsGenerators.generateSmkFile(funcDeclSrcs, methodContext);
			smkFileResult.pack = pack;
			smkFileResult.funcNames = funcNames;
			smkFileResult.methodContext = methodContext;
			return smkFileResult;
		}
	}
})();