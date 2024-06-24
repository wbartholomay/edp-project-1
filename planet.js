const planetsList = document.getElementById('planetsList');
const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');
let characters = [];
const charactersList = document.querySelector("#charactersList")


async function getPlanets(){
  const res = await fetch(`https://swapi2.azurewebsites.net/api/planets/${id}`)
    .then(data => res.json())
    .then(console.log(data))
    .catch(err => {
      console.log('Error fetching API: ',err);
    }); 
  console.log(data);
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

const renderCharacters = characters => {
    const divs = characters.map(character => {
      const el = document.createElement('div');
      el.addEventListener('click', () => goToCharacterPage(character.id));
      el.textContent = character.name;
      return el;
    })
    charactersList.replaceChildren(...divs)
  }

const goToCharacterPage = id => window.location = `/character.html?id=${id}`

getPlanets();
getCharacters();
