import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
export const fetchSeries = createAsyncThunk('fetchSeries/series', async () => {
  const seriesText = 'friends';
  const res = await fetch(
    `http://www.omdbapi.com?apikey=${
      import.meta.env.VITE_API_KEY
    }&s=${seriesText}&type=series`
  );
  const data = await res.json();
  return data;
});

const seriesSlice = createSlice({
  name: 'series',
  initialState: {
    data: {},
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default seriesSlice.reducer;
