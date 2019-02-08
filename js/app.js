//DARTH VADER
const p4 = new XMLHttpRequest();

function personFour() {
    const p4Req = JSON.parse(p4.responseText);
    const p4NameTag = document.querySelector('#person4Name');
    p4NameTag.innerHTML = p4Req.name;

    const p4HW = new XMLHttpRequest();

    function p4Home() {
        const p4HomeReq = JSON.parse(p4HW.responseText);
        const p4HomeTag = document.querySelector('#person4HomeWorld');
        p4HomeTag.innerHTML = p4HomeReq.name;
    }
    p4HW.addEventListener('load', p4Home);
    p4HW.open('GET', 'https://swapi.co/api/planets/1/');
    p4HW.send();
}

p4.addEventListener('load', personFour);
p4.open('GET', 'https://swapi.co/api/people/4/');
p4.send();

// HAN SOLO
const p14 = new XMLHttpRequest();

function personFourteen() {
    const p14Req = JSON.parse(p14.responseText);
    const p14NameTag = document.querySelector('#person14Name');
    p14NameTag.innerHTML = p14Req.name;

    const p14Species = new XMLHttpRequest();

    function fourteenSpecies() {
        const p14SpeciesReq = JSON.parse(p14Species.responseText);
        const speciesTag = document.querySelector('#person14Species');
        speciesTag.innerHTML = p14SpeciesReq.name;
    }
    p14Species.addEventListener('load', fourteenSpecies);
    p14Species.open('GET', 'https://swapi.co/api/species/1/');
    p14Species.send();
}

p14.addEventListener('load', personFourteen);
p14.open('GET', 'https://swapi.co/api/people/14/');
p14.send();

//FILM LIST

const filmList = new XMLHttpRequest();

function getFilmList() {
    const filmListReq = JSON.parse(filmList.responseText);

    let filmTable = document.getElementById('filmList');
    for (let i = 0; i < filmListReq.results.length; i++) {
        let filmCell = document.createElement('li');
        filmCell.className = 'film';
        filmTable.appendChild(filmCell);

        let filmH2 = document.createElement('h2');
        filmH2.className = 'filmTitle';
        filmH2.innerHTML = filmListReq.results[i].title;
        filmCell.appendChild(filmH2);

        let planetUl = document.createElement('ul');
        planetUl.className = 'planetUl';
        filmCell.appendChild(planetUl);

        let filmH3 = document.createElement('h3');
        filmH3.className = 'planetTitle';
        planetUl.appendChild(filmH3);
        filmH3.innerHTML = 'Planets';

        for (let j = 0; j < filmListReq.results[i].planets.length; j++) {
            planetCall(filmListReq.results[i].planets[j], planetUl);
        }

    }
}

function planetCall(url, planetUl) {
    let planetReq = new XMLHttpRequest();
    planetReq.addEventListener('load', function () {
        planetCell(this.responseText, planetUl)
    })
    planetReq.open('GET', url);
    planetReq.send();
}

function planetCell(name, planetUl) {
    let pReq = JSON.parse(name);
    let cell = document.createElement('li');
    cell.className = 'planet';
    cell.innerHTML = pReq.name;
    planetUl.appendChild(cell);

}

filmList.addEventListener('load', getFilmList);
filmList.open('GET', 'https://swapi.co/api/films/');
filmList.send();