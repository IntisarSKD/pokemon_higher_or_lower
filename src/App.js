import { useEffect, useState } from 'react';
import './App.css';
import PlayContainer from './containers/PlayContainer';
import PokemonList from './components/PokemonList';

function App() {

  const [player, setPlayer] = useState("");

  // const fetchPlayer = async () => {
  //   const response = await fetch("http://localhost:8080/player");
  //   const data = await response.json();
  //   setPlayer(data);
  // }

//   useEffect(() => {
//     fetchPlayer();
// }, [])


  return (
    <>
    <h1>Pokemon: Higher or Lower!</h1>
    <PlayContainer player={player} setPlayer={setPlayer}/>
    </>
  );
}

export default App;
