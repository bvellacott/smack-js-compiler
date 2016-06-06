var antlr4 = require('antlr4');
var SmackLexer = require('./smack/SmackLexer').SmackLexer;
var SmackParser = require('./smack/SmackParser').SmackParser;
var compilers = require('./compilers');

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
	
	return function(name, smkSource, methodContext) {
		var tree = getParseTree(smkSource);
		var pack = compilers.compilePackageDecl(tree.packageDecl(0));
		var result = compilers.compileSmkFile(tree, methodContext)
		return createUnit(name, smkSource, result.source, pack, result.funcNames, methodContext);
	};
})();
