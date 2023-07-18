import mysql from "mysql";

let connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "maaz",
  database: "employee",
});

connectDB.connect((err) => {
  if (err) {
    console.log("Database connection failed", err);
    return;
  }

  console.log("Connected to Database");
});

export default connectDB;
