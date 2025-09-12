import React from "react";
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

  const watchLive = `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=true`;
  return (
    url && (
      <div className="flex-none flex-col flex items-center justify-center h-70">
        <a href={watchLive} target="_blank" rel="noopener noreferrer">
          <img
            className="w-40 h-50 rounded-md transition-all duration-500 hover:h-70 hover:w-60"
            src={url}
            alt={image?.name}
          />
        </a>
      </div>
    )
  );
};

export default MovieCard;
