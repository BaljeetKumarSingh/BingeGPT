import { useDispatch, useSelector } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addMostAnticipatedMovies } from "../utils/moviesSlice";

const useMostAnticipatedMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const mostWatchedMovies = useSelector((store) => store.movies.mostWatchedMovies);
  const getMostAnticipatedMovies = async () => {
    const data = await fetch("https://api.trakt.tv/movies/anticipated", API_ACTION);
    const json = await data.json();
    dispatch(addMostAnticipatedMovies(json));
  };

  useEffect(() => {
    !mostWatchedMovies && getMostAnticipatedMovies();
  }, []);
};

export default useMostAnticipatedMovies;
