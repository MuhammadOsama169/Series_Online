import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice';
import seriesReducer from './seriesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    series: seriesReducer,
  },
});
