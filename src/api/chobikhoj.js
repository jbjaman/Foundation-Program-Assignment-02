export async function fetchMovies(page = 0) {
  const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
  if (!res.ok) {
    throw new Error("Not Found");
  }
  return res.json();
}

export async function searchMovies(query) {
  const res = await fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
  );
  if (!res.ok) throw new Error("Search failed. Try again in a moment.");
  const data = await res.json();
  return data.map((entry) => entry.show);
}
