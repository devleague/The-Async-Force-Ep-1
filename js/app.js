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
  // console.log(films.results);

  for (var i = 0; i < films.results.length; i++) { //iterate over the film list from http://swapi.co/api/films/
    var ListOfFilms = document.createElement("li");
    var filmTitle = document.createElement("h2");
    filmTitle.innerHTML = films.results[i].title; //fill each h2 with each index from http://swapi.co/api/films/ "results" key:tile
    ListOfFilms.appendChild(filmTitle);
    filmList.appendChild(ListOfFilms);

  ///////PlanetS Header H3///////
  var planetHeader = document.createElement("h3");
  planetHeader.innerHTML = "Planets";
  ListOfFilms.appendChild(planetHeader);
  ///'ul' element 'filmPlanets' under h3
  var planetUL = document.createElement("ul");
  planetUL.className = "filmPlanets";
  ListOfFilms.appendChild(planetUL);
}
  //<<<-HOLD---PLANETS IN THE WORKS :(

var planetNameReq = new XMLHttpRequest();
  (function reqListener2(){
    var planets = JSON.parse(this.responseText);
  for (var j = 0; j < films.results.length; j++) {
    var filmPlanets = document.createElement("li");
    filmPlanets.className = "planet";
    // filmPlanets.innerHTML = film.results[j].planets;

    var planetName = document.createElement("h4");//<<<---
    planetName.innerHTML = planets.results[j].name;
    planetUL.appendChild(filmPlanets);
    filmPlanets.appendChild(planetName);
    }
    planetNameReq.addEventListener("load", reqListener2);
    planetNameReq.open('GET', planets.name);
    planetNameReq.send();
  }());


  }



  ///////PLANETS////////////
// var PlanetReq = new XMLHttpRequest();
// function reqListener2() {
//   var data = JSON.parse(this, responseText);

//   var ulPlanetCl = document.createElement("ul");
//   ulPlanetCl.className = "filmPlanets";
//   planet.appendChild(ulPlanetCl);

//   var liPlanet = document.createElement("li");
//   liPlanet.innerHTML = data.name;
// }


// PlanetReq.addEventListener("load", reqListener2);
// PlanetReq.open("GET", "http://swapi.co/api/planets/2/");
// PlanetReq.send();


filmsReq.addEventListener("load", reqListener);
filmsReq.open("GET", "http://swapi.co/api/films/");
filmsReq.send();
}());
