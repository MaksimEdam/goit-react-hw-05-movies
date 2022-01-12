import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "5c841683b693f172a27449c1327aa5b5",
};

async function fetchMovies(url) {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (e) {
    console.error(e);
  }
}

const fetchMovieTrending = function () {
  return fetchMovies(`/trending/movie/day?`);
};

const fetchMovieSearchQuery = function (searchQuery) {
  return fetchMovies(`/search/movie?&query=${searchQuery}`);
};

const fetchMovieDescription = function (movieId) {
  return fetchMovies(`/movie/${movieId}?&language=en-US`);
};

const fetchMovieCast = function (movieId) {
  return fetchMovies(`/movie/${movieId}/credits?&language=en-US`);
};

const fetchMovieReviews = async function (movieId) {
  return fetchMovies(`/movie/${movieId}/reviews?`);
};
const api = {
  fetchMovies,
  fetchMovieTrending,
  fetchMovieSearchQuery,
  fetchMovieDescription,
  fetchMovieCast,
  fetchMovieReviews,
};

export default api;
