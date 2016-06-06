var antlr4 = require('antlr4');
var SmackLexer = require('./smack/SmackLexer').SmackLexer;
var SmackParser = require('./smack/SmackParser').SmackParser;
var compilers = require('./compilers');
var stdlib = require('./stdlib');

module.exports = (function(){
	var createUnit = function(name, smkSource, targetSource, pack, funcNames, methodContext) {
		var packParts = pack.split('.');
		var packAbr = packParts[packParts.length-1];
		return {
			name : name,
			smkSource : smkSource,
			targetSource : targetSource,
			pack : pack,
			packAbr : packAbr,
			funcNames : funcNames,
			methodContext : methodContext
		};
	}
	
	var getParseTree = function(source) {
		var chars = new antlr4.InputStream(source);
		var lexer = new SmackLexer(chars);
		var tokens = new antlr4.CommonTokenStream(lexer);
		var parser = new SmackParser(tokens);
		parser.buildParseTrees = true;
		return parser.smkFile();
	}

	var initMethodContext = function(ctx, methodContext) {
		if(!methodContext || typeof methodContext !== 'object')
			throw 'The method context must be an object';
		// Add the standard library if it's missing
		stdlib.extend(methodContext);
		var packParts = compilers.getPackageParts(ctx.packageDecl(0));
		var curObj = methodContext;
		for(var i = 0; i < packParts.length; i++) {
			if(!curObj[packParts[i]] || typeof curObj[packParts[i]] !== 'object')
				curObj[packParts[i]] = { _f : {} };
			curObj = curObj[packParts[i]];
		}
	}
	
	return function(name, smkSource, methodContext) {
		var tree = getParseTree(smkSource);
		initMethodContext(tree, methodContext);
		var pack = compilers.compilePackageDecl(tree.packageDecl(0));
		var result = compilers.compileSmkFile(tree, methodContext)
		eval(result.src);
		return createUnit(name, smkSource, result.src, pack, result.funcNames, methodContext);
	};
})();
