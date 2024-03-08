import { Carousel_Comp, Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ api }) => {
  const { data } = useFetch(api);

  const images = data.map((movie) => {
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
          {data.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
