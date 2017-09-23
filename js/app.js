console.log('sanity check'); 

var a = document.getElementById("person4Name");
var b = document.getElementById("person4HomeWorld");
var c = document.getElementById("person14Name");
var d = document.getElementById("person14HomeWorld");
var e = document.getElementById("filmList");

function requestProcess(request, url, elem) { 
  var reqListener = function() {
    let newHTML = JSON.parse(this.responseText); //the parse is important.
    elem.innerHTML = newHTML.name;
  }
  request.addEventListener('load', reqListener);
  request.open("GET", url, true);
  request.send();
}

console.log();

var oReq = new XMLHttpRequest();
requestProcess(oReq, 'http://swapi.co/api/people/4/', a);

var pReq = new XMLHttpRequest();
requestProcess(pReq, 'http://swapi.co/api/planets/1/', b);

var qReq = new XMLHttpRequest();
requestProcess(qReq, 'http://swapi.co/api/people/14/', c);















