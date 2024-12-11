import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");

        const response = await fetch(`http://localhost:3000/leaderboard`);
        console.log("Response received:", response); // Log response

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Data received:", result); // Log data hasil parsing JSON

        setData(result); // Update state dengan data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Fetched data in state:", data); // Log data yang ada di state

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((player) =>
    player.player_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Leaderboard</h1>
      <form>
        <input
          type="text"
          id="search-input"
          name="search"
          placeholder="Search Player Name"
          value={search}
          onChange={handleSearchChange}
          className="form-control"
        />
      </form>
      {/* Render data sederhana */}
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Score</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.player_name}</td>
                <td>{player.score}</td>
                <td>{player.submitted_at}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No players found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;