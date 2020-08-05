// let googleMapsAPI = "https://maps.googleapis.com/maps/api/streetview?parameters";
let pokeAPI = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=200";

//AIzaSyBztG6I3ViTEWyVVPNPA2uHJdGImdRbt3k
// ^^^ API KEY.

//https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key=AIzaSyBztG6I3ViTEWyVVPNPA2uHJdGImdRbt3k;


// fetch(pokeAPI)
//     .then(function(response){
//         return response.json();
//     }
//     .then(function(myJson){
//         getPokemon(myJson.results[0]);
//         console.log(myJson);
//     })
// })
// function displayData(person){


// }
fetch(pokeAPI)
     .then(function(response){
         return response.json();
     })
     .then(function(myJson){
         getPokemon(myJson.results[5].name);
         console.log(myJson);
     })
    
     function getPokemonInfo(url) {
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(pokeData){
                let name = results.name[0];
                console.log(name);
            })