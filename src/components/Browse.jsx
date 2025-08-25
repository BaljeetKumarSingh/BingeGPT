import useBoxOfficeMovies from "../hooks/useBoxOfficeMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularShows from "../hooks/usePopularShows";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTrendingMovies();
  usePopularMovies();
  useBoxOfficeMovies();
  usePopularShows();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
