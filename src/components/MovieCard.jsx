import React from "react";
import { useSelector } from "react-redux";
import useMovieImage from "../hooks/useMovieImage";

const MovieCard = ({ id }) => {
  const image = useMovieImage(id);
  if (!image) return;
  const url = image?.movieposter
    ? image?.movieposter?.[0]?.url
    : image?.moviesquare
    ? image?.moviesquare?.[0]?.url
    : image?.moviethumb
    ? image?.moviethumb?.[0]?.url
    : image?.hdmovielogo?.[0]?.url;
  return (
    url && (
      <div className="flex-none flex items-center justify-center h-70">
        <img
          className="w-40 h-50 rounded-md transition-all duration-500 hover:h-70 hover:w-60"
          src={url}
          alt={image?.name}
        />
      </div>
    )
  );
};

export default MovieCard;
