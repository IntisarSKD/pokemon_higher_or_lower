import { useState } from 'react';
import './App.css';
import LogInModal from './components/LogInModal';
import PlayContainer from './containers/PlayContainer';
import PokemonList from './components/PokemonList';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  return (
    <>
    <h1>Higher or Lower: Pokèmon edition</h1>
    <button>Login</button>
    <button>Play</button>
    <button>LeaderBoard</button>
    

    <PlayContainer/>
    {/* <LogInModal/> */}
    {/* <PokemonList/> */}
    </>
  );
}

export default App;
