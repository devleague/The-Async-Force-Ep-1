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

// console.log(personResponse);

// person4Name = personResponse.name;
// console.log(person4Name);
