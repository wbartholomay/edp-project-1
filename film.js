const FilmsList = document.getElementById("filmsList");
const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");
let characters = [];
let planet = [];
const charactersList = document.querySelector("#charactersList");
const planetList = document.querySelector("#planetList");

async function getFilms() {
  const res = await fetch(`https://swapi2.azurewebsites.net/api/films/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching API: ", err);
    });
  console.log(res);
  fillFields(res);
}

function fillFields(res) {
  document.getElementById("producer").textContent = res["producer"];
  document.getElementById("title").textContent = res["title"];
  document.getElementById("episode_id").textContent = res["episode_id"];
  document.getElementById("director").textContent = res["director"];
  document.getElementById("release_date").textContent = res["release_date"];
  document.getElementById("OpeningCrawl").textContent = res["opening_crawl"];
}

async function getCharacters() {
  let url = `https://swapi2.azurewebsites.net/api/films/${id}/characters`;

  try {
    const fetchedCharacters = await fetch(url).then((res) => res.json());
    characters.push(...fetchedCharacters);
  } catch (ex) {
    console.error("Error reading characters.", ex.message);
  }
  console.log("All the characters are ", characters);
  renderCharacters(characters);
}

async function getPlanets() {
  let url = `https://swapi2.azurewebsites.net/api/films/${id}/planets`;

  try {
    const fetchedPlanets = await fetch(url).then((res) => res.json());
    planet.push(...fetchedPlanets);
  } catch (ex) {
    planet.error("Error reading characters.", ex.message);
  }
  console.log("All the characters are ", planet);
  renderCharacters(planet);
}

const renderCharacters = (characters) => {
  const divs = characters.map((character) => {
    const el = document.createElement("div");
    el.addEventListener("click", () => goToCharacterPage(character.id));
    el.textContent = character.name;
    return el;
  });
  charactersList.replaceChildren(...divs);
};

const renderPlanets = (planet) => {
  const divs = planet.map((planet) => {
    const el = document.createElement("div");
    el.addEventListener("click", () => (window.location = `/planet?id=${id}`));
    el.textContent = planet.name;
    return el;
  });
  planetList.replaceChildren(...divs);
};

const goToCharacterPage = (id) => (window.location = `/character?id=${id}`);

// 4bd794c593689c941b92196e4b7ff19a1410fa89
getFilms();
getCharacters();
getPlanets();
