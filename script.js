// let googleMapsAPI = "https://maps.googleapis.com/maps/api/streetview?parameters";
let pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";


fetch(pokeAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(myJSON){
        getPokemon(myJSON.results);
    })

// let name = 
function getPokemon(pokemonArray) {
    for (let i=0; i < pokemonArray.length; i++) {
        let pokemonURL = pokemonArray[i].url;
        getPokemonInfo(pokemonURL);
        
    }
}
function getPokemonInfo(url) {
    fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(pokeData) {
                let ability = pokeData.abilities[0].ability.name;
                let capitalizedAbility = ability.charAt(0).toUpperCase() + ability.slice(1);
                let name = pokeData.forms[0].name;
                let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                let type = pokeData.types[0].type.name;
                let capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
                console.log(name);
                // console.log(power);
                let div = document.createElement("div");
                let about = document.createElement("p");
                about.innerHTML = "<strong>" + "Name: " + "</strong>" + capitalizedName +"," + "<br>" + "<strong>" + "Primary Type: " + "</strong>" + capitalizedType + "," + "<br>" + "<strong>" + "Ability: " + "</strong>" + capitalizedAbility;
                // document.body.appendChild(p)
                let sprite = pokeData.sprites.front_default;
                let img = document.createElement("img");
                img.src = sprite;
                img.addEventListener('mouseover', function() {
                    img.style.display = "none";
                    div.appendChild(about);
                })
                img.addEventListener('mouseout', function() {
                    img.style.display = "";
                    div.removeChild(about);
                })
                div.appendChild(img);
                // div.appendChild(about);
                document.body.appendChild(div);
            })
}