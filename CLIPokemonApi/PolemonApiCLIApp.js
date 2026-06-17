//❗ this is fetchPokemon, check in terminal by:- node PolemonApiCLIApp.js //


import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
const askQuestion = () => {
    //Bulbasaur, ivysaur, charmander, charmander, charizard, pikachu
    console.log("eg: Bulbasaur, ivysaur, charmander, charmander, charizard, pikachu")
    rl.question("Enter Any PokemonName: ", (name) => {
        fetchElement(name);
    })
}
const fetchElement = async (n) => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=200";
    try {
        const response = await fetch(API)
        const data = await response.json();
        data?.results?.map((element) => {
            if ((element.name).toUpperCase() === n.toUpperCase()) {
                console.log(`Name: ${element.name}`);
                console.log(`Link: ${element.url}`);
                rl.close();
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

askQuestion();