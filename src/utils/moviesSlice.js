import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },

  reducers: {
    addTrendingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addTrendingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
