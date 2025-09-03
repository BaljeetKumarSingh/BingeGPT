import search from "../assets/search.png";
const GptSearchBar = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 bg-blend-screen bg-gradient-to-b from-purple-500 mb-10">
      <div className="flex justify-center flex-col items-center gap-2 mt-40">
        <h1 className="text-5xl font-bold">Let AI be your Movie Guru!</h1>
        <h2 className="text-xl">
          Discover Family-Friendly Flicks for a Perfect Movie Night
        </h2>
      </div>
      <div className="w-full">
        <form className="flex justify-center items-center gap-2">
          <img className="absolute left-1/16 w-8 " src={search} alt="" />
          <input
            className="bg-gray-400 py-4.5 rounded-md px-12 w-10/12 text-lg"
            type="text"
            placeholder="What would you like to watch today?"
          />
          <button className="bg-red-500 text-white px-4 py-5 rounded-md">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
