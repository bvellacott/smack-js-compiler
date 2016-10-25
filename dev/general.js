var arrayFromArgs = function(args) {
	var ary = [];
	for(var i = 0; i < args.length; i++)
		ary.push(args[i]);
	return ary;
};

module.exports = {
	validatePackageExists: function(pack, methodContext) {
		if(typeof pack === 'string')
			pack = pack.split('.');
		var curObj = methodContext;
		for(var i = 0; i < pack.length; i++) {
			if(!curObj[pack[i]] || typeof curObj[pack[i]] !== 'object')
				throw "package: " + pack.join('.') + " doesn't exist";
			curObj = curObj[pack[i]];
		}
	},
	createPackage: function(pack, methodContext) {
		if(typeof pack === 'string')
			pack = pack.split('.');
		var curObj = methodContext;
		for(var i = 0; i < pack.length; i++) {
			if(!curObj[pack[i]] || typeof curObj[pack[i]] !== 'object')
				curObj[pack[i]] = { _f : {} };
			curObj = curObj[pack[i]];
		}
	},
	removePackage: function(pack, methodContext) {
		if(typeof pack === 'string')
			pack = pack.split('.');
		var parent = null;
		var curKey = null;
		var curObj = methodContext;
		for(var i = 0; i < pack.length; i++) {
			if(!curObj[pack[i]] || typeof curObj[pack[i]] !== 'object')
				return;
			parent = curObj;
			curKey = pack[i];
			curObj = parent[curKey];
		}
		delete parent[curKey];
	},
	getPackage: function(pack, methodContext) {
		if(typeof pack === 'string')
			pack = pack.split('.');
		var curObj = methodContext;
		for(var i = 0; i < pack.length; i++) {
			if(!curObj[pack[i]] || typeof curObj[pack[i]] !== 'object')
				curObj[pack[i]] = { _f : {} };
			curObj = curObj[pack[i]];
		}
		return curObj;
	},
	newCompileResult: function() {
		var set = function(key, value) {
			this[key] = value;
			return this;
		};

		var add	= function() {
			var key = arguments[0];
			if(arguments.length > 1 && !this[key])
				this[key] = [];
			for(var i = 1; i < arguments.length; i++) {
				if(!arguments[i])
					continue;
				if(Array.isArray(arguments[i]))
					this.add.apply(this, [key].concat(arguments[i]));
				else
					this[key].push(arguments[i]);

				if(typeof arguments[i] === 'object')
					moveParentScopeUpstream(this, arguments[i]);
			}
			return this;
		};

		var newParentScope = function() {
			return { set : set, add : add };
		};

		var getParentScope = function(ctx, type) {
			if(!ctx._parentScopes)
				ctx._parentScopes = {};
			if(!ctx._parentScopes[type])
				ctx._parentScopes[type] = newParentScope();
			return ctx._parentScopes[type];
		};

		var moveParentScopeUpstream = function(parent, child) {
			var pcs = child._parentScopes;
			if(!pcs) return;

			for(var type in pcs) {
				if(type === parent.type)
					copyAll(pcs[type], parent);
				else
					copyAll(pcs[type], getParentScope(parent, type));
			}
			child._parentScopes = null;
		};

		var copyAll = function(from, to) {
			for(var key in from) {
				if(to.hasOwnProperty(key)) {
					if(Array.isArray(to[key]))
						to[key] = to[key].concat(from[key]);
				}
				else
					to[key] = from[key];
			}
		};

		return {
			set : set,
			add	: add,
			setToParent : function() {
				if(arguments.length < 2)
					return;
				var pc = getParentScope(this, arguments[0]);
				pc.set(arguments[1], arguments[2]);
			},
			addToParent : function() {
				var args = arrayFromArgs(arguments);
				if(args.length < 2)
					return;
				var pc = getParentScope(this, args[0]);
				pc.add.apply(pc, args.slice(1));
			},
			format : function() {
				var src = '';
				if(this.parts)
					for(var i = 0; i < this.parts.length; i++)
						src += (typeof this.parts[i] === 'string' ? this.parts[i] :  this.parts[i].format());
				return src;
			},
		};
	},
	arrayFromArgs : arrayFromArgs,
	join : function(ary, w) {
		var res = [];
		for(var i = 0; i < ary.length; i++) {
			res.push(ary[i]);
			if(i < ary.length-1)
				res.push(w);
		}
		return res;
	}
};
