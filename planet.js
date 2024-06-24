const planetsList = document.getElementById('planetsList');
const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');


async function getPlanets(){
  const res = await fetch('https://swapi2.azurewebsites.net/api/planets/${id}')
    .then(data => res.json())
    .then(console.log(data))
    .catch(err => {
      console.log('Error fetching API: ',err);
    }); 
  console.log(data);
}

getPlanets();
