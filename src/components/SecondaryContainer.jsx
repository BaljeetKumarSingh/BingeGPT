import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const boxOfficeMovies = useSelector((store) => store.movies?.boxOfficeMovies);
  const anticipatedMovies = useSelector((store) => store.movies?.anticipatedMovies);
  if (!trendingMovies) return;
  if (!popularMovies) return;
  if(!boxOfficeMovies) return;
  if(!anticipatedMovies) return;

  return (
    <div>
      <div className="absolute top-145">
        <MovieList movies={trendingMovies} heading="Trending Movies" />
      </div>
      <MovieList movies={popularMovies} heading="Popular Movies" />
      <MovieList movies={boxOfficeMovies} heading="Box Office Hit Movies"/>
      <MovieList movies={anticipatedMovies} heading="Most Anticipated Movies"/>
    </div>
  );
};

export default SecondaryContainer;
