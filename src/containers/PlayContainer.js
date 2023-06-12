// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Filecontext } from '../reactrouter/FileContext';
// import EndGameModal from '../components/EndGameModal';
// const PlayContainer = () => {
//   const {currentUser, setCurrentUser} = useContext(Filecontext);
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(3);
//   const [highScore, setHighScore] = useState(0);
//   const navigate = useNavigate();
//   const pikachuStats = {
//     hp: 35,
//     attack: 55,
//     defense: 40,
//     specialAttack: 50,
//     specialDefense: 50,
//     speed: 90,
//   };
//   const charizardStats = {
//     hp: 78,
//     attack: 84,
//     defense: 78,
//     specialAttack: 109,
//     specialDefense: 85,
//     speed: 100,
//   };
//   const calculateTotalPower = (stats) => {
//     const totalPower = stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed;
//     return totalPower;
//   };
//   const handleAnswer = (selectedPokemon) => {
//     const pikachuPower = calculateTotalPower(pikachuStats);
//     const charizardPower = calculateTotalPower(charizardStats);
//     if (
//       (selectedPokemon === "pikachu" && pikachuPower > charizardPower) ||
//       (selectedPokemon === "charizard" && charizardPower > pikachuPower)
//     ) {
//       setScore(score + 1);
//     }
//     else if (lives >= 1 &&  ((selectedPokemon === "pikachu" && pikachuPower < charizardPower) ||
//     (selectedPokemon === "charizard" && charizardPower < pikachuPower))) {
//         setLives(lives - 1)
//         if(lives === 1){
//         navigate("/endgame", {state: {score}})
//       }
//     }
//   };
//   const handleRestart = () => {
//     if (score > highScore) {
//       const newUpdateduser = {...currentUser, highScore:score}
//       setCurrentUser(newUpdateduser);
//     }
//     setScore(0);
//     setLives(3);
//   };
//   return (
//     <>
//       <h1>Which Pokémon has the highest combined total power?</h1>
//       <p>Score: {score}</p>
//       <p>Lives: {lives}</p>
//       <p>High Score: {currentUser.highScore}</p>
//       <div>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
//           alt="Pikachu"
//           onClick={() => handleAnswer("pikachu")}
//         />
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
//           alt="Charizard"
//           onClick={() => handleAnswer("charizard")}
//         />
//       </div>
//       <button onClick={handleRestart}>Restart game</button>
//     </>
//   );
// };
// export default PlayContainer;


// import React, { useEffect, useState } from "react";

// const PlayContainer = () => {
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(3);
//   const [highScore, setHighScore] = useState(0);
//   const [pokemons, setPokemons] = useState([]);

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       try {
//         const response1 = await fetch("http://localhost:8080/api/pokemon/random");
//         const response2 = await fetch("http://localhost:8080/api/pokemon/random");
//         const data1 = await response1.json();
//         const data2 = await response2.json();

//         setPokemons([data1, data2]);
//       } catch (error) {
//         console.error("Error fetching Pokemon data:", error);
//       }
//     };

//     fetchPokemons();
//   }, []);

//   return (
//     <>
//       <h1>Hello Container</h1>
//       {pokemons.map((pokemon, index) => (
//         <div key={index}>
//           <h2>{pokemon.name}</h2>
//           <p>Total Base Stat: {pokemon.totalBaseStat}</p>
//           <img src={pokemon.imageUrl} alt={pokemon.name} />
//         </div>
//       ))}
//     </>
//   );
// };

// export default PlayContainer;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const PlayContainer = () => {
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(3);
//   const [highScore, setHighScore] = useState(0);
//   const [pokemons, setPokemons] = useState([]);

//     const navigate = useNavigate();

//   const fetchPokemons = async () => {
//     const response1 = await fetch(`http://localhost:8080/api/pokemon/random`);
//     const response2 = await fetch(`http://localhost:8080/api/pokemon/random`);
//     const data1 = await response1.json();
//     const data2 = await response2.json();

//     setPokemons([data1, data2]);
// };

//   useEffect(() => {
//     fetchPokemons();
//   }, []);

//   const handleAnswer = () => {
//     if(pokemons.totalBaseStat = pokemons.totalBaseStat){
//         fetchPokemons()
//     }
//     else if(pokemons[1].totalBaseStat > pokemons[2].totalBaseStat || pokemons[2].totalBaseStat > pokemons[1].totalBaseStat){
//         setScore(score+1);
//     }
//     else if(lives > 1 && pokemons[1].totalBaseStat < pokemons[2].totalBaseStat || pokemons[2].totalBaseStat < pokemons[1].totalBaseStat){
//         setLives(lives-1);
//     }
//     else if(lives = 1 && (pokemons[1].totalBaseStat < pokemons[2].totalBaseStat || pokemons[2].totalBaseStat < pokemons[1].totalBaseStat)){
//         if(score > highScore){
//             setHighScore(score);
//         }
//         navigate("/endgame")
//     }
//   }

//   return (
//     <>
//         <h1>Hello Container</h1>
//         <p>Score: {score}</p>
//         <p>Lives: {lives}</p>
//         <p>High Score: {highScore}</p>
//       {pokemons.map((pokemon, index) => (
//         <div key={index}>
//           <h2>{pokemon.name}</h2>
//           <p>Total Base Stat: {pokemon.totalBaseStat}</p>
//           <img src={pokemon.imageUrl} onClick={handleAnswer}/>
//         </div>
//       ))}
//     </>
//   );
// };

// export default PlayContainer;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayContainer = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);
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

  useEffect(() => {
    if (lives === 0) {
      if (score > highScore) {
        setHighScore(score);
      }
      navigate("/endgame", { state: { score } });
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

