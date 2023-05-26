import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import Page404 from '../../pages/Page404/Page404';

//Найти, как это делается правильно!!!
const Movie = lazy<any>(() => import('../../pages/Movie/Movie'))!;
const Movies = lazy<any>(() => import('../../pages/Movies/Movies'));
const Home = lazy<any>(() => import('../../pages/Home/Home'));
const Cast = lazy<any>(() => import('../../pages/Cast/Cast'));
const Reviews = lazy<any>(() => import('../../pages/Reviews/Reviews'));

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
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
