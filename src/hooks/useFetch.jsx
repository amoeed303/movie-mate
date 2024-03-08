import { useEffect, useState } from "react";

export const useFetch = (api) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
    return { data };
};
