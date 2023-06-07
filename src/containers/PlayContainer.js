import { useState } from "react";
import EndGameModal from "../components/EndGameModal";
import PokemonList from "../components/PokemonList";

const PlayContainer = () => {
    const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
    const [loggedInPlayer, setLoggedInPlayer] = useState([]);

    return ( 
        <>
        <h2>PlayContainer</h2>
        {/* <PokemonList/> */}
        {/* Game container is as an on click feature for a return to homePage button */}
        {/* <App/> */}
        {/* <EndGameModal/> */}
        </>
     );
}
 
export default PlayContainer;