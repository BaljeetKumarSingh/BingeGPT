import { useDispatch } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch("https://api.trakt.tv/movies/popular", API_ACTION);
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
