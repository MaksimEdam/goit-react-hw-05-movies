import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import services from "../../services/api";

function Cast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await services.fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {cast.cast && (
        <ul>
          {cast.cast.map((performer) => (
            <li key={performer.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${performer.profile_path}`}
                alt={performer.name}
                width="50"
              />
              <p>{performer.name}</p>
              <p>Character: {performer.character}</p>
            </li>
          ))}
        </ul>
      )}
      {!cast.cast && <h2>No Information Found( {cast.length}</h2>}
    </div>
  );
}
export default Cast;
