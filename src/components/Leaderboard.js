// src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../apiService';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Mengambil data leaderboard dari backend saat komponen dimuat
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setLeaderboard(data);  // Menyimpan data leaderboard di state
    };

    fetchLeaderboard();
  }, []);  // Hanya dijalankan sekali ketika komponen pertama kali dimuat

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaderboard.map((score) => (
          <li key={score.id}>{score.player_name}: {score.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;