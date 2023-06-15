import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Filecontext } from "../reactrouter/FileContext";
import "../EndGameModalStyle/EndGameModal.css"; // Update the import path for CSS
import pikachuImage from "../images/pikachu.gif";
import pikachusquirtleImage from "../images/squirtle-pikachu.gif";



const EndGameModal = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const score = location.state?.score;
    const {currentGame, setCurrentGame} = useContext(Filecontext);
    const {player, setPlayer} = useContext(Filecontext);

    const scoreImages = {
      0: pikachuImage,
      1: pikachusquirtleImage,
      2: pikachusquirtleImage,
      // Add more score ranges and corresponding image URLs as needed
    };
    

    let imageURL = "";

    if (score < 0) {
      imageURL = scoreImages[0];
    } else if (score >= 0 && score < 5) {
      imageURL = scoreImages[1];
    } else {
      imageURL = scoreImages[2];
    }

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
  <div className="background-image">
    {score === 0 ? (
      <img src={pikachuImage} alt="Pikachu" />
    ) : (
      <img src={pikachusquirtleImage} alt="Pikachu-Squirtle" />
    )}
  </div>
  <div className="content">
    <h1>Game Over!</h1>
    <p>Final Score: {score}</p>
    <button onClick={handlePlayAgain}>Play again</button>
    <button onClick={handleMainMenu}>Main Menu</button>
  </div>
</div>

        );
      
        };
export default EndGameModal;