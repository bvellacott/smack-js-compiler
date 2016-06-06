module.exports.extend = function(mc){
	// Standard methods
	if(!mc._f || typeof mc._f !== 'object') 
		mc._f = {};
	mc._f.exec = function(func, args) {
		var ids = func.split('.');
		var callString = 'mc.' + ids.slice(0, ids.length-1).join('.') + '._f.' + ids[ids.length-1];
		if(args)
			return eval(callString + '.apply(undefined, args)');
		else
			return eval(callString + '.apply(undefined)');
	};
	mc._f.wait = function(millis) {
		throw 'wait hasn\'t been implemented in the browser standard library';
	};

	// Standard array methods
	if(!mc.ary || typeof mc.ary !== 'object') 
		mc.ary = {};
	if(!mc.ary._f || typeof mc.ary._f !== 'object') 
		mc.ary._f = {};
	mc.ary._f.length = function(ary) { return ary.length; }
};
