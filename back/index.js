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
    // Get a map
    app.get('/map/:mapId', (req, res) => {
        const query = { map_id: parseInt(req.params.mapId) }
        dbo.collection('maps').findOne(query, function (err, result) {
            if (err) throw err
            res.send(result)
            console.log("Fetched map ", req.params.mapId)
            console.log(result)
            db.close
        })
    })
    // Get a choice
    app.get('/choice/:choiceId', (req, res) => {
        const query = { choice_id: parseInt(req.params.choiceId) }
        dbo.collection('choices').findOne(query, function (err, result) {
            if (err) throw err
            res.send(result)
            console.log("Fetched choice ", req.params.choiceId)
            console.log(result)
            db.close
        })
    })
    // Save a choice that has been made
    app.post('/choice/:userId', (req, res) => {
        const query = { user_id: parseInt(req.params.userId) }
        const update = { $push: { choices: { choice: req.body.choiceId, selected: req.body.optionId } } }
        dbo.collection('users').updateOne(query, update, function (err, result) {
            if (err) throw err
            res.send(result)
            console.log("Updated user ", req.params.userId)
            console.log(result)
            db.close
        })
    })
    // Add a new user
    app.post('/user', (req, res) => {
        dbo.collection('users').insertOne(req.body, function (err, result) {
            if (err) throw err
            res.send(result.insertedId)
            console.log("Added user ", req.body.username)
            db.close
        })
    })
    // Login
    app.post('/login', (req, res) => {
        const query = { username: req.body.username, password: req.body.password }
        dbo.collection('users').findOne(query, function (err, result) {
            if (err) throw err
            if (result) {
                res.status(200)
                console.log("Logged in as " + req.body.username)

            }
            else {
                res.status(404)
                console.log("Failed login")

            } res.send()
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
