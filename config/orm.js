var connection = require('./connection.js');

function stringify(string) {
    return JSON.stringify(string, null, 2);
}

// Object Relational Mapper (ORM)
var orm = {
    // * `selectAll()` 
    all: function(whatToSelect, callback) {
        var queryString = "SELECT ?? FROM burgers";
        connection.query(queryString, [whatToSelect],  function(err, data) {
            if (err) throw err;
            callback(data);
        });
    },

// all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;            **Example from another actiity**
//       }
//       cb(result);
//     });
//   },

    // * `insertOne()` 
    insert: function(name) {
        var queryString = "INSERT INTO burgers SET ?";
        console.log(name);
        connection.query(queryString, 
        {
            burger_name: name
        });
    },

    // * `updateOne()` 
    updateOne: function(name) {
        connection.query("UPDATE burgers SET ? WHERE ?", 
        {
            devoured: true
        }, {
            burger_name: name
        });
    }
}


module.exports = orm;