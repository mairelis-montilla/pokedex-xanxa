import { getPokemons, getPokemonById } from './services.js';

const tableBody = document.getElementById('table-body');
const detailsSection = document.getElementById('details');

const innerPokemons = (pokemons) => {
	pokemons.forEach((pokemon, index) => {
		const tableRow = document.createElement('tr');
    tableRow.className = 'table-row ';
		tableBody.appendChild(tableRow).innerHTML = `
		<td>${pokemon.name}</td>
		<td><button class="button-primary">ver detalle</button></td>`;
			const btnModal = tableRow.querySelector('button');
			btnModal.addEventListener('click',() => {
				getPokemonById(pokemon.url).then(pokemonDetail => {
					detailsSection.innerHTML = `
					<li>Nombre: ${pokemonDetail.name}</li>
					<li>Peso: ${pokemonDetail.weight}</li>
					<li>Altura: ${pokemonDetail.height}</li>
					`;

				})
			})
	});
}



getPokemons().then(res => innerPokemons(res.results)) 

