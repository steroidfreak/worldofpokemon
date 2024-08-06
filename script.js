// jsonbin id 66b1a12fe41b4d34e41c4b14
//creating constant for jsobin api login information as below
const jsonbin_root = "https://api.jsonbin.io/v3";
const jsonbin_base_id = "66b1a12fe41b4d34e41c4b14";
const url = jsonbin_root + jsonbin_base_id;

let output = "";
let name = "";
let i = 0;

//using axios.get to get response from jsonbin and pass to renderList for display of data
//on screen for viewing
async function getData(){

    let response = await axios.get(`${jsonbin_root}/b/${jsonbin_base_id}/latest`)
    let i = getRandomInt(1,441);
    return response.data.record.pokemon[i].name.toLowerCase();

}

async function searchPokemon(name){

    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(response.data);
    output = response.data.sprites.other["official-artwork"].front_shiny;
    return output;
}


document.addEventListener("DOMContentLoaded", async function(){

    let display = document.querySelector("#pokemon");
    let displayname = document.querySelector("#pokemon_name")

        let randomPokemon = await getData();
        let name = await searchPokemon(randomPokemon);
        // displayname.innerHTML = `<h1>"</h1>`        
        display.innerHTML = `  <img src="${output}" class="pic" alt="${name}">`
        displayname.innerHTML = `<h2>${randomPokemon}</h2>`;
        


})

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
