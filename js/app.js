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
lists.addEventListener('load', function listFunc() {
  let data = JSON.parse(this.responseText);
  let result = data.results;
  console.log(data)
  let movieTitle = result.map(function (item, index) {
    return item.title
  })


  let filmPlanet = result.map(function (item, index) {
    return item.planets
  })

  let planets = filmPlanet.map(function (items, index) {
 let myPlanets = new XMLHttpRequest();
    myPlanets.addEventListener('load', function grabPlanet() {
      let data = JSON.parse(this.responseText);
      console.log(data.name);
    })
    myPlanets.open('GET', filmPlanet[index]);
    myPlanets.send();
  })


  for (let i = 0; i < movieTitle.length; i++) {


    let header = document.createElement('h1');
    let eachPlanet = document.createElement('li');
    eachPlanet.innerHTML = filmPlanet[i];
    header.innerHTML = movieTitle[i];
    filmList.appendChild(header);
    header.appendChild(eachPlanet)


  };

})
lists.open('GET', "https://swapi.co/api/films/");
lists.send();