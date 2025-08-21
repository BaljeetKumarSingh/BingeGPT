import { useDispatch } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addAnticipatedMovies } from "../utils/moviesSlice";

const useAnticipatedMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const getAnticipatedMovies = async () => {
    const data = await fetch("https://api.trakt.tv/movies/anticipated", API_ACTION);
    const json = await data.json();
    dispatch(addAnticipatedMovies(json));
  };

  useEffect(() => {
    getAnticipatedMovies();
  }, []);
};

export default useAnticipatedMovies;
