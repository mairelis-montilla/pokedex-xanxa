const urlApi = "https://pokeapi.co/api/v2/pokemon";


const getPokemons = (() => fetch(`${urlApi}`).then((response) => response.json()));
const getPokemonById = ((url)=> fetch(`${url}`).then((response) => response.json()))




export {
  getPokemons,
  getPokemonById
}