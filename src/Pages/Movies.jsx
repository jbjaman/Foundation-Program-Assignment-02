import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/chobikhoj";
import Card from "../components/Card";

const formatRating = (rating) => {
  const value = rating?.average;
  return typeof value === "number" ? value.toFixed(1) : "0.0";
};

const formatYear = (premiered) => {
  return premiered ? premiered.slice(0, 4) : "0000";
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(0);
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

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
            // value={query}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="your favourite movies here..."
            className="w-full bg-transparent text-amber-200 placeholder-slate-400 focus:outline-none text-md"
          />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {movies.map((show) => (
          <>
            <Card
              key={show.id}
              name={show.name}
              poster={show.image?.medium}
              rating={formatRating(show.rating)}
              year={formatYear(show.premiered)}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Movies;
