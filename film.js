const FilmsList = document.getElementById("filmsList");
const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");

async function getFilms() {
  const res = await fetch(`https://swapi2.azurewebsites.net/api/films/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log("Error fetching API: ", err);
    });
  console.log(res);
}

getFilms();