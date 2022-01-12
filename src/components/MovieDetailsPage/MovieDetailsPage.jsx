import { useState, useEffect, Suspense } from "react";
import {
  useParams,
  useNavigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Spinner from "../Spinner";
import services from "../../services/api";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await services.fetchMovieDescription(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const year = release_date ? release_date.split("-")[0] : "";

  return (
    <>
      <button onClick={() => navigate("/")}>
        <span>GO BACK</span>
      </button>
      <div>
        {loading && <Spinner />}
        <div>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="250"
            />
          ) : (
            <h2>No Image:(</h2>
          )}
        </div>
        <div>
          <h2>
            {title} ({year})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres ? (
            <p>{genres.map(({ name }) => name).join(" ")}</p>
          ) : (
            <h3>No Genres Found(</h3>
          )}

          <h3>Additional information:</h3>

          <ul>
            <li>
              <NavLink to="cast">
                <span> Cast</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews">
                <span>Reviews</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="cast" element={movie && <Cast movieId={movieId} />} />
            <Route
              path="reviews"
              element={movie && <Reviews movieId={movieId} />}
            />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetailsPage;
