import React from "react";
import { useSelector } from "react-redux";
import useMovieImage from "../hooks/useMovieImage";

const MovieCard = ({ title, id }) => {
  const image = useMovieImage(id);
  if (!image) return;
  console.log(image);
  const url = image?.movieposter
    ? image?.movieposter?.[0]?.url
    : image?.moviesquare
    ? image?.movieposter?.[0]?.url
    : image?.moviethumb?.[0]?.url;
  return (
    url && (
      <div className="flex-none flex items-center justify-center h-70 duration-500 hover:*:block">
        <img
          className="w-40 h-50 rounded-md transition-all duration-500 hover:h-70 hover:w-60"
          src={url}
          alt={title}
        />
        <p className="hidden text-md absolute bottom-12 text-wrap text-center font-bold">
          {title}
        </p>
      </div>
    )
  );
};

export default MovieCard;
