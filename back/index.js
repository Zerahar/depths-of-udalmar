const express = require("express");
const cors = require("cors");
const app = express();
const pass = "dbpass123"
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:3000"
};

var MongoClient = require('mongodb').MongoClient;
var dev_url = `mongodb+srv://dbAdmin:${pass}@cluster0.q4dhm.mongodb.net/`
var url = process.env.MONGODB_URI || dev_url;


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("udalmar");
    console.log("Connected to database");
    // Get a text
    app.get('/text/:textId', (req, res) => {
        const query = { text_id: parseInt(req.params.textId) }
        dbo.collection('texts').findOne(query, function (err, result) {
            if (err) throw err
            res.send(result)
            console.log("Fetched text ", req.params.textId)
            console.log(result)
            db.close
        })
    })
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
