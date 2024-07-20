import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';


const Leaderboard = () => {
  const scores = useSelector((state) => state.leaderboard);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
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
