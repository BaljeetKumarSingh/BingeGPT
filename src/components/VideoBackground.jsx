import { useSelector } from "react-redux";
import { getTrailerKey } from "../utils/constants";

const VideoBackground = ({ id }) => {
  const summary = useSelector((store) => store?.movies?.movieSummary);
  if (!summary) return;
  const trailerKey = getTrailerKey(summary?.trailer);
  /**
   * Youtube controls:
   * autoplay=1 → starts playing automatically
   * mute=1 → bypasses autoplay restrictions
   * rel=0 → only shows related videos from the same channel
   * modestbranding=1 → hides YouTube logo from the control bar (minimizes branding)
   * showinfo=0 → hides title & uploader info (deprecated, but still works partly in some embeds)
   * 
   * aspect-video -> aspect-ratio: 16 / 9
   */

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?autoplay=1&mute=1&rel=0&modestbranding=1&showinfo=0&control=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
