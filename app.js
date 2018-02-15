var myfaker = require('faker');//refers to faker package
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'join_us'
});
//creates connection to db

//SELECTING number of users
// var query = 'SELECT COUNT(*) AS total FROM users';
// connection.query(query, function(error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });
//
// connection.end();

//INSERTING users dynamically using Faker random generator 
var person = {email: myfaker.internet.email() };
//transforms in INSERT INTO users (email) VALUES ('email_name');
connection.query('INSERT INTO users SET ?', person, function(error, results) {
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
