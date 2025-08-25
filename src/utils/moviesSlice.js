import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trendingMovies: null,
    popularMovies: null,
    boxOfficeMovies: null,
    popularShows: null,
    movieImage: null,
    movieSummary: null,
  },

  reducers: {
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addBoxOfficeMovies: (state, action) => {
      state.boxOfficeMovies = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularShows = action.payload;
    },
    addMovieImage: (state, action) => {
      state.movieImage = action.payload;
    },
    addMovieSummary: (state, action) => {
      state.movieSummary = action.payload;
    },
  },
});

export const {
  addTrendingMovies,
  addPopularMovies,
  addBoxOfficeMovies,
  addPopularShows,
  addMovieImage,
  addMovieSummary,
} = moviesSlice.actions;
export default moviesSlice.reducer;
