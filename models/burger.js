var orm = require('../config/orm.js');

// code to run orm functions
var functions = {
	all: function(callback) {
		orm.all("*", callback);
	},

	insert: function(name) {
		orm.insert(name);
	}

	 //  all: function(cb) {
  //   orm.all("cats", function(res) {
  //     cb(res);                            **Example from activity**
  //   });
  // }
};

//export
module.exports = functions;