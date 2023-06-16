// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Filecontext } from '../reactrouter/FileContext';
// import LogInModal from './LogInModal';
// import LeaderboardModal from './LeaderboardModal';
// import OtherLoginModal from './OtherLoginModal';
// import ForestPass from '../images/ForestPass.webp';
// import pikachuLoading from '../images/pikachu.gif';

// const LogInForm = () => {
//   const navigate = useNavigate();
//   const [listOfUsers, setListOfUsers] = useState([]);
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showOtherLoginModal, setShowOtherLoginModal] = useState(false);
//   const [isUserRegistered, setIsUserRegistered] = useState(false);
//   const [isUserBackIn, setIsUserBackIn] = useState(false);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
//   const [playerScores, setPlayerScores] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const { currentGame, setCurrentGame, player, setPlayer } = useContext(Filecontext);

//   const handleJoin = () => {
//     setShowLoginModal(true);
//   };
//   const handleReturn = () => {
//     setShowOtherLoginModal(true);
//   };

//   const handleSignUp = async (username, password) => {
//     if (!username || !password) {
//       alert('Please enter both username and password');
//       return;
//     }

//     const response = await fetch('http://localhost:8080/api/players');
//     const playerList = await response.json();

//     // Check if the username already exists
//     const existingPlayer = playerList.find((player) => player.username === username);
//     if (existingPlayer) {
//       alert('Username already exists. Please choose a different username.');
//       return;
//     }

//     const newPlayer = { username, password };
//     setListOfUsers([...listOfUsers, newPlayer]);
//     setShowLoginModal(false);
//     setIsUserRegistered(true);
//     await postPlayer(newPlayer);
//   };

//   const handleLogin = async (username, password) => {
//     setShowOtherLoginModal(true);
//     const response = await fetch('http://localhost:8080/api/players');
//     const playerList = await response.json();

//     const loggedInPlayer = playerList.find(
//       (player) => player.username === username && player.password === password
//     );

//     if (loggedInPlayer) {
//       setPlayer(loggedInPlayer);
//       setIsUserBackIn(true);
//       setShowOtherLoginModal(false);
//     } else alert('Player details have not been found. Please try again');
//   };

//   const handleLogout = () => {
//     setIsUserRegistered(false);
//     setIsUserBackIn(false);
//     setPlayer(null);
//   };

//   const handlePlay = async () => {
//     if (isUserRegistered || isUserBackIn) {
//       const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const newGame = await response.json();
//       setCurrentGame(newGame);
//       setGameStarted(true);
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//         navigate('/play');
//       }, 1500);
//     } else {
//       alert('User not created or logged in, please create a user first to play');
//     }
//   };

//   const postPlayer = async (newPlayer) => {
//     console.log(newPlayer);
//     const response = await fetch('http://localhost:8080/api/players', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newPlayer),
//     });
//     const savedPlayer = await response.json();
//     setPlayer(savedPlayer);
//   };

//   const fetchPlayerScores = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/api/players');
//       const players = await response.json();

//       const playerScores = players.map((player) => {
//         const { username, games } = player;
//         const highestScore = Math.max(...games.map((game) => game.score));
//         return { username, highestScore };
//       });

//       playerScores.sort((a, b) => b.highestScore - a.highestScore);

//       setPlayerScores(playerScores);

//       setShowLeaderboardModal(true);
//     } catch (error) {
//       console.error('Error fetching player scores:', error);
//     }
//   };

//   const handleLeaderboard = () => {
//     fetchPlayerScores();
//   };

//   const spriteUrls = [
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
//   ];

//   return (
//     <>
//       <div className='background-photo'>
//         {isLoading && (
//           <div className="loading-overlay">
//             <img src={pikachuLoading} alt="Loading..." />
//           </div>
//         )}
//         {!isLoading && <img src={ForestPass} alt="Background Image" />}
//       </div>
//       {!isLoading && (
//         <div className='title-screen'>
//           <h1>Pokémon: Higher or Lower</h1>
//         </div>
//       )}
//       {!isLoading && (
//         <div className="sprite-container">
//           {spriteUrls.map((url, index) => (
//             <img
//               key={index}
//               className={`sprite sprite-${index + 1}`}
//               src={url}
//               alt="pokemon sprite"
//             />
//           ))}
//         </div>
//       )}
//       <div className='top-right-buttons'>
//         {!isLoading && (
//           <>
//             <button onClick={handleJoin}>Sign Up</button>
//             <button onClick={handleReturn}>Login</button>
//             <button onClick={handleLogout}>Log Out</button>
//           </>
//         )}
//       </div>
//       {!isLoading && (
//         <div className='centre-buttons'>
//           <button onClick={handlePlay} disabled={gameStarted}>
//             Play
//           </button>
//           <button onClick={handleLeaderboard}>LeaderBoard</button>
//         </div>
//       )}
//       <div className='writing-top-right'>
//         {isUserRegistered && <p>User created, you can now play</p>}
//         {isUserBackIn && <p>Welcome Back, {player.username}</p>}
//       </div>
//       {showLoginModal && (
//         <LogInModal handleSignUp={handleSignUp} onClose={() => setShowLoginModal(false)} />
//       )}
//       {showOtherLoginModal && (
//         <OtherLoginModal
//           handleLogin={handleLogin}
//           onClose={() => setShowOtherLoginModal(false)}
//         />
//       )}
//       {showLeaderboardModal && (
//         <LeaderboardModal
//           playerScores={playerScores}
//           onClose={() => setShowLeaderboardModal(false)}
//         />
//       )}
//     </>
//   );
// };

// export default LogInForm;


import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filecontext } from '../reactrouter/FileContext';
import LogInModal from './LogInModal';
import LeaderboardModal from './LeaderboardModal';
import OtherLoginModal from './OtherLoginModal';
import ForestPass from '../images/ForestPass.webp';
import pikachuLoading from '../images/pikachu.gif';


import charizardCry from '../audio/charizard.mp3';
import charmanderCry from '../audio/charmander.mp3';
import pikachuCry from '../audio/pikachu.mp3';
import bulbasaurCry from '../audio/bulbasaur.mp3';
import squirtleCry from '../audio/squirtle.mp3';
import blastoiseCry from '../audio/blastoise.mp3';

const LogInForm = () => {
  const navigate = useNavigate();
  const [listOfUsers, setListOfUsers] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showOtherLoginModal, setShowOtherLoginModal] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [isUserBackIn, setIsUserBackIn] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showLeaderboardModal, setShowLeaderboardModal] = useState(false);
  const [playerScores, setPlayerScores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { currentGame, setCurrentGame, player, setPlayer } = useContext(Filecontext);

  const handleJoin = () => {
    setShowLoginModal(true);
  };
  const handleReturn = () => {
    setShowOtherLoginModal(true);
  };

  const handleSignUp = async (username, password) => {
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    const response = await fetch('http://localhost:8080/api/players');
    const playerList = await response.json();

    // Check if the username already exists
    const existingPlayer = playerList.find((player) => player.username === username);
    if (existingPlayer) {
      alert('Username already exists. Please choose a different username.');
      return;
    }

    const newPlayer = { username, password };
    setListOfUsers([...listOfUsers, newPlayer]);
    setShowLoginModal(false);
    setIsUserRegistered(true);
    await postPlayer(newPlayer);
  };

  const handleLogin = async (username, password) => {
    setShowOtherLoginModal(true);
    const response = await fetch('http://localhost:8080/api/players');
    const playerList = await response.json();

    const loggedInPlayer = playerList.find(
      (player) => player.username === username && player.password === password
    );

    if (loggedInPlayer) {
      setPlayer(loggedInPlayer);
      setIsUserBackIn(true);
      setShowOtherLoginModal(false);
    } else alert('Player details have not been found. Please try again');
  };

  const handleLogout = () => {
    setIsUserRegistered(false);
    setIsUserBackIn(false);
    setPlayer(null);
  };

  const handlePlay = async () => {
    if (isUserRegistered || isUserBackIn) {
      const response = await fetch(`http://localhost:8080/games?playerId=${player.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const newGame = await response.json();
      setCurrentGame(newGame);
      setGameStarted(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate('/play');
      }, 1500);
    } else {
      alert('User not created or logged in, please create a user first to play');
    }
  };

  const postPlayer = async (newPlayer) => {
    console.log(newPlayer);
    const response = await fetch('http://localhost:8080/api/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlayer),
    });
    const savedPlayer = await response.json();
    setPlayer(savedPlayer);
  };

  const fetchPlayerScores = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/players');
      const players = await response.json();

      const playerScores = players.map((player) => {
        const { username, games } = player;
        const highestScore = Math.max(...games.map((game) => game.score));
        return { username, highestScore };
      });

      playerScores.sort((a, b) => b.highestScore - a.highestScore);

      setPlayerScores(playerScores);

      setShowLeaderboardModal(true);
    } catch (error) {
      console.error('Error fetching player scores:', error);
    }
  };

  const handleLeaderboard = () => {
    fetchPlayerScores();
  };
  const spriteData = [
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
      audioUrl: charizardCry,
    },
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
      audioUrl: charmanderCry,
    },
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
      audioUrl: pikachuCry,
    },
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      audioUrl: bulbasaurCry,
    },
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
      audioUrl: squirtleCry,
    },
    {
      spriteUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
      audioUrl: blastoiseCry,
    },
  ];
  

  return (
    <>
      <div className='background-photo'>
        {isLoading && (
          <div className="loading-overlay">
            <img src={pikachuLoading} alt="Loading..." />
          </div>
        )}
        {!isLoading && <img src={ForestPass} alt="Background Image" />}
      </div>
      {!isLoading && (
        <div className='title-screen'>
          <h1>Pokémon: Higher or Lower</h1>
        </div>
      )}
      {!isLoading && (
        <div className="sprite-container">
          {spriteData.map((data, index) => (
            <img
              key={index}
              className={`sprite sprite-${index + 1}`}
              src={data.spriteUrl}
              alt="pokemon sprite"
              onClick={() => new Audio(data.audioUrl).play()}
            />
          ))}
        </div>
      )}
      <div className='top-right-buttons'>
        {!isLoading && (
          <>
            <button onClick={handleJoin}>Sign Up</button>
            <button onClick={handleReturn}>Login</button>
            <button onClick={handleLogout}>Log Out</button>
          </>
        )}
      </div>
      {!isLoading && (
        <div className='centre-buttons'>
          <button onClick={handlePlay} disabled={gameStarted}>
            Play
          </button>
          <button onClick={handleLeaderboard}>LeaderBoard</button>
        </div>
      )}
      <div className='writing-top-right'>
        {isUserRegistered && <p>User created, you can now play</p>}
        {isUserBackIn && <p>Welcome Back, {player.username}</p>}
      </div>
      {showLoginModal && (
        <LogInModal handleSignUp={handleSignUp} onClose={() => setShowLoginModal(false)} />
      )}
      {showOtherLoginModal && (
        <OtherLoginModal
          handleLogin={handleLogin}
          onClose={() => setShowOtherLoginModal(false)}
        />
      )}
      {showLeaderboardModal && (
        <LeaderboardModal
          playerScores={playerScores}
          onClose={() => setShowLeaderboardModal(false)}
        />
      )}
    </>
  );
};

export default LogInForm;
