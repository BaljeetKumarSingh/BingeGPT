import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className="font-bold text-xl p-2">Trending Movies</div>
      <div className="flex gap-1 overflow-x-auto shrink-0">
        {movies.map((movie) => (
          <MovieCard
            key={movie?.movie?.ids?.trakt}
            title={movie?.movie?.title}
            id={movie?.movie?.ids?.tmdb}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
