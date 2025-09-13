import { useNavigate } from "react-router-dom";
import { BG_IMG } from "../utils/constants";
import lang from "../utils/lang";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const langKey = useSelector(store => store.config.lang);
  /**
   * lang[langKey].unlimitedMoviesTV -> Here [langKey] make this chaining dynamic(make sure not to use dot before this'[]')
   */
  return (
    <div className="">
      <div className="absolute">
        <img className=" w-screen h-screen" src={BG_IMG} alt="background-img" />
      </div>
      <div className="absolute flex items-center justify-center w-screen h-screen bg-black/70">
        <div className="flex items-center justify-center flex-col text-white">
          <h1 className="text-6xl text-center font-bold">{lang[langKey].unlimitedMoviesTV}</h1>
          <h1 className="text-6xl font-bold text-center mb-4">{lang[langKey].showsAndMore}</h1>
          <h2 className="mb-8 font-medium  text-xl">{lang[langKey].startsAt}</h2>
          <button
            className="bg-red-700 py-3 px-6 rounded-md cursor-pointer font-bold text-2xl"
            onClick={() => navigate("/login")}
          >
            {lang[langKey].getStarted}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
