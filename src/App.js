import { useState } from 'react';
import './App.css';
import PlayContainer from './containers/PlayContainer';
import PokemonList from './components/PokemonList';

function App() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogin = (username, password) => {
    const newUser = {
      username,
      password,
    };
    setListOfUsers([...listOfUsers, newUser]);
    setShowLoginModal(false);
  };

  return (
    <>
      <h1>Higher or Lower: Pokèmon edition</h1>
      <button onClick={toggleLoginModal}>Login</button>
      <button>Play</button>
      <button>LeaderBoard</button>

      {showLoginModal && (
        <LogInModal handleLogin={handleLogin} />
      )}

      <PlayContainer />
    </>
  );
}

export default App;

