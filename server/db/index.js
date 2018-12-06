
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
// const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to DB');
    throw err;
  }
  console.log('D0llar Bill$ & WAVYDAVY CONNNECT ESTABLISHED YALL!');
});

module.exports = connection;

