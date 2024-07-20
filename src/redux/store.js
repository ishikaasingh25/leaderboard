import { configureStore } from '@reduxjs/toolkit';
//registers the global store object
import leaderboardReducer from './leaderboardSlice';
//reducer makes it available to elsewhere in the code
const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});

export default store;
