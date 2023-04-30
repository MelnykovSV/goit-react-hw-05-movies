import { lazy } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
// import { TestComponent } from './TestComponent';

// import { getTrendedMovies } from '../api';
// import { Trending } from './Trending/Trending';
// import { FilmsListItem } from './FilmsList/FilmsList';

const Movie = lazy(() => import('../pages/Movie/Movie'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
