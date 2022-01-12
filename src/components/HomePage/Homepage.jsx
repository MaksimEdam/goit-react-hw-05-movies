import { useState, useEffect } from "react";
import services from "../../services/api";
import MoviesList from "../MoviesList";
import Spinner from "../Spinner/";
import s from "./homePage.module.css";

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { results } = await services.fetchMovieTrending("trendingMovies");
        setTrendingMovies(results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {!loading && (
        <ul className={s.imageGallery}>
          {trendingMovies.map((movie) => (
            <MoviesList movie={movie} key={movie.id} />
          ))}
          {loading && <Spinner />}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
