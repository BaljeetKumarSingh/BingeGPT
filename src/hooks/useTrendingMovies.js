import { useDispatch, useSelector } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);
  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.trakt.tv/movies/trending",
      API_ACTION
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json));
  };

  useEffect(() => {
    !trendingMovies && getLatestMovies();
  }, []);
};

export default useTrendingMovies;
