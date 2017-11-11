var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

connection = mysql.createConnection({
		host: "localhost",
		port: 3306,

		//Username
		user: "root",

		 //Password
		password: "jQB0#NCaXMWkjDXBP51zKR2TGs7GM0ZEN6!hBuRlNyxE@!P%yUNFWiS#Bq&7!cKTwQ@UIxcSGk3f4cbN71feXvaRrr3#cpnMzc4D",
		database: "burgers_db"
	});
};

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",             **Example from activity**
//   password: "",
//   database: "cat_db"
// });

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;
