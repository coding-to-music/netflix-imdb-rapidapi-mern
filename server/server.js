const express = require('express')
const server = express()
const port = 4000

const Datastore = require('nedb')
const data = new Datastore({filename: 'lists.jsonl', autoload: true});


server.get('/movies', (req, res) => {
    data.find({}, function (err, docs) {
        res.send({
            total: docs.size,
            movies: docs
        })
    });
})



server.put('/movies', (req, res) => {
// console.log(req);
// console.log(res);
})

server.listen(port);
