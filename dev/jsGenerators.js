var g = require('./general');
var ncr = require('./general').newCompileResult;

module.exports = (function(){
	return {
		generateDottedId : function(ids) {
			return ncr().add('parts', g.join(ids, '.'));
		},
		generatePackageDecl : function(ids) {
			return this.generateDottedId(ids);
		},
		generateComment : function(str) {
			return ' ';//'// ' + str + '\n';
		},
		generateClosedStatement : function(openStatPart) {
			return ncr().add('parts', openStatPart, ';');
		},
		generateVarDecl : function(jsonPathPart) {
			return ncr().add('parts', 'var ', jsonPathPart, ';');
		},
		generateVarDecls : function(jsonPathParts, ids) {
			if(!jsonPathParts || jsonPathParts.length === 0)
				return '';
			var cr = ncr();
			var idMap = {};
			for(var i = 0; i < ids; i++)
				idMap[ids[i]] = true;
			for(var i = 0; i < jsonPathParts.length; i++) {
				var name = jsonPathParts[i].format();
				if(!idMap[name])
					cr.add('parts', 'var ', name, ';');
			}
			return cr;
		},
		generateVarAssign : function(jsonPathPart, expressionPart) {
			var cr = ncr().add('parts', jsonPathPart, '=', expressionPart);
			if(jsonPathPart.isSimple)
				cr.addToParent('funcDecl', 'varDecl', jsonPathPart);
			return cr;
		},
		generateValue : function(valueStr) {
			return valueStr;
		},
		generateKeyRef : function(resolvablePart) {
			return ncr().add('parts', '[', resolvablePart, ']');
		},
		generateJsonPath : function(id, keyRefParts) {
			return ncr().set('isSimple', keyRefParts.length === 0).add('parts', id, keyRefParts);
		},
		generateSignedExpr : function(expressionPart) {
			return ncr().add('parts', '-', expressionPart);
		},
		generateNotExpr : function(expressionPart) {
			return ncr().add('parts', '!', expressionPart);
		},
		generateParenExpr : function(expressionPart) {
			return ncr().add('parts', '(', expressionPart, ')');
		},
		generatePlusExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' + ', expr2Part);
		},
		generateMinusExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' - ', expr2Part);
		},
		generateMulExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' * ', expr2Part);
		},
		generateDivExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' / ', expr2Part);
		},
		generateModExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' % ', expr2Part);
		},
		generatePowExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', 'Math.pow(', expr1Part, ', ', expr2Part, ')');
		},
		generateSignedPowExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', '-Math.pow(', expr1Part, ', ', expr2Part, ')');
		},
		generateEqExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' === ', expr2Part);
		},
		generateNeqExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' !== ', expr2Part);
		},
		generateLtExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' < ', expr2Part);
		},
		generateLeExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' <= ', expr2Part);
		},
		generateGtExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' > ', expr2Part);
		},
		generateGeExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' >= ', expr2Part);
		},
		generateAndExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' && ', expr2Part);
		},
		generateOrExpr : function(expr1Part, expr2Part) {
			return ncr().add('parts', expr1Part, ' || ', expr2Part);
		},
		generateFuncInvoke : function(pack, ids, resolvableParts, methodContext) {
			var cr = ncr().add('parts', 'methodContext.');
			if(ids.length > 1)
				cr.add('parts', g.join(ids.slice(0, ids.length-1), '.'), '._f.', ids[ids.length-1]);
			else if(methodContext._f[ids[0]])
				cr.add('parts', '_f.', ids[0]);
			else
				cr.add('parts', pack, '._f.', ids[0]);
			cr.add('parts', '(', g.join(resolvableParts, ', '), ')');
			return cr;	
		},
		generateRetStatement : function(expressionPart) {
			return ncr().add('parts', 'return ', expressionPart);
		},		
		generateLoop : function(expressionPart, codeBlockPart) {
			return ncr().add('parts', 'while', '(', expressionPart, ')', codeBlockPart);
		},
		generateElseStat : function(codeBlockPart) {
			return ncr().add('parts', 'else', codeBlockPart);
		},
		generateElseIfStat : function(expressionPart, codeBlockPart) {
			return ncr().add('parts', 'else if', '(', expressionPart, ')', codeBlockPart);
		},
		generateIfStat : function(expressionPart, codeBlockPart, elseifStatParts, elseStat) {
			var cr = ncr().add('parts', 'if', '(', expressionPart, ')', codeBlockPart, elseifStatParts);
			if(elseStat)
				cr.add('parts', elseStat);
			return cr;
		},
		generateCodeBlock : function(sentenceSources) {
			var cr = ncr().add('parts', '{', sentenceSources, '}\n');
			cr.addVarDecls = function() {
				this.parts = ['{'].concat(Array.from(arguments)).concat(this.parts.slice(1));
			};
			return cr;
		},
		generateFuncDecl : function(pack, ids, codeBlockPart, methodContext) {
			var funcPath = ncr().add('parts', pack, '._f.', ids[0]);
			eval(ncr().add('parts', 'if(methodContext.', pack, ' && methodContext.', funcPath, ') throw "the function ', funcPath, ' already exists";').format())
			var cr = ncr().set('type', 'funcDecl').add('parts', codeBlockPart);
			codeBlockPart.addVarDecls(this.generateVarDecls(cr.varDecl, ids));
			cr = ncr().add('parts', funcPath, ' = function(', g.join(ids.slice(1), ', '), ')', codeBlockPart);
			return cr;
		},
		generateSmkFile : function(funcDeclParts, methodContext) {
			return ncr().add('parts', 'methodContext.', g.join(funcDeclParts, 'methodContext.'));
		},
	};
})();