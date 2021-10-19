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

const {MongoClient} = require("mongodb")
const clientMongo = new MongoClient("mongodb://localhost:27017/")

clientMongo.connect()

const database = clientMongo.db('WatchList')
const movies = database.collection('movies')
const users = database.collection('users')

movies.createIndex({'imdbID': 1}, {unique: true}).then(r => {
    console.log(r)
})


server.get('/movies', async (req, res) => {
    const movieDocs = await movies.find({}).toArray();
    res.send({
        total: movieDocs.size,
        movies: movieDocs
    })
})

server.patch('/movies', async (req, res) => {

    movies.updateOne({imdbID: req.body.id}, {"$set": {list: req.body.button}}, {}, function () {
        res.send({})
    });
})

server.post('/addFilm', (req, res) => {
    movies.insertOne(req.body.film, function () {
        res.send({})
    })
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
    users.updateOne({email: email}, {$set: user}, {upsert: true}, function () {
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
