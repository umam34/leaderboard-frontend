// src/apiService.js
import API_BASE_URL from './apiConfig';

export const getLeaderboard = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/leaderboard`); // Menggunakan URL API yang telah dikonfigurasi
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();  // Mengembalikan data leaderboard dalam format JSON
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
  }
};

export const createScore = async (scoreData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoreData), // Mengirim data skor dalam format JSON
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();  // Mengembalikan data setelah skor berhasil dibuat
  } catch (error) {
    console.error('Error creating score:', error);
  }
};