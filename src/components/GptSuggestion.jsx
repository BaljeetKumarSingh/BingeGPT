import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptSuggestion = () => {
  const searchResult = useSelector((store) => store?.movies?.searchResult);
  return (
    <div className="h-screen">
      {/* <div className="font-bold text-xl p-1">Search Result</div> */}
      <div className="flex gap-1 overflow-x-auto scrollbar-hide space-x-2 shrink-0">
        {searchResult?.map((movie) => (
          <MovieCard key={movie.trim()} id={movie.trim()} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
