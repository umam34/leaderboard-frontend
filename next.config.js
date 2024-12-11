module.exports = {
    async rewrites() {
      return [
        {
          source: '/leaderboard',
          destination: 'http://localhost:3000/leaderboard', // Ubah dengan URL backend Anda
        },
      ];
    },
  };