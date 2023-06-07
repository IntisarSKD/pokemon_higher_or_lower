const Pokemon = ({pokemon}) => {

return ( 
    <div className="pokemon">
        <h4>Name: {pokemon.results.name.toUpperCase()}</h4>
        <h4>Type: {pokemon.type.name}</h4>
    </div>
 );
}
 
export default Pokemon;