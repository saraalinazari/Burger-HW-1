const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: "us-cdbr-iron-east-05.cleardb.net",
//   user: "b4f2a1196d0130",
//   password: '8fd9610d',
//   database: "heroku_30aa0966782038e"
// });

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;