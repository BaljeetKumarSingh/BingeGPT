import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";

const GptSearch = () => {
  return (
    <div className="bg-black text-white h-full">
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
