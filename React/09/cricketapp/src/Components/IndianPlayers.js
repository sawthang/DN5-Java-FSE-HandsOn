import React from 'react';

const oddEvenTeamPlayers = {
  oddTeam: ['Rohit Sharma', 'Shubman Gill', 'Suryakumar Yadav'],
  evenTeam: ['Virat Kohli', 'KL Rahul', 'Hardik Pandya']
};

// Destructuring features of ES6
const { oddTeam, evenTeam } = oddEvenTeamPlayers;

const T20players = ['Rohit Sharma', 'Virat Kohli', 'Suryakumar Yadav'];
const RanjiTrophyPlayers = ['Shubman Gill', 'KL Rahul', 'Ishan Kishan'];

// Merge feature of ES6 (spread operator)
const allPlayers = [...T20players, ...RanjiTrophyPlayers];

function IndianPlayers() {
  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>T20 & Ranji Trophy Players (Merged)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
