import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInModal from './LogInModal';

const LogInForm = () => {
  const navigate = useNavigate();
  const [listOfUsers, setListOfUsers] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [player, setPlayer] = useState(null); // Changed to null since there's only one player
  const [gameStarted, setGameStarted] = useState(false);

  const handleJoin = () => {
    setShowLoginModal(true);
  };

  const handleLogin = async (username, password) => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    const newPlayer = { username, password };
    setListOfUsers([...listOfUsers, newPlayer]);
    setShowLoginModal(false);
    setIsUserRegistered(true);
    await postPlayer(newPlayer);
  };

  const handlePlay = async () => {
    if (!isUserRegistered) {
      alert('User not created, please create a user first to play');
    } else {
      const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      setGameStarted(true);
      navigate('/play');
    }
  };

  const postPlayer = async (newPlayer) => {
    const response = await fetch('http://localhost:8080/api/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer),
    });
    const savedPlayer = await response.json();
    setPlayer(savedPlayer);
  };

  const spriteUrls = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
  ];

  return (
    <>
      <div className='title-screen'>
        <h1>Higher or Lower: Pokémon edition</h1>
      </div>
      <div className="sprite-container">
        {spriteUrls.map((url, index) => (
          <img 
            key={index}
            className={`sprite sprite-${index + 1}`}
            src={url}
            alt="pokemon sprite"
          />
        ))}
      </div>
      <div className='buttons-container'>
        <button onClick={handleJoin}>Join</button>
        <button onClick={handlePlay} disabled={gameStarted}>
          Play
        </button>
        <button>LeaderBoard</button>
      </div>

      {showLoginModal && <LogInModal handleLogin={handleLogin} />}
      {isUserRegistered && <p>User created, you can now play</p>}
    </>
  );
};

export default LogInForm;
