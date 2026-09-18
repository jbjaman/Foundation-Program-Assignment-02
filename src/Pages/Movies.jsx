import { Clapperboard, LoaderPinwheel, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMovies, searchMovies } from "../api/chobikhoj";
import Card from "../components/Card";
import CardModal from "../components/CardModal";

const formatRating = (rating) => {
  const value = rating?.average;
  return typeof value === "number" ? value.toFixed(1) : "0.0";
};

const formatYear = (premiered) => {
  return premiered ? premiered.slice(0, 4) : "0000";
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    let active = true;
    const trimmed = query.trim();
    const timer = setTimeout(
      () => {
        if (active) {
          setLoading(true);
          setError(null);
        }
        const load = trimmed ? searchMovies(trimmed) : fetchMovies(0);
        load
          .then((results) => {
            if (active) setMovies(results);
          })
          .catch((err) => {
            if (active) setError(err.message);
          })
          .finally(() => {
            if (active) setLoading(false);
          });
      },
      trimmed ? 350 : 0,
    );
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="bg-linear-to-r from-slate-900 via-slate-400 to-slate-900 p-4">
      <div className="sticky top-20 z-30 mb-5">
        <div className="flex items-center gap-3 rounded-full  border-4 border-slate-600 px-5 py-2 backdrop-blur-lg">
          <span
            aria-hidden="true"
            className="text-slate-50 flex items-center gap-1"
          >
            <Search color="white" strokeWidth={1} size={17} /> Search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="your favourite movies here..."
            className="w-full bg-transparent text-amber-200 placeholder-slate-400 focus:outline-none text-md"
          />
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-marquee-velvet bg-marquee-velvet/20 px-4 py-3 font-body text-sm text-marquee-cream h-screen">
          {error}
        </p>
      )}
      {loading && (
        <div className="h-screen  flex flex-col items-center justify-center text-white lg:text-xl font-bold text-center">
          <span className="animate-spin">
            <LoaderPinwheel size={50} />
          </span>
          <p>Searching Movies, Please wait...</p>
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className=" h-screen flex flex-col items-center justify-center text-red-900 lg:text-xl font-bold animate-pulse text-center ">
          <span>
            <Clapperboard size={50} />
          </span>{" "}
          Nothing matches that title. Try another search...
        </p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className=" grid  lg:grid-cols-4 gap-4">
          {movies.map((show) => (
            <>
              <Card
                key={show.id}
                name={show.name}
                poster={show.image?.medium}
                rating={formatRating(show.rating)}
                year={formatYear(show.premiered)}
                showDetails={() => setSelectedMovie(show)}
              />
            </>
          ))}
        </div>
      )}

      <CardModal show={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default Movies;
