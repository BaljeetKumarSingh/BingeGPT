import { useSelector } from "react-redux";
import search from "../assets/search.png";
import lang from "../utils/lang";
const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className="flex justify-center flex-col items-center gap-4 bg-blend-screen bg-gradient-to-b from-purple-500 mb-10">
      <div className="flex justify-center flex-col items-center gap-2 mt-40">
        <h1 className="text-5xl font-bold">{lang[langKey].searchTitle}</h1>
        <h2 className="text-xl">
          {lang[langKey].searchSubTitle}
        </h2>
      </div>
      <div className="w-full">
        <form className="flex justify-center items-center gap-2">
          <img className="absolute left-1/16 w-8 " src={search} alt="" />
          <input
            className="bg-gray-400 py-4.5 rounded-md px-12 w-10/12 text-lg"
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
          />
          <button className="bg-red-500 text-white px-4 py-5 rounded-md">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
