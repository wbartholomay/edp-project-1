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
  fillFields(res);
}

function fillFields(res){
  document.getElementById('climate').textContent = res['climate'];
  document.getElementById('surface_water').textContent = res['surface_water'];
  document.getElementById('name').textContent = res['name'];
  document.getElementById('diameter').textContent = res['diameter'];
  document.getElementById('rotation_period').textContent = res['rotation_period'];
  document.getElementById('gravity').textContent = res['gravity'];
  document.getElementById('orbital_period').textContent = res['orbital_period'];
  document.getElementById('population').textContent = res['population'];
}
getPlanets();
