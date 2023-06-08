// const PlayContainer = () => {
//     return ( 
//         <>
//             <h1>Which Pokémon has the highest combined total power?</h1>
//             <button>Restart game</button>
//         </>
//      );
// }
 
// export default PlayContainer;


import { useState } from 'react';

const PlayContainer = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [maxScore, setMaxScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
    }
  };

  const handleRestart = () => {
    if (score > maxScore) {
      setMaxScore(score);
    }
    setScore(0);
    setLives(3);
  };

  return (
    <>
      <h1>Which Pokémon has the highest combined total power?</h1>
      <p>Score: {score}</p>
      <p>Lives: {lives}</p>
      <p>Max Score: {maxScore}</p>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu"
          onClick={() => handleAnswer(true)}
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
          alt="Charizard"
          onClick={() => handleAnswer(false)}
        />
      </div>
      <button onClick={handleRestart}>Restart game</button>
    </>
  );
};

export default PlayContainer;
