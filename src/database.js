const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'prestamos-mysql-database.cdl4oynblaj7.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin12345',
  database: 'lenders',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
