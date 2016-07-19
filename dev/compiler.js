var antlr4 = require('antlr4');
var SmackLexer = require('./smack/SmackLexer').SmackLexer;
var SmackParser = require('./smack/SmackParser').SmackParser;
var compilers = require('./compilers');
var stdlib = require('./stdlib');
var g = require('./general');

module.exports = (function(){
	var createUnit = function(smkSource, targetSource, pack, funcNames, methodContext) {
		var packParts = pack.split('.');
		var packAbr = packParts[packParts.length-1];
		return {
			//name : name,
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

	var initMethodContext = function(pack, methodContext) {
		if(!methodContext || typeof methodContext !== 'object')
			throw 'The method context must be an object';
		// Add the standard library if it's missing
		stdlib.extend(methodContext);
		//var packParts = pack.split('.');
		var curObj = methodContext;

		// var noPackageErr = ncr().add('parts', "throw \"package: ", pack, " doesn\'t exist\";");
		g.validatePackageExists(pack, methodContext);
		// eval(ncr().add('parts', "try{ if(!methodContext.", pack, ")", noPackageErr, "} catch(e) { ", noPackageErr, " }").format())

		// for(var i = 0; i < packParts.length; i++) {
		// 	if(!curObj[packParts[i]] || typeof curObj[packParts[i]] !== 'object')
		// 		curObj[packParts[i]] = { _f : {} };
		// 	curObj = curObj[packParts[i]];
		// }
	}

	return {
		getPackage: g.getPackage,
		createPackage: g.createPackage,
		removePackage: g.removePackage,
		compile(pack, smkSource, methodContext) {
			var tree = getParseTree(smkSource);
			initMethodContext(pack, methodContext);
			var result = compilers.compileSmkFile(tree, pack, methodContext)
			var src = result.format();
			eval(src);
			return createUnit(pack, smkSource, src, pack, result.funcNames, methodContext);
		}
	}
})();
