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


let lists = new XMLHttpRequest();
lists.addEventListener('load', listFun);
lists.open('GET', "https://swapi.co/api/films/");
lists.send();

function listFun() {
  let data = JSON.parse(this.responseText);
  let filmData = data.results;

  filmData.forEach(function (items) {
    let filmTitle = items.title;
    let filmLi = document.createElement('div');
    document.getElementById('filmList').appendChild(filmLi);
    let filmTileH2 = document.createElement('h2');
    filmLi.appendChild(filmTileH2);
    filmTileH2.innerHTML = filmTitle;
    let plantH3 = document.createElement('h3');
    plantH3.innerHTML = 'Planets';
    filmLi.appendChild(plantH3);
    let filmPlanets = items.planets;

    filmPlanets.forEach(function (items) {
      let reqPlanets = new XMLHttpRequest();
      reqPlanets.addEventListener('load', planetFunc);
      reqPlanets.open('GET', items);
      reqPlanets.send();

      function planetFunc() {
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