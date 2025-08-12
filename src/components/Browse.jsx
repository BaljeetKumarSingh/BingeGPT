import useTrendingMovies from "../hooks/useTrendingMovies";
import Header from "./Header";

const Browse = () => {
  useTrendingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
