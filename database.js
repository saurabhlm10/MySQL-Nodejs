const mysql = require('mysql');

// Replace the values with your database configuration details
const connection = mysql.createConnection({
  host: 'localhost', // or your database host
  user: 'saurabh', // your database username
  password: '1234', // your database password
  database: 'first_database', // your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
