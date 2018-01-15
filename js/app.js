console.log('sanity check');

let person4 = document.getElementById('person4Name');
let person4World = document.getElementById('person4HomeWorld')
let person14Name = document.getElementById('person14Name')
let person14Species = document.getElementById('person14Species');
let filmList = document.getElementById('filmList');







let oReq = new XMLHttpRequest();
oReq.addEventListener('load', function personFour() {
  let data = JSON.parse(this.responseText);
  person4.innerHTML = data.name;
})
oReq.open('GET', 'https://swapi.co/api/people/4/');
oReq.send();



let p4 = new XMLHttpRequest();
p4.addEventListener('load', function p4World() {
  let data = JSON.parse(this.responseText);
  person4World.innerHTML = data.name;
})
p4.open('GET', 'https://swapi.co/api/planets/1/');
p4.send();





let nextPerson = new XMLHttpRequest();
nextPerson.addEventListener('load', function getName14() {
  let data = JSON.parse(this.responseText);
  person14Name.innerHTML = data.name;
})
nextPerson.open('GET', 'https://swapi.co/api/people/14/');
nextPerson.send();



let personSpecies = new XMLHttpRequest();
personSpecies.addEventListener('load', function getSpecies() {
  let data = JSON.parse(this.responseText);
   person14Species.innerHTML = data.name;
});
personSpecies.open('GET', 'https://swapi.co/api/species/1/')
personSpecies.send();









// instantiates XML
let lists = new XMLHttpRequest();
// adds an event when page is loaded.
lists.addEventListener('load', listFun);
// Grabs data from seletected website
lists.open('GET', "https://swapi.co/api/films/");
//invokes the request
lists.send();


//function that is used with event listner 
function listFun(){
  //parse xml into json file
  let data = JSON.parse(this.responseText);
  //grabs each element from results array.
  let filmData = data.results;
  
  
  //console.log(filmData);

  filmData.forEach(function(items){
    let filmTitle = items.title;
    let filmLi = document.createElement('div');
    // create div for title and planets
    document.getElementById('filmList').appendChild(filmLi);
    let filmTileH2 = document.createElement('h2');
    // create h2 and append it to the div.
    filmLi.appendChild(filmTileH2);
    filmTileH2.innerHTML = filmTitle;
    let plantH3 = document.createElement('h3');
    plantH3.innerHTML = 'Planets';
    filmLi.appendChild(plantH3);
    let filmPlanets = items.planets;

    filmPlanets.forEach(function(items){
      //second forEach nested inside first. Singles out each planet
      // in array into single string
      let reqPlanets = new XMLHttpRequest();

      reqPlanets.addEventListener('load', planetFunc);
      //GETS each of the singled out links
      reqPlanets.open('GET',items);
      reqPlanets.send();
      
      function planetFunc(){
        let data = JSON.parse(this.responseText);
        let planetName = data.name;
        
        let planetLi = document.createElement('li');
        filmLi.appendChild(planetLi);
        let planetNameH4 = document.createElement('h4');
        planetLi.appendChild(planetNameH4);
        planetNameH4.innerHTML = planetName;
      }
    })
 
 })





}