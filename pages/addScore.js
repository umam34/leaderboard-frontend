// pages/addScore.js
import { useState } from 'react';

export default function AddScore() {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_name: playerName, score: parseInt(score, 10) }),
      });
      if (!response.ok) throw new Error('Failed to submit score');
      alert('Score submitted successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Player Name:</label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Score:</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}