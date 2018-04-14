// async function getPerson(url) {
//   let personReq = new XMLHttpRequest();
//   personReq.addEventListener('load', function() {
//     return JSON.parse(this.response);
//   });
//   personReq.open('GET', url);
//   personReq.send();
// }

// console.log(getPerson('https://swapi.co/api/people/4/'));

let personReq = new XMLHttpRequest();
personReq.addEventListener('load', function() {
  let personResponse = JSON.parse(this.response);
  document.getElementById('person4Name').innerText = personResponse.name;
  let homeReq = new XMLHttpRequest();
  homeReq.addEventListener('load', function() {
    let homeworldResponse = JSON.parse(this.response);
    document.getElementById('person4HomeWorld').innerText =
      homeworldResponse.name;
  });
  homeReq.open('GET', personResponse.homeworld);
  homeReq.send();
});
personReq.open('GET', 'https://swapi.co/api/people/4/');
personReq.send();

personReq = new XMLHttpRequest();
personReq.addEventListener('load', function() {
  let personResponse = JSON.parse(this.response);
  document.getElementById('person14Name').innerText = personResponse.name;
  let homeReq = new XMLHttpRequest();
  homeReq.addEventListener('load', function() {
    let speciesResponse = JSON.parse(this.response);
    document.getElementById('person14Species').innerText = speciesResponse.name;
  });
  homeReq.open('GET', personResponse.species);
  homeReq.send();
});
personReq.open('GET', 'https://swapi.co/api/people/14/');
personReq.send();

let filmReq = new XMLHttpRequest();
filmReq.addEventListener('load', function() {
  let films = JSON.parse(this.response).results;
  let filmList = document.getElementById('filmList');
  let filmItem = document.createElement('li');
  filmItem.className = 'film';
  films.forEach(function(elem) {
    let filmTitleHeading = document.createElement('h2');
    filmTitleHeading.className = 'filmTitle';
    filmTitleHeading.innerText = elem.title;
    filmItem.appendChild(filmTitleHeading);

    let planetHeading = document.createElement('h3');
    planetHeading.innerText = 'Planets';
    filmItem.appendChild(planetHeading);

    let planetList = document.createElement('ul');
    planetList.className = 'filmPlanets';
    elem.planets.forEach(function(elem) {
      let planetReq = new XMLHttpRequest();
      planetReq.addEventListener('load', function() {
        let planetsResponse = JSON.parse(this.response);
        let planetItem = document.createElement('li');
        planetItem.className = 'planet';
        let planetItemHeading = document.createElement('h4');
        planetItemHeading.className = 'planetName';
        planetItemHeading.innerText = planetsResponse.name;
        planetItem.appendChild(planetItemHeading);

        planetList.appendChild(planetItem);
      });

      planetReq.open('GET', elem);
      planetReq.send();
    });
    filmItem.appendChild(planetList);
  });
  filmList.appendChild(filmItem);
});
filmReq.open('GET', 'https://swapi.co/api/films/');
filmReq.send();
