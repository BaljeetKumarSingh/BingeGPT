import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  if (!trendingMovies) return; // early return
  

  return (
    <div className="absolute top-145">
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default SecondaryContainer;
