import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filecontext } from "../reactrouter/FileContext";

const PlayContainer = () => {
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [highScore, setHighScore] = useState(0)
    //   const storedHighScore = localStorage.getItem("highScore");
    //   return storedHighScore 
    // });
    const [pokemons, setPokemons] = useState([]);

    const {currentGame, setCurrentGame} = useContext(Filecontext);

    const navigate = useNavigate();

  const fetchPokemons = async () => {
    const response1 = await fetch("http://localhost:8080/api/pokemon/random");
    const response2 = await fetch("http://localhost:8080/api/pokemon/random");
    const data1 = await response1.json();
    const data2 = await response2.json();

    setPokemons([data1, data2]);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleAnswer = (selectedPokemon) => {
    const selectedPokemonStats = selectedPokemon === 0 ? pokemons[0].totalBaseStat : pokemons[1].totalBaseStat;
    const otherPokemonStats = selectedPokemon === 0 ? pokemons[1].totalBaseStat : pokemons[0].totalBaseStat;

    if (selectedPokemonStats > otherPokemonStats) {
      setScore(score + 1);
      fetchPokemons();
    } else if (selectedPokemonStats < otherPokemonStats){
      setLives(lives - 1);
      fetchPokemons();
    } else if (selectedPokemonStats === otherPokemonStats){
        fetchPokemons();
    }
  };

  const endTheGame = async() => {
    console.log(score);
    console.log(currentGame);
    const response = await fetch(`http://localhost:8080/games/${currentGame.id}/score`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: {
        score: score,
        isComplete: true
      }
  });
  const finishedGame = await response.json();
  setCurrentGame(finishedGame);
  navigate("/endgame");
  };
  useEffect(() => {
    if (lives === 0) {
      if (score > highScore) {
        setHighScore(score);
        // localStorage.setItem("highScore", score.toString());
      }
      endTheGame()
    }
  }, [lives, score, highScore, navigate]);

  return (
    <>
      <h1>Hello Container</h1>
      <p>Score: {score}</p>
      <p>Lives: {lives}</p>
      <p>High Score: {highScore}</p>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name}</h2>
          {/* <p>Total Base Stat: {pokemon.totalBaseStat}</p> */}
          <img src={pokemon.imageUrl} onClick={() => handleAnswer(index)} />
        </div>
      ))}
    </>
  );
};

export default PlayContainer;
