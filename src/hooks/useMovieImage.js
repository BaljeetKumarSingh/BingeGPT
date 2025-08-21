import { FANART_API_KEY } from "../utils/constants";
import { useEffect, useState } from "react";

const useMovieImage = (id) => {
  const [imageData, setImageData] = useState(null);
  const getMovieImages = async (id) => {
    const data = await fetch(
      `http://webservice.fanart.tv/v3/movies/${id}?api_key=${FANART_API_KEY}`
    );
    const json = await data.json();
    setImageData(json);
  };
  useEffect(() => {
    getMovieImages(id);
  }, []);

  return imageData;
};

export default useMovieImage;
