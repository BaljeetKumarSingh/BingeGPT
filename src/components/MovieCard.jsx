import React from "react";
import useMovieImage from "../hooks/useMovieImage";

const MovieCard = ({ id, posterUrl }) => {
  let url;
  let image;
  if (!posterUrl) {
    image = useMovieImage(id);
    if (!image) return;
    url = image?.movieposter
      ? image?.movieposter?.[0]?.url
      : image?.moviesquare
      ? image?.moviesquare?.[0]?.url
      : image?.moviethumb
      ? image?.moviethumb?.[0]?.url
      : image?.hdmovielogo?.[0]?.url;
  } else {
    url = "https://" + posterUrl;
  }

  const watchLive = `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=true`;
  return (
    url && (
      <div className="flex-none flex-col flex items-center justify-center h-38 xl:h-60">
        <a href={watchLive} target="_blank" rel="noopener noreferrer">
          <img
            className="w-28 h-36 xl:w-40 xl:h-50 rounded-md transition-all duration-500 hover:h-60 hover:w-50"
            src={url}
            alt={image?.name}
          />
        </a>
      </div>
    )
  );
};

export default MovieCard;
