const express = require('express')
const cookieSession = require('cookie-session')
const server = express()
server.use(express.json(),
    /*sessions({
        secret: 'asgsdfgsadfgasd',
        resave: false,
        saveUninitialized: true,
        cookie: {secure: true}
    }),*/
    cookieSession({
        name: 'session',
        keys: ["12345"],
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }))
const port = 4000
let axios = require("axios").default;


const Datastore = require('nedb')
const data = new Datastore({filename: 'lists.jsonl', autoload: true});
const users = new Datastore({filename: 'users.jsonl', autoload: true});

data.ensureIndex({fieldName: 'imdbID', unique: true}, function () {
})


server.get('/movies', (req, res) => {
    data.find({}, function (err, docs) {
        res.send({
            total: docs.size,
            movies: docs
        })
    });
})

server.patch('/movies', (req, res) => {
    data.update({imdbID: req.body.id}, {"$set": {list: req.body.button}}, {}, function () {
        res.send({})
    });
})

server.get('/search', (req, res) => {
    let options = {
        method: 'GET',
        url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
        params: {s: req.query.title, page: '1', r: 'json'},
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

server.post('/addFilm', (req, res) => {
    data.insert(req.body.film, function () {
        res.send({})
    })
})


const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

server.post("/api/v1/auth/google", async (req, res) => {
    const {token} = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const {name, email, picture} = ticket.getPayload();
    let user = {name, picture, email}
    req.session.userEmail = user.email
    users.update({email: email}, user, {upsert: true}, function () {
            res.send(user)
        }
    )
})

server.get("/user", (req, res) => {
    users.findOne({email: req.session.userEmail}, function (err, docs) {
        if (!docs) {
            res.status(401).send({error: 'Something failed!', user: null})
            return;
        }
        res.send({
            user: docs
        })
    })
})

server.delete("/logout", (req, res) => {
    req.session.userEmail = null;
    res.send({})
})


server.listen(port);
