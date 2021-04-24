
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "employee_tracker_db"
})

connection.connect();

module.exports = connection;