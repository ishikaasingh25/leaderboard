import { createSlice } from '@reduxjs/toolkit';

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: [],
  reducers: {
    addScore: (state, action) => {
      state.push(action.payload);
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
