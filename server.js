
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        "name": "Homer Simpson"
        , "id": "0000"
        , "phone": "555-555-1234"
        , "email": "Mmmmm@donuts.com"
    },
    {
        "name": "Norman Bates"
        , "id": "1959"
        , "phone": "555-555-2345"
        , "email": "ilovemymom@batesmotel.com"
    },
    {
        "name": "Dr. Emmett Brown"
        , "id": "1555"
        , "phone": "555-555-3456"
        , "email": "greatscott@thefuture.com"
    },
];

const tables = [
    {
        "name": "Lucy Ricardo"
        , "id": "1951"
        , "phone": "555-555-4567"
        , "email": "vitameatavegamin@waaaah.com"
    },
];

// FRONT-END ROUTES_______________________________________

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// API ROUTES_____________________________________________
app.get("/api/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/api/tables", function (req, res) {
    res.json(tables);
});

// POST CALL______________________________________________
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body;
    if (tables.length <= 4) {
        tables.push(newReservation);
        res.json(newReservation);
    } else {
        reservations.push(newReservation);
        res.json(newReservation);
    }
})



// SERVER LISTEN_________________________________________
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});