var person4Name = document.getElementById("person4Name");
var person4HomeWorld = document.getElementById("person4HomeWorld");
var person14Name = document.getElementById("person14Name");
var person14Species = document.getElementById("person14Species");
var filmList = document.getElementById("filmList");

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
requestProcess(oReq, 'http://swapi.co/api/people/4/', person4Name);

var pReq = new XMLHttpRequest();
requestProcess(pReq, 'http://swapi.co/api/planets/1/', person4HomeWorld);
//instead of a separate URL passed in, we want this 'url' value to be reliant on and derived from the previous code. 

var qReq = new XMLHttpRequest();
requestProcess(qReq, 'http://swapi.co/api/people/14/', person14Name);

var rReq = new XMLHttpRequest();
requestProcess(rReq, 'http://swapi.co/api/species/1/', person14Species);

var sReq = new XMLHttpRequest();
sReq.addEventListener('load', function() {
  var films = JSON.parse(this.responseText).results;
  mainUlist = document.createElement("ul");
  mainUlist.setAttribute('class', "filmList");
  filmList.appendChild(mainUlist);

  for (var i = 0; i < films.length; i++) {
    let currentFilm = films[i];

    var filmItem = document.createElement("li");
    filmItem.setAttribute('class', "filmTitle");
    filmItem.innerHTML = "Title: " + films[i].title;
    filmItem.style.listStyleType = 'none'; 

    currentFilm.planets.forEach(function(planetURL) {
        let plReq = new XMLHttpRequest();
        //we will need one request per planetURL..need to retrieve 'name'

        let planetItem = document.createElement("li");
        planetItem.style.listStyleType = 'square';
        
        //most of the main work is here, trying to retrieve a name from each planetURL passed into forEach...
        //need a better understanding of what my requestProcess() is doing
        planetItem.innerHTML = function(request, url, elem) {
          
          var reqListener = function() {
              let newHTML = JSON.parse(this.responseText);
              elem.innerHTML = newHTML.name;
            }
          request.addEventListener('load', reqListener);
          request.open("GET", url, true);
          request.send();
          
           //what gets returned is inside the HTML content.

        }(plReq, planetURL, planetItem);


        filmItem.appendChild(planetItem);


      });//end forEach

    mainUlist.appendChild(filmItem);


  }//end for loop



});
sReq.open("GET", 'http://swapi.co/api/films/');
sReq.send();


























