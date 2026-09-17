export async function fetchMovies(page = 0) {
  const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
  if (!res.ok) {
    throw new Error("Not Found");
  }
  return res.json();
}
