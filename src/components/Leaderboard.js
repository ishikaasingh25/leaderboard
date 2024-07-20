import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import './LeaderBoard.css';

const Leaderboard = () => {
  const scores = useSelector((state) => state.leaderboard);
  const [newEntryKey, setNewEntryKey] = useState(null);

  useEffect(() => {
    if (scores.length > 0) {
      setNewEntryKey(scores[scores.length - 1].key);
      const timer = setTimeout(() => setNewEntryKey(null), 3000); // Reset the new entry key after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [scores]);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.key} className={score.key === newEntryKey ? 'new-entry' : ''}>
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
