var newCompileResult = require('./general').newCompileResult;

module.exports = (function(){
	return {
		generateDottedId : function(ids) {
			return ids.join('.');
		},
		generatePackageDecl : function(ids) {
			return ids.join('.');
		},
		generateComment : function(str) {
			return ' ';//'// ' + str + '\n';
		},
		generateClosedStatement : function(openStatSrc) {
			openStatSrc += ';';
			return openStatSrc;
		},
		generateVarAssign : function(jsonPathSrc, expressionSrc) {
			return jsonPathSrc + '=' + expressionSrc;
		},
		generateValue : function(valueStr) {
			return valueStr;
		},
		generateKeyRef : function(resolvableSrc) {
			return '[' + resolvableSrc + ']';
		},
		generateJsonPath : function(id, keyRefSrcs) {
			var src = id;
			for(var i = 0; i < keyRefSrcs.length; i++)
				src += keyRefSrcs[i];
			return src;
		},
		generateSignedExpr : function(expressionSrc) {
			return '-' + expressionSrc;
		},
		generateNotExpr : function(expressionSrc) {
			return '!' + expressionSrc;
		},
		generateParenExpr : function(expressionSrc) {
			return '(' + expressionSrc + ')';
		},
		generatePlusExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' + ' + expr2Src;
		},
		generateMinusExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' - ' + expr2Src;
		},
		generateMulExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' * ' + expr2Src;
		},
		generateDivExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' / ' + expr2Src;
		},
		generateModExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' % ' + expr2Src;
		},
		generatePowExpr : function(expr1Src, expr2Src) {
			return 'Math.pow(' + expr1Src + ', ' + expr2Src + ')';
		},
		generateSignedPowExpr : function(expr1Src, expr2Src) {
			return '-Math.pow(' + expr1Src + ', ' + expr2Src + ')';
		},
		generateEqExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' === ' + expr2Src;
		},
		generateNeqExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' !== ' + expr2Src;
		},
		generateLtExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' < ' + expr2Src;
		},
		generateLeExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' <= ' + expr2Src;
		},
		generateGtExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' > ' + expr2Src;
		},
		generateGeExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' >= ' + expr2Src;
		},
		generateAndExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' && ' + expr2Src;
		},
		generateOrExpr : function(expr1Src, expr2Src) {
			return expr1Src + ' || ' + expr2Src;
		},
		generateFuncInvoke : function(pack, ids, resolvableSrcs, methodContext) {
			var src = '';
			if(ids.length > 1)
				src += 'methodContext.' + ids.slice(0, ids.length-1).join('.') + '._f.' + ids[ids.length-1] ;
			else if(methodContext._f[ids[0]])
				src += 'methodContext._f.' + ids[0];
			else
				src += 'methodContext.' + pack + '._f.' + ids[0]
			src += '(' + resolvableSrcs.join(', ') + ')';
			return src;	
		},
		generateRetStatement : function(expressionSrc) {
			return 'return ' + expressionSrc;
		},		
		generateLoop : function(expressionSrc, codeBlockSrc) {
			return 'while' + '('  + expressionSrc + ')' + codeBlockSrc;
		},
		generateElseStat : function(codeBlockSrc) {
			return 'else' + codeBlockSrc;
		},
		generateElseIfStat : function(expressionSrc, codeBlockSrc) {
			return 'else if' + '(' + expressionSrc + ')' + codeBlockSrc;
		},
		generateIfStat : function(expressionSrc, codeBlockSrc, elseifStatSrcs, elseStat) {
			var src = 'if' + '(' + expressionSrc + ')' + codeBlockSrc;
			for(var i = 0; i < elseifStatSrcs.length; i++)
				src += elseifStatSrcs[i];
			if(elseStat)
				src += elseStat;
			return src;
		},
		generateCodeBlock : function(sentenceSources) {
			var source = '{';
			for(var i = 0; i < sentenceSources.length; i++)
				source += sentenceSources[i];
			source += '}\n';
			return source;
		},
		generateFuncDecl : function(pack, ids, codeBlockSrc, methodContext) {
			var funcPath = pack + '._f.' + ids[0];
			eval('if(methodContext.' + pack + ' && methodContext.' + funcPath + ') throw "the function ' + funcPath + ' already exists";' )
			var source = funcPath + ' = function(';
			var isFirst = true;
			for(var i = 1; i < ids.length; i++) {
				if(!isFirst)
					source += ', ';
				source += ids[i];
				isFirst = false;
			}
			source += ')' + codeBlockSrc;
			return source;
		},
		generateSmkFile : function(funcDeclSrcs, methodContext) {
			var src = '';
			for(var i = 0; i < funcDeclSrcs.length; i++)
				src += 'methodContext.' + funcDeclSrcs[i];
			return newCompileResult(src);
		},
	};
})();