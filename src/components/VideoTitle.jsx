import useMovieImage from "../hooks/useMovieImage";
import { useSelector } from "react-redux";
import useMovieSummary from "../hooks/useMovieSummary";

const VideoTitle = ({ id }) => {
  useMovieSummary(id);
  const image = useMovieImage(id);
  const summary = useSelector((store) => store?.movies?.movieSummary);
  if (!image && !summary) return;
  /**
   * Hover image animation
   *  class="transition-all duration-1000 pt-30 hover:pt-0" (Here, it starts with pt-30 and shrinks to pt-0 on hover and translation will be smoother)
   *  hover:*:inline (on hover make the all the children display-inline)
   *  hover:**:inline (for grand children)
   */
  const watchLive = `https://vidsrc.cc/v2/embed/movie/${summary?.ids?.imdb}?autoPlay=true`;
  return (
    <div>
      <div className="lg:pt-16 xl:pt-40 pl-8 lg:pl-16 xl:pl-20 absolute bg-gradient-to-b from-black w-screen">
        <div className="flex flex-col gap-1 justify-center items-center w-42 sm:w-xs md:w-sm lg:w-md min-h-md pt-24 sm:pt-30 pb-15 transition-all duration-1000 hover:pt-0  hover:**:inline">
          <div className="sm:mb-4">
            <img src={image?.hdmovielogo[0]?.url} alt="Movie Background" />
            <p className="hidden text-center font-bold text-white">
              {summary?.overview}
            </p>
          </div>
          <div className="block">
            <a href={watchLive} target="_blank">
              <button className="bg-white text-black text-[12px] sm:text-lg font-medium shadow-md rounded-sm px-1 sm:px-2 py-1 mr-1 sm:mr-3 cursor-pointer hover:opacity-80">
                &#x2BC8; Play
              </button>
            </a>
            <a href={summary?.homepage} target="_blank">
              <button className="bg-white/30 text-black text-[12px] sm:text-lg font-medium shadow-md rounded-sm px-1 sm:px-2 py-1 cursor-pointer">
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
