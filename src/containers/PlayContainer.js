import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayContainer = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [highScore, setHighScore] = useState(0);

  const navigate = useNavigate();

  const pikachuStats = {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
  };

  const charizardStats = {
    hp: 78,
    attack: 84,
    defense: 78,
    specialAttack: 109,
    specialDefense: 85,
    speed: 100,
  };

  const calculateTotalPower = (stats) => {
    const totalPower = stats.hp + stats.attack + stats.defense + stats.specialAttack + stats.specialDefense + stats.speed;
    return totalPower;
  };

  const handleAnswer = (selectedPokemon) => {
    const pikachuPower = calculateTotalPower(pikachuStats);
    const charizardPower = calculateTotalPower(charizardStats);

    if (
      (selectedPokemon === "pikachu" && pikachuPower > charizardPower) ||
      (selectedPokemon === "charizard" && charizardPower > pikachuPower)
    ) {
      setScore(score + 1);
    }
    
    else if (lives >= 1 &&  ((selectedPokemon === "pikachu" && pikachuPower < charizardPower) ||
    (selectedPokemon === "charizard" && charizardPower < pikachuPower))) {
        setLives(lives - 1)
        if(lives === 1){
        navigate("/endgame")
      }
    }
  };

  const handleRestart = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setLives(3);
  };

  return (
    <>
      <h1>Which Pokémon has the highest combined total power?</h1>
      <p>Score: {score}</p>
      <p>Lives: {lives}</p>
      <p>High Score: {highScore}</p>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          onClick={() => handleAnswer("pikachu")}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
          alt="Charizard"
          onClick={() => handleAnswer("charizard")}
        />
      </div>
      <button onClick={handleRestart}>Restart game</button>
    </>
  );
};

export default PlayContainer;