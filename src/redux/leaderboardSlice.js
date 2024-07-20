import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Creating slice to represent the data in the store
const leaderboardSlice = createSlice({
  name: 'leaderboard', // Unique name
  initialState: {
    scores: [], // Array to hold the leaderboard scores
    latestEntryKey: null // Track the key of the latest entry
  },
  reducers: {
    // Add a score to the leaderboard
    addScore: (state, action) => {
      const { username, score } = action.payload;
      const newScore = { 
        key: uuidv4(), // Generate a unique key
        username,
        score
      };

      // Add the new score to the leaderboard
      state.scores.push(newScore);
      
      // Sort the scores in ascending order
      state.scores.sort((a, b) => {
        const [aMin, aSec, aMs] = a.score.split(':').map(Number);
        const [bMin, bSec, bMs] = b.score.split(':').map(Number);
        return aMin - bMin || aSec - bSec || aMs - bMs;
      });

      // Only keep top 10 scores
      if (state.scores.length > 10) {
        state.scores = state.scores.slice(-10);
      }

      // Update the latest entry key
      state.latestEntryKey = newScore.key;
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
