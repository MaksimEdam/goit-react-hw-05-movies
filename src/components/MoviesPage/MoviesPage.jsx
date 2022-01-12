import { useState, useEffect } from "react";
import Searchbar from "../Searchbar";
import services from "../../services/api";
import { useNavigate } from "react-router-dom";
import MoviesList from "../MoviesList";
import Spinner from "../Spinner";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    setLoading(true);
    async function fetchData() {
      try {
        const { results } = await services.fetchMovieSearchQuery(searchQuery);
        setMovie(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [searchQuery]);

  const handleQueryChange = (query) => {
    setSearchQuery(query);
    navigate(`?query=${query}`);
  };

  return (
    <div>
      <Searchbar onSubmit={handleQueryChange} />
      <button onClick={() => navigate("/")}>GO BACK</button>
      {loading && <Spinner />}
      <ul className={s.imageGallery}>
        {movie.map((film) => (
          <MoviesList movie={film} key={film.id} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
