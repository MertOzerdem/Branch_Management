const express = require('express');
const db = require('mysql2');
const app = express();

db.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'branch_management',
    port: 5004
});

app.get('/', function (req, res) {
    res.send("Hello There");
    console.log('hello log')
    try {
        db.promise().query("INSERT INTO branch VALUES(5,111,333,'branch5','nodejs request',02920292029)");
        res.status(201).send({
            msg: 'Created'
        });
    } catch (err) {
        console.log(err);
    }
});

app.post('/', (req, res) => {
    console.log('post send');
    try {
        db.promise().query("INSERT INTO branch VALUES(5,111,333,'branch5','nodejs request',02920292029)");
        res.status(201).send({
            msg: 'Created'
        });
    } catch (err) {
        console.log(err);
    }
});

const port = 3000;

app.listen(port, function () {
    console.log("Listening on port 3000!")
})