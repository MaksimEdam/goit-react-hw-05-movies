import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./moviesList.module.css";

function MoviesList({ movie }) {
  const { id, title } = movie;
  const { pathname } = useLocation();
  const path = pathname === "/" ? "/movies" : pathname;

  return (
    <li className={s.imageGalleryItem}>
      <Link to={`${path}/${id}`}>
        <img
          className={s.imageGalleryItemImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />
        {title}
      </Link>
    </li>
  );
}

MoviesList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default MoviesList;
