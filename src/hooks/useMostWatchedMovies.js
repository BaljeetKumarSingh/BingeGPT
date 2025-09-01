import { useDispatch } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addMostWatchedMovies } from "../utils/moviesSlice";

const useMostWatchedMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const getMostWatchedMovies = async () => {
    const data = await fetch("https://api.trakt.tv/movies/collected", API_ACTION);
    const json = await data.json();
    dispatch(addMostWatchedMovies(json));
  };

  useEffect(() => {
    getMostWatchedMovies();
  }, []);
};

export default useMostWatchedMovies;
