import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Filecontext } from "../reactrouter/FileContext";
import "../EndGameModalStyle/EndGameModal.css"; // Update the import path for CSS


const EndGameModal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const score = location.state?.score;
    const {currentGame, setCurrentGame} = useContext(Filecontext);
    const {player, setPlayer} = useContext(Filecontext);

    const handlePlayAgain = async () => {
        const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      
        const newGame = await response.json();
        setCurrentGame(newGame);
        navigate("/play");
      };      
      
    const handleMainMenu = () => {
            navigate ("/login")
        };
return (
  <div className="end-game-modal">
    <h1>Game Over!</h1>
    <p>Final Score: {score}</p>
  <div className="button-container">
    <button onClick={handlePlayAgain}>Play again</button>
    <button onClick={handleMainMenu}>Main Menu</button>
  </div>
</div>
         );
      
        };
export default EndGameModal;