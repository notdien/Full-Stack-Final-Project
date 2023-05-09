// connects the frontend to backend
// movieserver.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const glob = require('glob');
const https = require('https');
const ejs = require('ejs');
const axios = require('axios');
const readline = require('readline');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./views'));

// adding Mongo - allows connection to db.js and connection to the db
const {client, writeList, readList, addToList, deleteFromList} = require('./db');
const { response, urlencoded } = require('express');
const { read } = require('fs');

app.use(express.urlencoded({ extended: true }));
const API_KEY = 'deea2ba6514aa0559fea5c3a8d2aec2d'; // Replace with your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';
//Renders for the ejs pages
app.get('/create', function(req, res) {
    res.render('createList');
});

app.get('/add', function(req, res) {
    res.render('addToList');
})

app.get('/delete', function(req, res) {
    res.render('deleteFromList');
})

app.get('/viewall', function(req, res) {
    res.render('viewAll');
})

app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/signup', function(req,res) {
    res.render('signup');
})

//Async search function used to pull info from movie api
/*
        @description: method for searching the api for movies matching the user's input
        @method: /search
        @type: get
        @param: query, mediaType
        */
async function searchMovies(query, mediaType) {
    try {
      const response = await axios.get(`${BASE_URL}/search/${mediaType}`, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
      return { results: response.data.results, mediaType: mediaType };
    } catch (error) {
      console.error('Error searching for movies:', error.message);
      return { results: [], mediaType: mediaType };
    }
  }
  
  app.get('/', (req, res) => {
    res.render('home', { movies: [] });
  });
  
  app.post('/search', async (req, res) => {
    const query = req.body.query;
    const mediaType = req.body.mediaType;
    let searchResults;
    searchResults = await searchMovies(query, mediaType);
    res.render('home', { searchResults: searchResults });
  });
    
// post mongo method to allow creating a list
/*
        @description: method for gathering the neccesary variables to pass to the api in order to create the list
        @method: /create
        @type: post
        @param: name, description, iso_639_1, public, movie_list[]
        */
app.post('/list', async (req, res) => {
    var id = 8250000 + Math.floor(Math.random() * 1000000);
    var iso_639_1 = "en";
    var movie_list = [];

    var movie_list = {
        "id" : id,
        "name" : req.body.name,
        "description" : req.body.description,
        "iso_639_1" : iso_639_1,
        "public" : req.body.public,
        "movie_list": movie_list
    };

    await writeList(movie_list);
    res.status(200).send({id: id});
})

// post method for adding to a list
/*
        @description: method for gathering the neccesary variables to pass to the api in order to add movies or tv shows to the list
        @method: /add
        @type: post
        @param: id, media_type, media_id, movie_title
        */
app.post('/list/:id', async function(req, res) {
    var id = req.params.id;

    var items = {
        "movie_title": req.body.movie_title,
        "media_type": req.body.media_type,
        "media_id": req.body.media_id
    };

    var doc = await addToList(id, items);
    res.status(200).send();
})

// method for viewing a list
/*
        @description: method for gathering the neccesary variables to pass to the api in order to display the list to the user
        @method: /get
        @type: get
        @param: id, media_id
        */
app.get('/list/:id', async function (req, res) {
    var id = req.params.id;

    var doc = await readList(id);
    return res.status(200).send(doc);
})

// method for deleting
/*
        @description: method for gathering the neccesary variables to pass to the api in order to delete a movie or show from a list
        @method: /delete
        @type: delete
        @param: id, media_id
        */
app.delete('/list/:id', async function(req, res) {
    var id = req.params.id;
    id = parseInt(id);

    var items = {
        "media_id": req.body.media_id
    };

    await deleteFromList(id, items);
    res.status(200).send();
})

port = process.env.PORT || 5678
var listener = app.listen(port);
// app.listen(5678);
console.log('Server is running...');