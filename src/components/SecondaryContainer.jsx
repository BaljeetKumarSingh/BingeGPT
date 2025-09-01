import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black text-white">
        <div className="-mt-65 pl-4">
          <MovieList movies={movies?.trendingMovies} heading="Trending Movies" />
          <MovieList movies={movies?.popularMovies} heading="Popular Movies" />
          <MovieList movies={movies?.boxOfficeMovies} heading="Box Office Hit Movies" />
          <MovieList movies={movies?.mostWatchedMovies} heading="Most Watched Movies" />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
