const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'dbprestamos.c48curxpcfx0.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin1234',
  database: 'prueba',
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
