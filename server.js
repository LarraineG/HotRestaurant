// Create Global Variables
var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Create Reservations

  const reservations = [
    {
        "name": "#"
        , "id": "11111"
        , "phone": "123-555-1234"
        , "email": "poop@gmail.com"
    },
    {
        "name": "#"
        , "id": "22222"
        , "phone": "281-555-4567"
        , "email": "yep@gmail.com"
    },
]
// Create Tables
// Front-End Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
// API Routes
app.get("/api/reservation", function (req, res) {
    res.json(reservation);
});

app.get("/api/tables", function (req, res) {
    res.json(tables);
});

// POST Call

// Server Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });