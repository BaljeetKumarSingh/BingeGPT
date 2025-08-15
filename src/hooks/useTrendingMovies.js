import { useDispatch } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const getLatestMovie = async () => {
    const data = await fetch(
      "https://api.trakt.tv/movies/trending",
      API_ACTION
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json));
  };

  useEffect(() => {
    getLatestMovie();
  }, []);
};

export default useTrendingMovies;
