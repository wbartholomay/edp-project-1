const planetsList = document.getElementById('planetsList');
const sp = new URLSearchParams(window.location.search);
const id = sp.get('id');


async function getPlanets(){
  const res = await fetch(`https://swapi2.azurewebsites.net/api/planets/${id}`)
    .then(res => res.json())
    .catch(err => {
      console.log('Error fetching API: ',err);
    }); 
  console.log(res);
}

getPlanets();
