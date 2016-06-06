var getFileContents = function(path, cb) {
   $.ajax({url: path,
       async: true,
       success: function(contents) { cb(contents); }
   });
};

var module = {};