
import React, { useEffect, useState } from "react";
import { Carousel_Comp, Card } from "../components";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=1950b9a11aa47c43c7c69b6814ee9956"
      );
      const data = await response.json();
      setMovies(data.results)
    }
    fetchMovies();
  }, [])
  
    const images = movies.map((movie) => {
      const baseUrl = "https://image.tmdb.org/t/p/original"; // adjust size as needed
      const imageUrl = `${baseUrl}${movie.poster_path}`;
      return { imageUrl };
    });
  return (
    <main>
      <Carousel_Comp images={images} />

      {/*carosel  */}
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap">
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
        
          
        </div>
      </section>
    </main>
  );
};
