var Film = require('./film');
var Review = require('./review');



var Films = function(){

  var review1 = new Review({
    comment: "Cinematic masterpiece :hmmmm:",
    rating: 100,
    author: "Kermit"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 99,
    author: "Herdier"
  });

  var film1 = new Film({
    title: "Blastoise: THE MOVIE",
    actors: [":lul:", ":hmmmm:"],
    genre: "Tragic Love Story"
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: "Spooker"
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
}

module.exports = Films;