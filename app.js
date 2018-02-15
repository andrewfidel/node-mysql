var myfaker = require('faker');//refers to faker package
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'join_us'
});
//creates connection to db

var query = 'SELECT 1+5 AS answer';
connection.query(query, function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();

// console.log(myfaker.address.city());

// function generateAddress() {
//     console.log(myfaker.address.streetAddress());
//     console.log(myfaker.address.city());
//     console.log(myfaker.address.state());
// }
//
// generateAddress();
