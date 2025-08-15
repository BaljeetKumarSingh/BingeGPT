import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const randomNo = Math.floor(Math.random() * 10);
  const [random, setRandom] = useState(randomNo);
  const movies = useSelector((store) => store.movies?.trendingMovies);
  if (!movies) return; // early return

  const mainMovie = movies[random];

  const { title } = mainMovie?.movie;
  const { imdb } = mainMovie?.movie?.ids;

  return (
    <div>
      <div className="absolute z-10">
        <VideoTitle id={imdb} />
      </div>
      <div className="relative">
        <VideoBackground id={imdb} />
      </div>
    </div>
  );
};

export default MainContainer;
