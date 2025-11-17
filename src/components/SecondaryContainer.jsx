import lang from "../utils/lang";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector(store => store.config.lang);
  return (
    movies && (
      <div className="bg-black text-white">
        <div className="-mt-5 sm:-mt-22 md:-mt-28 lg:-mt-38 xl:-mt-65 pl-4">
          <MovieList movies={movies?.trendingMovies} heading={lang[langKey].trendingMovies} />
          <MovieList movies={movies?.popularMovies} heading={lang[langKey].popularMovies} />
          <MovieList movies={movies?.boxOfficeMovies} heading={lang[langKey].boxOfficeHitMovies} />
          <MovieList movies={movies?.mostAnticipatedMovies} heading={lang[langKey].mostAnticipatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
