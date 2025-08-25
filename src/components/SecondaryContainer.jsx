import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const boxOfficeMovies = useSelector((store) => store.movies?.boxOfficeMovies);
  const popularShows = useSelector((store) => store.movies?.popularShows);
  if (!trendingMovies) return;
  if (!popularMovies) return;
  if(!boxOfficeMovies) return;
  if(!popularShows) return;

  return (
    <div>
      <div className="absolute top-145">
        <MovieList movies={trendingMovies} heading="Trending Movies" />
      </div>
      <MovieList movies={popularMovies} heading="Popular Movies" />
      <MovieList movies={boxOfficeMovies} heading="Box Office Hit Movies"/>
      <MovieList movies={popularShows} heading="Most Popular Shows"/>
    </div>
  );
};

export default SecondaryContainer;
