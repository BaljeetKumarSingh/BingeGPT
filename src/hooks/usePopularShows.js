import { useDispatch } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addPopularShows } from "../utils/moviesSlice";

const usePopularShows = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const getPopularShows = async () => {
    const data = await fetch("https://api.trakt.tv/shows/popular", API_ACTION);
    const json = await data.json();
    dispatch(addPopularShows(json));
  };

  useEffect(() => {
    getPopularShows();
  }, []);
};

export default usePopularShows;
