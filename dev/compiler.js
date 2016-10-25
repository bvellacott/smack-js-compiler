var antlr4 = require('antlr4');
var SmackLexer = require('./smack/SmackLexer').SmackLexer;
var SmackParser = require('./smack/SmackParser').SmackParser;
var compilers = require('./compilers');
var stdlib = require('./stdlib');
var g = require('./general');

module.exports = (function(){
	var createUnit = function(smkSource, targetSource, pack, funcNames, methodContext) {
		if(typeof pack === 'string')
			pack = pack.split('.');
		return {
			smkSource : smkSource,
			targetSource : targetSource,
			pack : pack,
			packAbr : pack[pack.length-1],
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

	var initMethodContext = function(pack, methodContext) {
		if(!methodContext || typeof methodContext !== 'object')
			throw 'The method context must be an object';
		// Add the standard library if it's missing
		stdlib.extend(methodContext);
		var curObj = methodContext;
		g.validatePackageExists(pack, methodContext);
	}

	return {
		getPackage: g.getPackage,
		createPackage: g.createPackage,
		removePackage: g.removePackage,
		getParseTree: getParseTree,
		compile(pack, smkSource, methodContext) {
			var tree = getParseTree(smkSource);
			initMethodContext(pack, methodContext);
			var result = compilers.compileSmkFile(tree, pack, methodContext)
			var src = result.format();
			eval(src);
			return createUnit(smkSource, src, pack, result.funcNames, methodContext);
		}
	}
})();
