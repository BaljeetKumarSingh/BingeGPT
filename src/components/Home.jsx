import { useNavigate } from "react-router-dom";
import { BG_IMG } from "../utils/constants";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="absolute">
        <img className=" w-screen h-screen" src={BG_IMG} alt="background-img" />
      </div>
      <div className="absolute flex items-center justify-center w-screen h-screen bg-black/70">
        <div className="flex items-center justify-center flex-col text-white">
          <h1 className="text-6xl font-bold">Unlimited movies, TV</h1>
          <h1 className="text-6xl font-bold mb-4">shows and more</h1>
          <h2 className="mb-8 font-medium text-xl">
            Starts at ₹149. Cancel at any time.
          </h2>
          <button
            className="bg-red-700 py-3 px-6 rounded-md cursor-pointer font-bold text-2xl"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
