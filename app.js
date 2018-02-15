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

// //INSERTING users dynamically using Faker random generator
// var person = {
//   email: myfaker.internet.email()
//   created_at: myfaker.date.past()
// };
// //transforms in INSERT INTO users (email) VALUES ('email_name');
// connection.query('INSERT INTO users SET ?', person, function(error, results) {
//   if (error) throw error;
//   console.log(results);
// });
//
// connection.end();

//INSERTING 500 users dynamically into users
var data = [];
for (var i = 0; i < 500; i++) {
  data.push([
    myfaker.internet.email(),
    myfaker.date.past()
  ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?'
//transforms in INSERT INTO users (email) VALUES ('email_name');
connection.query(q, [data], function(error, results) {
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
