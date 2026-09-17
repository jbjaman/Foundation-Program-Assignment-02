const Card = () => {
  return (
    <div className="border-4 flex flex-col rounded-lg border-amber-300">
      <div className="w-full bg-amber-300">POSTER</div>

      <div>
        <h3 className="text-lg">SPIDERMAN</h3>
        <div className="flex items-center gap-4 ">
          <span>★ 5.0</span>
          <span>2024</span>
        </div>

        <button className="bg-amber-400 text-sm text-slate-800 px-4 py-2 rounded-md font-extrabold cursor-pointer">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Card;
