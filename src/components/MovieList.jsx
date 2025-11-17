import MovieCard from "./MovieCard";

const MovieList = ({ movies, heading }) => {
  return (
    <div>
      <div className="font-bold xl:text-xl p-1">{heading}</div>
      <div className="flex gap-1 overflow-x-auto scrollbar-hide space-x-2 shrink-0">
        {movies?.map((movie) => (
          <MovieCard
            key={movie?.movie ? movie?.movie?.ids?.tmdb : movie?.ids?.tmdb}
            id={movie?.movie ? movie?.movie?.ids?.imdb : movie?.ids?.imdb}
            posterUrl={movie?.movie ? movie?.movie?.images?.poster[0] : null}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
