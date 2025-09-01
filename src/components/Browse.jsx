import useAnticipatedMovies from "../hooks/useMostWatchedMovies";
import useBoxOfficeMovies from "../hooks/useBoxOfficeMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTrendingMovies();
  usePopularMovies();
  useBoxOfficeMovies();
  useAnticipatedMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
