
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Filecontext } from "../reactrouter/FileContext";
// import "../EndGameModalStyle/EndGameModal.css"; // Update the import path for CSS
// import pikachuImage from "../images/pikachu.gif";
// import pikachusquirtleImage from "../images/squirtle-pikachu.gif";



// const EndGameModal = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const score = location.state?.score;
//     const {currentGame, setCurrentGame} = useContext(Filecontext);
//     const {player, setPlayer} = useContext(Filecontext);

//     const scoreImages = {
//       0: pikachuImage,
//       1: pikachusquirtleImage,
//       2: pikachusquirtleImage,
//       // Add more score ranges and corresponding image URLs as needed
//     };
    

//     let imageURL = "";

//     if (score < 0) {
//       imageURL = scoreImages[0];
//     } else if (score >= 0 && score < 5) {
//       imageURL = scoreImages[1];
//     } else {
//       imageURL = scoreImages[2];
//     }

//     const handlePlayAgain = async () => {
//         const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//         });

      
//         const newGame = await response.json();
//         setCurrentGame(newGame);
//         navigate("/play");
//       };      
      
//     const handleMainMenu = () => {
//             navigate ("/login")
//         };
//         return (
// <div className="end-game-modal">
//   <div className="background-image">
//     {score === 0 ? (
//       <img src={pikachuImage} alt="Pikachu" />
//     ) : (
//       <img src={pikachusquirtleImage} alt="Pikachu-Squirtle" />
//     )}
//   </div>
//   <div className="content">
//     <h1>Game Over!</h1>
//     <p>Final Score: {score}</p>
//     <button onClick={handlePlayAgain}>Play again</button>
//     <button onClick={handleMainMenu}>Main Menu</button>
//   </div>
// </div>

//         );
      
//         };
// export default EndGameModal;



// import { useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Filecontext } from "../reactrouter/FileContext";
// import "../EndGameModalStyle/EndGameModal.css";
// import surprisedImage from "../images/Surprised.gif";
// import charmanderImage from "../images/charmander.gif";
// import pikachuCryingImage from "../images/PikachuCrying.gif";
// import ashAndPikachuImage from "../images/AshAndPikachu.gif";
// import snorlaxImage from "../images/Snorlax.gif";
// import ashRunningImage from "../images/ash_running.gif";
// import squirtlePikachuImage from "../images/squirtle-pikachu.gif";
// import squirtleImage from "../images/squirtle.gif";
// import mewtwoImage from "../images/mewtwo.gif";
// import pokemonMasterImage from "../images/PokemonMaster.gif";

// const EndGameModal = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const score = location.state?.score;
//   const { setCurrentGame, player } = useContext(Filecontext);

//   const scoreImages = {
//     0: [surprisedImage, charmanderImage],
//     1: [pikachuCryingImage, ashAndPikachuImage, snorlaxImage],
//     2: [pikachuCryingImage, ashAndPikachuImage, snorlaxImage],
//     3: [pikachuCryingImage, ashAndPikachuImage, snorlaxImage],
//     4: [ashRunningImage],
//     5: [ashRunningImage],
//     6: [ashRunningImage],
//     7: [ashRunningImage],
//     8: [squirtlePikachuImage, squirtleImage],
//     9: [squirtlePikachuImage, squirtleImage],
//     10: [squirtlePikachuImage, squirtleImage],
//     11: [squirtlePikachuImage, squirtleImage],
//     12: [squirtlePikachuImage, squirtleImage],
//     13: [squirtlePikachuImage, squirtleImage],
//     14: [squirtlePikachuImage, squirtleImage],
//     15: [squirtlePikachuImage, squirtleImage],
//     16: [mewtwoImage],
//     17: [mewtwoImage],
//     18: [mewtwoImage],
//     19: [mewtwoImage],
//     20: [mewtwoImage],
//   };

//   const getRandomImage = (imageArray) => {
//     const randomIndex = Math.floor(Math.random() * imageArray.length);
//     return imageArray[randomIndex];
//   };

//   const getImageURL = () => {
//     if (score === 0) {
//       const images = scoreImages[0];
//       return getRandomImage(images);
//     } else if (score >= 1 && score <= 3) {
//       const images = scoreImages[1];
//       return getRandomImage(images);
//     } else if (score >= 4 && score <= 7) {
//       return ashRunningImage;
//     } else if (score >= 8 && score <= 15) {
//       const images = scoreImages[8];
//       return getRandomImage(images);
//     } else if (score >= 16 && score <= 25) {
//       return mewtwoImage;
//     } else if (score >= 26) {
//       return pokemonMasterImage;
//     }
//   };

//   const handlePlayAgain = async () => {
//     const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const newGame = await response.json();
//     setCurrentGame(newGame);
//     navigate("/play");
//   };

//   const handleMainMenu = () => {
//     navigate("/login");
//   };

//   const imageURL = getImageURL();

//   return (
//     <div className="end-game-modal">
//       <div className="background-image">
//         <img src={imageURL} alt="Score Image" />
//       </div>
//       <div className="content">
//         <h1>Game Over!</h1>
//         <p>Final Score: {score}</p>
//         <button onClick={handlePlayAgain}>Play again</button>
//         <button onClick={handleMainMenu}>Main Menu</button>
//       </div>
//     </div>
//   );
// };

// export default EndGameModal;


import { useContext } from "react";
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

const EndGameModal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score;
  const { setCurrentGame, player } = useContext(Filecontext);

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
    navigate("/play");
  };

  const handleMainMenu = () => {
    navigate("/login");
  };

  const imageURL = getImageURL();

  const getScoreMessage = () => {
    if (score === 0) {
      return "Oh no! It's not very effective. Keep training!";
    } else if (score >= 1 && score <= 3) {
      return "All things considered, could be worse right?";
    } else if (score >= 4 && score <= 7) {
      return "Don't give up! Keep going!";
    } else if (score >= 8 && score <= 15) {
      return "Great job! You're on the right track!";
    } else if (score >= 16 && score <= 25) {
      return "You're on your way to becoming a Pokémon Master!";
    } else if (score >= 26) {
      return "Congratulations! You are a true Pokémon Master!";
    }
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="end-game-modal">
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