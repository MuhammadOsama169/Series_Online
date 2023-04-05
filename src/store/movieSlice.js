import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});
export const fetchMovies = createAsyncThunk('fetchMovies/movies', async () => {
  const movieText = 'harry';
  const res = await fetch(
    `http://www.omdbapi.com?apikey=${
      import.meta.env.VITE_API_KEY
    }&s=${movieText}&type=movie`
  );
  const data = await res.json();
  return data;
});
export const fetchMoviesOrShowDetails = createAsyncThunk(
  'movies/fetchMoviesOrShowDetails',
  async (id) => {
    const response = await fetch(
      `http://www.omdbapi.com?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${id}&Plot=full`
    );
    const data = await response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: {},
    selectedMovieOrShow: {},
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchMoviesOrShowDetails.fulfilled, (state, action) => {
        console.log('fetched successfuly');
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
