import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trendingMovies: null,
    movieImage: null,
    movieSummary: null,
  },

  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addMovieImage: (state, action) => {
      state.movieImage = action.payload;
    },
    addMovieSummary: (state, action) => {
      state.movieSummary = action.payload;
    },
  },
});

export const { addTrendingMovies, addMovieImage, addMovieSummary } = moviesSlice.actions;
export default moviesSlice.reducer;
