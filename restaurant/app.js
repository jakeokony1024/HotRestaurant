let express = require("express");
let path = require("path");
let mysql = require("mysql");
let randomstring = require("randomstring");

let app = express();
let PORT = 3001;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: "tomsucks12",
    database: "hot_restaurants"
  })
  connection.connect()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/html/index.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "/html/reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/html/tables.html"));
});
app.get("/api/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "/html/tables.html"));
});
app.get("/api/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/html/tables.html"));
});
let waitlist = [{
    name:"",
    number:0,
    email: "",
    unique_id:""
}];
let reserve = [{
    name:"",
    number:0,
    email: "",
    unique_id:""
}];
connection.query('SELECT * FROM restaurants', function (err, res) {
    if (err) throw err
    console.table(res);
})
let randomID= randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  });
  console.log(randomID)
connection.end();
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});