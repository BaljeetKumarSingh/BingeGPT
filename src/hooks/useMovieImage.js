import { useDispatch } from "react-redux";
import { FANART_API_KEY } from "../utils/constants";
import { addMovieImage } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieImage = (id) => {
  const dispatch = useDispatch();
  const getMovieImage = async (id) => {
    const data = await fetch(
      `http://webservice.fanart.tv/v3/movies/${id}?api_key=${FANART_API_KEY}`
    );
    const json = await data.json();
    dispatch(addMovieImage(json));
  };
  useEffect(() => {
    getMovieImage(id);
  }, []);
};

export default useMovieImage;
