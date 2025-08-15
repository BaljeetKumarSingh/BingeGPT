import useMovieImage from "../hooks/useMovieImage";
import { useSelector } from "react-redux";
import useMovieSummary from "../hooks/useMovieSummary";

const VideoTitle = ({ id }) => {
  useMovieImage(id);
  useMovieSummary(id);
  const image = useSelector((store) => store?.movies?.movieImage);
  const summary = useSelector((store) => store?.movies?.movieSummary);
  if (!image && !summary) return;
  /**
   * Hover image animation
   *  class="transition-all duration-1000 pt-30 hover:pt-0" (Here, it starts with pt-30 and shrinks to pt-0 on hover and translation will be smoother)
   *  hover:*:inline (on hover make the all the children display-inline)
   *  hover:**:inline (for grand children)
   */
  return (
    <div>
      <div className="pt-60 pl-30">
        <div className="flex flex-col gap-1 justify-center items-center w-md min-h-md pt-30 pb-15 transition-all duration-1000 hover:pt-0  hover:**:inline">
          <div className="mb-4">
            <img src={image.hdmovielogo[0].url} alt="Movie Background" />
            <p className="hidden text-center font-bold text-white">
              {summary?.overview}
            </p>
          </div>
          <div className="block">
            <a href={summary?.trailer} target="_blank">
              <button className="bg-white text-lg font-medium shadow-md rounded-sm px-2 py-1 mr-3 cursor-pointer">
                &#x2BC8; Play
              </button>
            </a>
            <a href={summary?.homepage} target="_blank">
              <button className="bg-white/30 text-lg font-medium shadow-md rounded-sm px-2 py-1 cursor-pointer">
                &#x1F6C8; More Info
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
