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
    <div className="bg-linear-to-r from-slate-900 via-amber-50 to-slate-900 p-4">
      <div className="my-4">
        <input type="text" className="border-2 w-full" />
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
