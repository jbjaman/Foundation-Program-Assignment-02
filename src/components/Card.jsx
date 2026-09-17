const Card = ({ name, poster, rating, year }) => {
  return (
    <div className="relative rounded-lg ">
      <img
        src={poster}
        alt=""
        className="w-full rounded-lg hover:-translate-y-6 duration-500"
      />

      <div className=" absolute bottom-0 bg-slate-900/90 w-full rounded-b-lg text-slate-50 p-2 ">
        <h3 className=" text-xl font-bold mb-3">{name}</h3>
        <div className="flex  items-center justify-between ">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>

        <button className="mt-3 hover:bg-amber-400 text-sm hover:text-slate-800 px-4 py-2 rounded-md font-extrabold cursor-pointer w-full bg-transparent border-amber-400 border text-slate-50">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Card;
