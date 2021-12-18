const express = require("express");
const cors = require("cors");
const app = express();
const pass = "dbpass123"
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:3000"
};

var MongoClient = require('mongodb').MongoClient;
var dev_url = `mongodb+srv://dbAdmin:${pass}@cluster0.q4dhm.mongodb.net/udalmar?retryWrites=true&w=majority`
var url = process.env.MONGODB_URI || dev_url;
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Connected to database");
    db.close();
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


// error handling middleware
app.use(function (err, req, res, next) {
    //console.log(err);
    res.status(422).send({ error: err.message });
});

// set port, listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
