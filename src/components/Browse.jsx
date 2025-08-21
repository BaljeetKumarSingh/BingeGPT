import useAnticipatedMovies from "../hooks/useAnticipatedMovies";
import useBoxOfficeMovies from "../hooks/useBoxOfficeMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTrendingMovies();
  usePopularMovies();
  useBoxOfficeMovies();
  useAnticipatedMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
