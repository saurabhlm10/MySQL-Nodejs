const connection = require('./database');

connection.query(
  "INSERT INTO example_table (name, age) VALUES ('Saurabh', 30)",
  (error, results, fields) => {
    if (error) throw error;
    console.log('The result is: ', results);
  }
);

connection.query('SELECT * FROM example_table', (error, results, fields) => {
  if (error) throw error;
  console.log('The result is: ', results);
});

// Close the database connection
connection.end();
