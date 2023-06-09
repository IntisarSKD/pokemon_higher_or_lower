import { useLocation, useNavigate } from 'react-router-dom';

const EndGameModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;

  const handlePlayAgain = () => {
    navigate('/play');
  };

  const handleMainMenu = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Game Over!</h1>
      <p>Final Score: {score}</p>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handleMainMenu}>Main Menu</button>
    </>
  );
};

export default EndGameModal;