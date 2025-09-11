import { useDispatch, useSelector } from "react-redux";
import search from "../assets/search.png";
import lang from "../utils/lang";
import { useRef, useState } from "react";
import openAi from "../utils/openAi";
import { addSearchResult } from "../utils/moviesSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState(null);

  const handleGptSearchClick = async () => {
    // Make an chatGPT api call
    const gptResult = await openAi.responses.create({
      model: "gpt-4o",
      instructions: `
    You are a movie recommendation system. 
    Behavior:
    1. If the query clearly asks for a specific movie:
       - Return the IMDb ID of that movie.
       - Also return 15 IMDb IDs of related movies from the same genre.
    2. If the query is not for a specific movie:
       - Return 15 IMDb IDs of movies that are related to the query.
    
    Output rules:
    - Only return IMDb IDs.
    - IMDb IDs must be comma-separated (no spaces, no text, no explanations).
    - Example output: tt26581740,tt28996126,tt12345678,...
  `,
      input: searchText.current.value,
    });

    const res = gptResult.output_text.split(",");
    dispatch(addSearchResult(res));
    setSearchedText(searchText.current.value);
  };
  return (
    <div>
      <div className="flex justify-center flex-col items-center gap-4 bg-blend-screen bg-gradient-to-b from-purple-500 mb-10">
        <div className="flex justify-center flex-col items-center gap-2 mt-40">
          <h1 className="text-5xl font-bold">{lang[langKey].searchTitle}</h1>
          <h2 className="text-xl">{lang[langKey].searchSubTitle}</h2>
        </div>
        <div className="w-full">
          <form
            className="flex justify-center items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <img className="absolute left-1/16 w-8 " src={search} alt="" />
            <input
              ref={searchText}
              className="bg-gray-400 py-4.5 rounded-md px-12 w-10/12 text-lg"
              type="text"
              placeholder={lang[langKey].searchPlaceholder}
            />
            <button
              className="bg-red-500 text-white px-4 py-5 rounded-md"
              onClick={handleGptSearchClick}
            >
              {lang[langKey].search}
            </button>
          </form>
        </div>
      </div>
      <div className="font-bold text-xl p-1">{searchedText}</div>
    </div>
  );
};

export default GptSearchBar;
