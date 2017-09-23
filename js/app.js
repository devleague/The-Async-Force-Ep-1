console.log('sanity check'); 

var a = document.getElementById("person4Name");
var b = document.getElementById("person4HomeWorld");
var c = document.getElementById("person14Name");
var d = document.getElementById("person14Species");
var e = document.getElementById("filmList");




function getUrl(request, url) {
  var reqListener = function() {

    let newUrl = JSON.parse(this.responseText).name;
    return newUrl;
  }
  request.addEventListener('load', reqListener);
  request.open("GET", url, true);
  request.send();
}





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
  var films = JSON.parse(this.responseText).results;
  mainUlist = document.createElement("ul");
  mainUlist.setAttribute('class', "filmList");
  e.appendChild(mainUlist);

  for (var i = 0; i < films.length; i++) {
    console.log(films[i].planets);
    let currentFilm = films[i];
    var filmItem = document.createElement("li");
    filmItem.setAttribute('class', "filmTitle");
    filmItem.innerHTML = "Title: " + films[i].title;
    filmItem.style.listStyleType = 'none'; 

      for (let j = 0; j < currentFilm.planets.length; j++) {
        let planetItem = document.createElement("h3");
        planetItem.setAttribute('id', "planetTitle");

        let planetReq = new XMLHttpRequest();
        let x = document.getElementById("planetTitle");
        requestProcess(planetReq, currentFilm.planets[j], x);

        filmItem.appendChild(planetItem);
      }

    mainUlist.appendChild(filmItem);
  }



});
sReq.open("GET", 'http://swapi.co/api/films/');
sReq.send();


























