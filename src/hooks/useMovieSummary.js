import { useDispatch } from "react-redux";
import { API_ACTION, FANART_API_KEY } from "../utils/constants";
import { useEffect } from "react";
import { addMovieSummary } from "../utils/moviesSlice";

const useMovieSummary = (id) => {
  const dispatch = useDispatch();
  const getMovieSummary = async (id) => {
    const data = await fetch(
      `https://api.trakt.tv/movies/${id}?extended=full`,
      API_ACTION
    );
    const json = await data.json();
    dispatch(addMovieSummary(json));
  };
  useEffect(() => {
    getMovieSummary(id);
  }, []);
};

export default useMovieSummary;
