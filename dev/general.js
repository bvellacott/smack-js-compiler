module.exports = {
	newCompileResult : function(src, childResults) {
		var vars;
		if(childResults != null) {
			if(childResults.src)
				vars = (childResults.vars ? childResults.vars : []);
			else {
				vars = [];
				for(var i = 0; childResults != null && i < childResults.length; i++)
					vars.concat(childResults[i].vars);
			}
		}
		return { src : src, vars : vars };
	}	
};