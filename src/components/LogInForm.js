import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInModal from './LogInModal';

const LogInForm = () => {
  const navigate = useNavigate();

  const [listOfUsers, setListOfUsers] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const handleJoin = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (username, password) => {
    const newUser = {
      username,
      password,
    };
    setListOfUsers([...listOfUsers, newUser]);
    setShowLoginModal(false);
    setIsUserRegistered(true);
  };

  const handlePlay = () => {
    if (!isUserRegistered) {
      alert('User not created, please create a user first to play');
    } else {
      navigate('/play');
    }
  };

  return (
    <>
      <h1>Higher or Lower: Pokémon edition</h1>
      <button onClick={handleJoin}>Join</button>
      <button onClick={handlePlay}>Play</button>
      <button>LeaderBoard</button>

      {showLoginModal && (
        <LogInModal handleLogin={handleLogin} />
      )}

      {isUserRegistered && <p>User created, you can now play</p>}
    </>
  );
};

export default LogInForm;

