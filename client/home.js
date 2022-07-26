

const d = document;
const url = "http://localhost:3000/"


async function getPokemon() {

  //Agregar codigo para limpiar el DOM cada vez que se haga una llamada

  //se obtiene el pokemon del input
  let pokemon = d.getElementById("pokemon-name").value
  
  //se hace llamada al backend
  let response = await (await fetch(`${url}pokemon/${pokemon}`, { method: "GET" })).json()
  
  
  //se agregan los multiples elementos al DOM
  let header = d.createElement("h4")
  let text = d.createTextNode(" El pokemon que buscaste es: "+ response.pokemon.name)
  header.appendChild(text)

  const img = d.createElement("img");
  img.src = response.pokemon.sprites.front_default;
  let element = d.getElementById("pokedex-container")
    
  element.appendChild(header)
  element.appendChild(img)

  console.log(response);  
}


