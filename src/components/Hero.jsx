const Hero = () => {
  return (
    <>
      <div className="relative border-4  border-slate-900">
        <img
          src="/heroBanner.png"
          alt=""
          className="w-full h-full relative object-cover"
        />
        <span className="absolute inset-0 h-1/3 top-0 opacity-80 bg-slate-900 w-full"></span>
        <span className="absolute inset-0 h-1/3 top-1/3 flex items-center justify-center opacity-80 bg-slate-700 w-full"></span>
        <span className="absolute  h-1/3 bottom-0 opacity-80 bg-slate-900 w-full"></span>

        <div className="absolute inset-0  flex flex-col justify-center gap-4 items-center ">
          <h1 className="text-6xl font-extrabold text-slate-100">
            DISCOVER MOVIES
          </h1>
          <p className="text-slate-100">
            Explore and discover your favorite movies from around the world.
          </p>
          <button className="bg-amber-400 text-xl text-slate-800 p-3 rounded-lg font-extrabold cursor-pointer">
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
