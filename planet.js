const planetsList = document.getElementById("planetsList");
const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");
let characters = [];
let films = [];
const charactersList = document.querySelector("#charactersList");
const filmsList = document.querySelector("#filmsList");

async function getPlanets() {
  const res = await fetch(`https://swapi2.azurewebsites.net/api/planets/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching API: ", err);
    });
  console.log(res);
  fillFields(res);
}

function fillFields(res){
  document.getElementById('climate').textContent = res['climate'];
  document.getElementById('surface_water').textContent = res['surface_water'];
  document.getElementById('name2').textContent = res['name'];
  document.getElementById('name').textContent = res['name'];
  document.getElementById('diameter').textContent = res['diameter'];
  document.getElementById('rotation_period').textContent = res['rotation_period'];
  document.getElementById('gravity').textContent = res['gravity'];
  document.getElementById('orbital_period').textContent = res['orbital_period'];
  document.getElementById('population').textContent = res['population'];
}

async function getFilms() {
    let url = 'https://swapi2.azurewebsites.net/api/films';
  
    try {
      const fetchedFilms = await fetch(url)
        .then(res => res.json())
      films.push(...fetchedFilms);
    }
    catch (ex) {
      console.error("Error reading films.", ex.message);
    }
    console.log("All the films are ", films)
    renderFilms(films.slice(0,6));
  }

async function getCharacters() {
    let url = 'https://swapi2.azurewebsites.net/api/characters';
  
    try {
      const fetchedCharacters = await fetch(url)
        .then(res => res.json())
      characters.push(...fetchedCharacters);
    }
    catch (ex) {
      console.error("Error reading characters.", ex.message);
    }
    console.log("All the characters are ", characters)
    renderCharacters(characters);
  }

const renderFilms = films => {
    const divs = films.map(film => {
        const el = document.createElement('div');
        el.addEventListener('click', () => window.location = `/film?id=${id}`);
        el.textContent = film.title;
        return el;
    })
    filmsList.replaceChildren(...divs)
}

const renderCharacters = characters => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => window.location = `/character?id=${id}`)
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }

const goToCharacterPage = id => window.location = `/character?id=${id}`

// 4bd794c593689c941b92196e4b7ff19a1410fa89
getPlanets();
getCharacters();
getFilms();
