const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 mx-auto bg- flex items-center justify-between py-2  px-7 z-10    bg-linear-to-r from-amber-900 via-amber-500 to-blue-800 font-bold  text-slate-50 ">
        <img
          src="/chobikhoj.png"
          alt=""
          className="w-36 h-auto brightness-200 contrast-125"
        />
        <div className=" flex items-center justify-center gap-2 ">
          <a
            href="/"
            className="border border-slate-50/40 px-2 py-1 rounded-md hover:bg-amber-500 hover:border-blue-800 transition-all duration-300"
          >
            Home
          </a>
          <a
            href=""
            className="border border-slate-50/40 px-2 py-1 rounded-md hover:bg-amber-500 hover:border-blue-800 transition-all duration-300"
          >
            Movies
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
