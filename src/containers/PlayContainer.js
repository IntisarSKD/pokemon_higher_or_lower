import { useEffect, useState } from "react";
import EndGameModal from "../components/EndGameModal";
import PokemonList from "../components/PokemonList";

const PlayContainer = ({player, setPlayer}) => {
//     const [pokemons, setPokemons] = useState([]);
//     // const [pokemonToDisplay, setPokemonToDisplay] = useState([]);

//     const fetchPokemons = async () => {

//         const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
//         const jsonData = await response.json();
//         const urls = jsonData.results.map((result) => `https://pokeapi.co/api/v2/pokemon/${result.name}`);
        
//         const allPromises = [];
//         urls.forEach((url)=>{
//             allPromises.push(
//                 fetch(url)
//                 .then(response => response.json())
//             )
//         })

//         const allResults = await Promise.all(allPromises);

//         setPokemons(allResults.flat());
//         setPokemonToDisplay(allResults.flat());
// };

// useEffect(()=>{
//     fetchPokemons();
// }, []);

// const filterPokemonByName = (name) => {
//     const foundPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
//     setPokemonToDisplay(foundPokemon);
// }
//     return ( 
//         <>
//              <div>
//                 <h1>Kanto Higher or Lower</h1>
//             </div>
//             <div>
//                 {/* <PokemonForm filterN={filterPokemonByName} nonFilter={fetchPokemons}/> */}
//             </div>
//             <div>
//                 <PokemonList pokemons={pokemonToDisplay}/>
//             </div>
//         </>
//      );
}
 
export default PlayContainer;