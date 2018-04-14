let person4Request = new XMLHttpRequest();
person4Request.addEventListener("load", function () {
  let parsed = JSON.parse(this.response);
  document.getElementById("person4Name").innerHTML = parsed.name;

  let secondRequest = new XMLHttpRequest();
  secondRequest.addEventListener("load", function () {
    let parsed = JSON.parse(this.response);
    document.getElementById("person4HomeWorld").innerHTML = parsed.name;
  })
  secondRequest.open("GET", parsed.homeworld);
  secondRequest.send();
});
person4Request.open("GET", "https://www.swapi.co/api/people/4/");
person4Request.send();


let person14Request = new XMLHttpRequest();
person14Request.addEventListener("load", function () {
  let parsed = JSON.parse(this.response);
  document.getElementById("person14Name").innerHTML = parsed.name;

  let secondRequest = new XMLHttpRequest();
  secondRequest.addEventListener("load", function () {
    let parsed = JSON.parse(this.response);
    document.getElementById("person14Species").innerHTML = parsed.name;
  })
  secondRequest.open("GET", parsed.species[0]);
  secondRequest.send();
})
person14Request.open("GET", "https://www.swapi.co/api/people/14/");
person14Request.send();


let filmRequest = new XMLHttpRequest();
filmRequest.addEventListener("load", function () {
  let parsed = JSON.parse(this.response);
  console.log(parsed);
  console.log(parsed.results);
  for (let i = 0; i < parsed.results.length; i++) {
    let parent = document.getElementById("filmList");

    let film = document.createElement("li");
    film.className = "film";
    parent.appendChild(film);

    let title = document.createElement("h2");
    title.className = "filmTitle";
    title.innerHTML = parsed.results[i].title;
    film.appendChild(title);

    let planetsH3 = document.createElement("h3");
    planetsH3.innerHTML = "Planets";
    film.appendChild(planetsH3);

    let planetUL = document.createElement("ul");
    planetUL.className = "filmPlanets";
    film.appendChild(planetUL);

    for (let j = 0; j < parsed.results[i].planets.length; j++) {
      let planetRequest = new XMLHttpRequest();
      planetRequest.addEventListener("load", function () {
        let parsed = JSON.parse(this.response);

        let parent = document.createElement("li");
        parent.className = "planet";
        planetUL.appendChild(parent);

        let planetName = document.createElement("h4");
        planetName.className = "planetName";
        planetName.innerHTML = parsed.name;
        parent.appendChild(planetName);
      })
      planetRequest.open("GET", parsed.results[i].planets[j]);
      planetRequest.send();
    }
  }
})
filmRequest.open("GET", "https://www.swapi.co/api/films/");
filmRequest.send(); 