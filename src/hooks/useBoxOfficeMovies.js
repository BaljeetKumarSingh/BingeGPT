import { useDispatch, useSelector } from "react-redux";
import { API_ACTION } from "../utils/constants";
import { useEffect } from "react";
import { addBoxOfficeMovies } from "../utils/moviesSlice";

const useBoxOfficeMovies = () => {
  // Fetching the trakt api and putting the data in store
  const dispatch = useDispatch();
  const boxOfficeMovies = useSelector((store) => store.movies.boxOfficeMovies);
  const getBoxOfficeMovies = async () => {
    const data = await fetch(
      "https://api.trakt.tv/movies/boxoffice",
      API_ACTION
    );
    const json = await data.json();
    dispatch(addBoxOfficeMovies(json));
  };

  useEffect(() => {
    // Memoization technique
    !boxOfficeMovies && getBoxOfficeMovies();
  }, []);
};

export default useBoxOfficeMovies;
