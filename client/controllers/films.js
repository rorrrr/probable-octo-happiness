var express = require('express');
var filmRouter = express.Router();
var Films = require("../src/models/films")
var Film = require('../src/models/film');
var Review = require('../src/models/review');


var films = Films();


filmRouter.post('/', function(req, res) {
  films.push(req.body.film);
  res.json({data:films});
});

filmRouter.put('/:id', function(req,res){
  films[req.params.id] = req.body.film;
  res.json({data: films})
});

filmRouter.delete('/:id', function(req,res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

filmRouter.get('/', function(req,res){
  res.json(films);
});


filmRouter.get('/:id', function(req,res){
  res.json({data: films[req.params.id]});
});

module.exports = filmRouter;