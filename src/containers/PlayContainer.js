// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Filecontext } from "../reactrouter/FileContext";
// import './Play.css';

// const PlayContainer = () => {
//     const [score, setScore] = useState(0);
//     const [lives, setLives] = useState(3);
//     const [highScore, setHighScore] = useState(() => {
//     //   const storedHighScore = localStorage.getItem("highScore");
//     //   return storedHighScore 
//     });
//     const [pokemons, setPokemons] = useState([]);

//     const {currentGame, setCurrentGame} = useContext(Filecontext);

//     const navigate = useNavigate();

//   const fetchPokemons = async () => {
//     const response1 = await fetch("http://localhost:8080/api/pokemon/random");
//     const response2 = await fetch("http://localhost:8080/api/pokemon/random");
//     const data1 = await response1.json();
//     const data2 = await response2.json();

//     const capitalizedData1 = {
//       ...data1,
//       name: capitalizeFirstLetter(data1.name)
//     };
  
//     const capitalizedData2 = {
//       ...data2,
//       name: capitalizeFirstLetter(data2.name)
//     };
  
//     setPokemons([capitalizedData1, capitalizedData2]);
//   };
  
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   useEffect(() => {
//     fetchPokemons();
//   }, []);

//   const handleAnswer = (selectedPokemon) => {
//     const selectedPokemonStats = selectedPokemon === 0 ? pokemons[0].totalBaseStat : pokemons[1].totalBaseStat;
//     const otherPokemonStats = selectedPokemon === 0 ? pokemons[1].totalBaseStat : pokemons[0].totalBaseStat;

//     if (selectedPokemonStats > otherPokemonStats) {
//       setScore(score + 1);
//       fetchPokemons();
//     } else if (selectedPokemonStats < otherPokemonStats){
//       setLives(lives - 1);
//       fetchPokemons();
//     } else if (selectedPokemonStats === otherPokemonStats){
//         fetchPokemons();
//     }
//   };
//   const endTheGame = async () => {
//     console.log(score);
  
//     const requestBody = JSON.stringify({
//       score: score,
//       isComplete: true
//     });
  
//     const response = await fetch(`http://localhost:8080/games/${currentGame.id}/score`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: requestBody
//     });
  
//     const finishedGame = await response.json();
//     setCurrentGame(finishedGame);
//     console.log(finishedGame);
  
//     navigate('/endgame', {state:{score}});
//   };

//   return (
//     <>
//       <div className="container-header">
//       <p>Score: {score}</p>
//       <p>Lives: {lives}</p>
//       </div>
//       <div className="pokemon-container">
//       {pokemons.map((pokemon, index) => (
//         <div key={index}>
//           <h2>{pokemon.name}</h2>
//           {/* <p>Total Base Stat: {pokemon.totalBaseStat}</p> */}
//           <img src={pokemon.imageUrl} className="pokemon-image" onClick={() => handleAnswer(index)} />
//         </div>
//       ))}
//       </div>
//     </>
//     )

// export default PlayContainer;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filecontext } from "../reactrouter/FileContext";
import './Play.css';
import ForestPokemonB from '../images/ForestPokemonB.webp'


const PlayContainer = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const { currentGame, setCurrentGame } = useContext(Filecontext);

  const navigate = useNavigate();

  const fetchPokemons = async () => {
    const response1 = await fetch("http://localhost:8080/api/pokemon/random");
    const response2 = await fetch("http://localhost:8080/api/pokemon/random");
    const data1 = await response1.json();
    const data2 = await response2.json();

    const capitalizedData1 = {
      ...data1,
      name: capitalizeFirstLetter(data1.name),
      showStats: false
    };

    const capitalizedData2 = {
      ...data2,
      name: capitalizeFirstLetter(data2.name),
      showStats: false
    };

    setPokemons([capitalizedData1, capitalizedData2]);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleAnswer = (selectedPokemon) => {
    const selectedPokemonStats = selectedPokemon === 0 ? pokemons[0].totalBaseStat : pokemons[1].totalBaseStat;
    const otherPokemonStats = selectedPokemon === 0 ? pokemons[1].totalBaseStat : pokemons[0].totalBaseStat;
  
    setPokemons(prevPokemons => prevPokemons.map((pokemon, index) => {
      if (index === selectedPokemon) {
        return { ...pokemon, showStats: true };
      }
      return { ...pokemon, showStats: true, statsTimeout: true };
    }));
  
    if (selectedPokemonStats > otherPokemonStats) {
      setScore(score + 1);
    } else if (selectedPokemonStats < otherPokemonStats) {
      setLives(lives - 1);
    }
  
    setTimeout(() => {
      setPokemons(prevPokemons => prevPokemons.map((pokemon, index) => {
        if (index === selectedPokemon) {
          return { ...pokemon, showStats: true };
        }
        return { ...pokemon, showStats: false, statsTimeout: false };
      }));
      fetchPokemons();
    }, 3000);
  };
  

  useEffect(() => {
    if (lives === 0) {
      if (score > highScore) {
        setHighScore(score);
        // localStorage.setItem("highScore", score.toString());
      }
      endTheGame();
    }
  }, [lives, score, highScore]);

  const endTheGame = async () => {
    console.log(score);

    const requestBody = JSON.stringify({
      score: score,
      isComplete: true
    });

    const response = await fetch(`http://localhost:8080/games/${currentGame.id}/score`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: requestBody
    });

    const finishedGame = await response.json();
    setCurrentGame(finishedGame);
    console.log(finishedGame);

    navigate('/endgame', { state: { score } });
  };

  return (
    <>
      <div className="background-photo2">
        <img src={ForestPokemonB} alt="Background Image" />
      </div>
      <div className="container-header">
        <p>Score: {score}</p>
        <div className="hearts-container">
          {Array.from({ length: lives }, (_, index) => (
            <i className="fas fa-heart" key={index}></i>
          ))}
        </div>
      </div>
      <div className="pokemon-container">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => (
            <div key={index}>
              <h2>{pokemon.name}</h2>
              {pokemon.showStats ? (
                <p>Total Base Stat: {pokemon.totalBaseStat}</p>
              ) : (
                <img
                  src={pokemon.imageUrl}
                  className="pokemon-image"
                  onClick={() => handleAnswer(index)}
                  alt={pokemon.name}
                />
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PlayContainer;




