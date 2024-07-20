import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AddScorePopup.css'; // Ensure this is imported if in a separate CSS file

const AddScorePopup = () => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidScore = /^\d{2}:\d{2}:\d{3}$/.test(score);
    if (!isValidScore) {
      alert("Score must be in the format MM:SS:MS (e.g., 05:30:123)");
      return;
    }
    dispatch(addScore({ username, score }));
    setUsername('');
    setScore('');
    navigate('/');
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username:</span>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label>
          <span>Score:</span>
          <input 
            type="text" 
            value={score} 
            onChange={(e) => setScore(e.target.value)} 
            required 
            placeholder="MM:SS:MS" 
          />
        </label>
        <button type="submit" className='button1'>Add Score</button>
        <Link to="/">
          <button type="button" className='button1'>Back to Leaderboard</button>
        </Link>
      </form>
    </div>
  );
};

export default AddScorePopup;
