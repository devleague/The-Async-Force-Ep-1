// console.log('hello');
(function() {
////////PERSON4NAME////////
var oReq = new XMLHttpRequest();
function reqListener() {
var personObj = JSON.parse(this.responseText);
document.getElementById("person4Name").innerHTML = personObj.name;

//////////PERSON4HOMEWORLD///////////////
  var homeworldReq = new XMLHttpRequest();
  function reqListener2() {
  var homeworldObj = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML = homeworldObj.name;
  } //second http request
  homeworldReq.addEventListener("load", reqListener2);
  homeworldReq.open("GET", personObj.homeworld);
  homeworldReq.send();

}
//first http request
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();
}());

//////////////////////////////////////

(function() {
  ///////////PERSON14NAME/////////////
var oReq = new XMLHttpRequest();
function reqListener() {
  var personObj = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = personObj.name;

//////////SPECIES////////////
var speciesReq = new XMLHttpRequest();
  function reqListener2(){
  var speciesObj = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML = speciesObj.name;
  }
  //second http request
  speciesReq.addEventListener("load", reqListener2);
  speciesReq.open('GET', personObj.species);
  speciesReq.send();
}
//first http request
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/14/");
oReq.send();

}());
////////////FILM LIST//////////////
(function() {
var filmList = document.getElementById("filmList");

var filmsReq = new XMLHttpRequest();
function reqListener() {
  var films = JSON.parse(this.responseText);
  console.log(films.results);

for (var i = 0; i < films.results.length; i++) {
  var ListOfFilms = document.createElement("li");
  var filmTitle = document.createElement("h2");
  filmTitle.innerHTML = films.results[i].title;
  ListOfFilms.appendChild(filmTitle);
  filmList.appendChild(ListOfFilms);

  ///////Planet Header H3///////
    var planetHeader = document.createElement("h3");
  planetHeader.innerHTML = "Planets";
  ListOfFilms.appendChild(planetHeader);


}
}
filmsReq.addEventListener("load", reqListener);
filmsReq.open("GET", "http://swapi.co/api/films/");
filmsReq.send();
}());



///////PLANETS////////////

// var PlanetReq = new XMLHttpRequest();
// function reqListener4b() {
//   var data = JSON.parse(this, responseText);


//   var ulPlanetCl = document.createElement("ul");
//   ulPlanetCl.className = "filmPlanets";
//   planet.appendChild(ulPlanetCl);

//   var liPlanet = document.createElement("li");
//   liPlanet.innerHTML = data.name;
// }

// PlanetReq.addEventListener("load", reqListener4b);
// PlanetReq.open("GET", "http://swapi.co/api/planets/2/");
// PlanetReq.send();


/////FILM 2 OF 4//////
// var oReq5 = new XMLHttpRequest();
// function reqListener5() {
//   var data = JSON.parse(this.responseText);

//   var films = document.getElementById("films");
//   var newFilm = document.createElement("li");
//   newFilm.className = "film";
//   newFilm.innerHTML = data.title;
//   films.appendChild(newFilm);

// }


// oReq5.addEventListener("load", reqListener5);
// oReq5.open("GET", "http://swapi.co/api/films/6/");
// oReq5.send();