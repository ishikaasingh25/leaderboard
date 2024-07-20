import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import AutoScrollFooter from './components/AutoScrollFooter';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Leaderboard />} />
          <Route path="/add-score" element={<AddScorePopup />} />
        </Routes>
        <AutoScrollFooter />
      </div>
    </Router>
  );
};

export default App;
