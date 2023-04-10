import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import seriesReducer from './seriesSlice';
import usersReducer from './userSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
    users: usersReducer,
  },
});
