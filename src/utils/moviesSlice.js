import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trendingMovies: null,
    popularMovies: null,
    boxOfficeMovies: null,
    mostAnticipatedMovies: null,
    movieImage: null,
    movieSummary: null,
    searchResult: null,
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
    addMostAnticipatedMovies: (state, action) => {
      state.mostAnticipatedMovies = action.payload;
    },
    addMovieImage: (state, action) => {
      state.movieImage = action.payload;
    },
    addMovieSummary: (state, action) => {
      state.movieSummary = action.payload;
    },
    addSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
  },
});

export const {
  addTrendingMovies,
  addPopularMovies,
  addBoxOfficeMovies,
  addMostAnticipatedMovies,
  addMovieImage,
  addMovieSummary,
  addSearchResult,
} = moviesSlice.actions;
export default moviesSlice.reducer;
