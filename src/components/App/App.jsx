import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Navigation from "../Navigation";
import NotFoundPage from "../NotFoundPage";
import Spinner from "../Spinner";

const HomePage = lazy(() =>
  import("../HomePage/Homepage" /* webpackChunkName: "HomePage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const MoviesPage = lazy(() =>
  import("../MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
