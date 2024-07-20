import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import './LeaderBoard.css';

const Leaderboard = () => {
  // Select scores and latestEntryKey from the Redux store
  const { scores, latestEntryKey } = useSelector((state) => state.leaderboard);
  const [newEntryKey, setNewEntryKey] = useState(latestEntryKey);

  useEffect(() => {
    if (latestEntryKey) {
      setNewEntryKey(latestEntryKey);
      console.log("New entry key:", latestEntryKey); // Log the new entry key
  
      const timer = setTimeout(() => {
        console.log("Clearing highlight"); // Log when clearing highlight
        setNewEntryKey(null);
      }, 3000); // Reset after 3 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [latestEntryKey]);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.key} className={score.key === newEntryKey ? 'new-entry' : 'old_entry'}>
            <span><FaTrophy /> {score.username}</span>
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
      <Link to="/add-score">
        <button className="add-score-button">Add Score</button>
      </Link>
    </div>
  );
};

export default Leaderboard;
