import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import services from "../../services/api";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await services.fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews:</h3>

      {reviews.results && (
        <ul>
          {reviews.results.map((data) => (
            <li key={data.id}>
              <p>Author: {data.author}</p>
              <p>{data.content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews && <h2>No Information Found </h2>}
    </div>
  );
}
export default Reviews;
