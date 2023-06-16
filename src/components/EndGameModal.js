import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Filecontext } from "../reactrouter/FileContext";
import "../EndGameModalStyle/EndGameModal.css";
import surprisedImage from "../images/Surprised.gif";
import charmanderImage from "../images/charmander.gif";
import ashAndPikachuImage from "../images/AshAndPikachu.gif";
import snorlaxImage from "../images/Snorlax.gif";
import ashRunningImage from "../images/ash_running.gif";
import squirtlePikachuImage from "../images/squirtle-pikachu.gif";
import squirtleImage from "../images/squirtle.gif";
import mewtwoImage from "../images/mewtwo.gif";
import pokemonMasterImage from "../images/PokemonMaster.gif";
import pikachuLoading from "../images/pikachu.gif";

const EndGameModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;
  const { setCurrentGame, player } = useContext(Filecontext);
  const [isLoading, setIsLoading] = useState(false);

  const scoreImages = {
    0: [surprisedImage, charmanderImage],
    1: [ashAndPikachuImage, snorlaxImage],
    2: [ashAndPikachuImage, snorlaxImage],
    3: [ashAndPikachuImage, snorlaxImage],
    4: [ashRunningImage],
    5: [ashRunningImage],
    6: [ashRunningImage],
    7: [ashRunningImage],
    8: [squirtlePikachuImage, squirtleImage],
    9: [squirtlePikachuImage, squirtleImage],
    10: [squirtlePikachuImage, squirtleImage],
    11: [squirtlePikachuImage, squirtleImage],
    12: [squirtlePikachuImage, squirtleImage],
    13: [squirtlePikachuImage, squirtleImage],
    14: [squirtlePikachuImage, squirtleImage],
    15: [squirtlePikachuImage, squirtleImage],
    16: [mewtwoImage],
    17: [mewtwoImage],
    18: [mewtwoImage],
    19: [mewtwoImage],
    20: [mewtwoImage],
  };

  const getRandomImage = (imageArray) => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };

  const getImageURL = () => {
    if (score === 0) {
      const images = scoreImages[0];
      return getRandomImage(images);
    } else if (score >= 1 && score <= 3) {
      const images = scoreImages[1];
      return getRandomImage(images);
    } else if (score >= 4 && score <= 7) {
      return ashRunningImage;
    } else if (score >= 8 && score <= 15) {
      const images = scoreImages[8];
      return getRandomImage(images);
    } else if (score >= 16 && score <= 25) {
      return mewtwoImage;
    } else if (score >= 26) {
      return pokemonMasterImage;
    }
  };

  const handlePlayAgain = async () => {
    const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const newGame = await response.json();
    setCurrentGame(newGame);
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        navigate("/play");
    }, 1500);
  };

  const handleMainMenu = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  const imageURL = getImageURL();

  const getScoreMessage = () => {
    if (score === 0) {
      return "Oh no! It's not very effective.";
    } else if (score >= 1 && score <= 3) {
      return "With a score like that, I bet even a wild Rattata could defeat you";
    } else if (score >= 4 && score <= 7) {
      return "The path is long and wide, keep training if you want to unlock the greatness you hide."
    } else if (score >= 8 && score <= 15) {
      return "Bravo! You're making waves on the Pokémon road!";
    } else if (score >= 16 && score <= 25) {
      return "Harness the power of your mind, transcending limits like Mewtwo's psychic kind.";
    } else if (score >= 26) {
      return "Congratulations, you are a true Pokémon Master.";
    }
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="end-game-modal">
      {isLoading && (
        <div className="loading-overlay">
          <img src={pikachuLoading} alt="Loading..." />
        </div>
      )}
      <div className="background-image">
        <img src={imageURL} alt="Score Image" />
      </div>
      <div className="content">
        <h1>Game Over!</h1>
        <p>Final Score: {score}</p>
        <p>{scoreMessage}</p>
        <button onClick={handlePlayAgain}>Play again</button>
        <button onClick={handleMainMenu}>Main Menu</button>
      </div>
    </div>
  );
};

export default EndGameModal;
