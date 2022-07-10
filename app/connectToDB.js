const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
  });

function connectToDB(){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connect to DB successfully!");
      });
}

module.exports = connectToDB
