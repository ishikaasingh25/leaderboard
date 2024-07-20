import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: [],
  reducers: {
    addScore: (state, action) => {
      const { username, score } = action.payload;
      const newScore = {
        key: uuidv4(), // Generate a unique key
        username,
        score
      };
      state.push(newScore);
      state.sort((a, b) => {
        const [aMin, aSec, aMs] = a.score.split(':').map(Number);
        const [bMin, bSec, bMs] = b.score.split(':').map(Number);
        return aMin - bMin || aSec - bSec || aMs - bMs;
      });
      // Only keep top 10 scores
      while (state.length > 10) {
        state.pop();
      }
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
