import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.trendingMovies);
  const randomNo = Math.floor(Math.random() * 10);
  if (!movies) return; // early return

  const mainMovie = movies[randomNo];
  const { imdb } = mainMovie?.movie?.ids;

  return (
    <div>
      <VideoTitle id={imdb} />
      <VideoBackground id={imdb} />
    </div>
  );
};

export default MainContainer;
