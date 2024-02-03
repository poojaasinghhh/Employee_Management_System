import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeedb",
});

connection.connect(function (err) {
  if (err) {
    console.log("connection failed");
  } else {
    console.log("Succesfully connected!!");
  }
});

export default connection;
