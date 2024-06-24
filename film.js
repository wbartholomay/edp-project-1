const baseUrl = `https://swapi2.azurewebsites.net/api`;
const filmList = document.querySelector("#filmList");
addEventListener("DOMContentLoaded", () => {
  filmsUl = document.querySelector("#films>ul");
  const sp = new URLSearchParams(window.location.search);
  const id = sp.get("id");
  getFilm(id);
});
async function getFilm(id) {
  let film;
  try {
    film = await fetchFilms(id);
    character.films = await fetchFilms(character);
  } catch (ex) {
    console.error(`Error reading film ${id} data.`, ex.message);
  }
  renderFilm(film);
}
