const express = require('express')
const server = express()
server.use(express.json())
const port = 4000
let axios = require("axios").default;


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

server.patch('/movies', (req, res) => {
    data.update({id: req.body.id}, {"$set": {list: req.body.button}}, {}, function () {
        res.send({})
    });
})



server.get('/search', (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: req.query.title , page: '1', r: 'json'},
        headers: {
            'x-rapidapi-key': 'fc70546d83mshdcf9962f06d8477p153515jsne6f83892decf',
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
        }
    };

    axios.request(options)
        .then(function (response) {
            res.send({
                result: response.data
            })
        })
        .catch(function (error) {
            console.error(error);
        });
})
server.get('/search/full', (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {i: req.query.id, r: 'json', plot: 'full'},
        headers: {
            'x-rapidapi-key': 'fc70546d83mshdcf9962f06d8477p153515jsne6f83892decf',
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
        }
    };

    axios.request(options)
        .then(function (response) {
            res.send({
                result: response.data
            })
        })
        .catch(function (error) {
            console.error(error);
        });
})


server.listen(port);
