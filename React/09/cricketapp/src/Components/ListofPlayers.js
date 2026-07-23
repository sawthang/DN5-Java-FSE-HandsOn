import React from 'react';

const players = [
  { name: 'Rohit Sharma', score: 85 },
  { name: 'Virat Kohli', score: 92 },
  { name: 'Shubman Gill', score: 65 },
  { name: 'KL Rahul', score: 55 },
  { name: 'Suryakumar Yadav', score: 78 },
  { name: 'Hardik Pandya', score: 60 },
  { name: 'Ravindra Jadeja', score: 40 },
  { name: 'Jasprit Bumrah', score: 15 },
  { name: 'Mohammed Shami', score: 10 },
  { name: 'Yuzvendra Chahal', score: 8 },
  { name: 'Ishan Kishan', score: 72 }
];

// Filter players with scores below 70 using an ES6 arrow function
const lowScorers = players.filter((player) => player.score < 70);

function ListofPlayers() {
  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
