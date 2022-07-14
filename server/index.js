const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "=04Rhino",
  database: "crud_contact_react",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact (name, email, contact) VALUES ('Meshack','Meshack@gmail.com', '9237943210')";
  con.query(sqlInsert, (error, result) => {
    if (error) console.log("error", error);
    console.log("result", result);
    res.send("Hello World");
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
