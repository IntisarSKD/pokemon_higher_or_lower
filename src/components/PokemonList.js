import Pokemon from "./Pokemon";

const PokemonList = ({pokemons}) => {

    const pokemonComponents = pokemons.map((pokemon, index) => {
        return(
            <Pokemon
                key={index}
                pokemon={pokemon}
            />  
        )
    });
    
        return ( 
            <>
                <div>
                    <hr/>
                    <h2>Professor Oak's Notes:</h2>
                    <hr/>
                    {/* <PokemonForm pokemonComponents={pokemonComponents}/> */}
                </div>
                {pokemonComponents}
            </>
         );
    }
export default PokemonList;