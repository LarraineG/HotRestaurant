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
// API Routes
// POST Call
// Server Listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });