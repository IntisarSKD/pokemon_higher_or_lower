import React from 'react';

const LeaderboardModal = ({ playerScores, onClose }) => {
  return (
    <div className="leaderboard-modal">
      <div className="leaderboard-modal-content">
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr className='leaderboard-words'>
              <th>Username</th>
              <th>Highest Score</th>
            </tr>
          </thead>
          <tbody>
            {playerScores.map((player, index) => (
              <tr key={index}>
                <td>{player.username}</td>
                <td>{player.highestScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LeaderboardModal;
