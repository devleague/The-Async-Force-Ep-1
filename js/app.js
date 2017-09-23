console.log('sanity check'); 

var a = document.getElementById("person4Name");
var b = document.getElementById("person4HomeWorld");
var c = document.getElementById("person14Name");
var d = document.getElementById("person14Species");
var e = document.getElementById("filmList");

function requestProcess(request, url, elem) { 
  var reqListener = function() {
    let newHTML = JSON.parse(this.responseText); //the parse is important.
    if (elem) { //only if an elem is passed in
      elem.innerHTML = newHTML.name;
    }
  }
  request.addEventListener('load', reqListener);
  request.open("GET", url, true);
  request.send();
}

var oReq = new XMLHttpRequest();
requestProcess(oReq, 'http://swapi.co/api/people/4/', a);

var pReq = new XMLHttpRequest();
requestProcess(pReq, 'http://swapi.co/api/planets/1/', b);

var qReq = new XMLHttpRequest();
requestProcess(qReq, 'http://swapi.co/api/people/14/', c);

var rReq = new XMLHttpRequest();
requestProcess(rReq, 'http://swapi.co/api/species/1/', d);

var sReq = new XMLHttpRequest();
sReq.addEventListener('load', function() {
  let films = JSON.parse(this.responseText).results;
  console.log(films);

  for (var i = 0; i < films.length; i++) {

    var mainListItem = document.createElement("li");
    mainListItem.setAttribute('class', "film");

    var filmTitle = document.createElement("h2");
    filmTitle.setAttribute('class', "filmTitle");
    filmTitle.innerHTML = films[i].title;

    //there is a random h3 tag here that says "Planets"
    var planetsTag = document.createElement("h3");
    planetsTag.innerHTML = "Planets";

    var planetuList = document.createElement("ul");
    planetuList.setAttribute('class', "filmPlanets");
    var planetList = document.createElement("li");
    planetList.setAttribute('class', "planet");

    var planetItem = document.createElement("h4");
    planetItem.setAttribute('class', "planetName");

    //appending
    mainListItem.appendChild(filmTitle);
    mainListItem.appendChild(planetsTag);
    mainListItem.appendChild(planetuList);

    planetuList.appendChild(planetList);
    planetList.appendChild(planetItem);

    e.appendChild(mainListItem);
  }
});
sReq.open("GET", 'http://swapi.co/api/films/');
sReq.send();


























