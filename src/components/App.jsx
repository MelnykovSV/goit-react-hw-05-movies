import { Route, Routes, Outlet } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { TestComponent } from './TestComponent';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element="<div>Home</div>" />
        <Route path="movies" element="<div>Movies</div>" />
        <Route path="movies/:movieId" element="<div>Movie</div>">
          <Route path="cast" element="<div>Cast</div>" />
          <Route path="reviews" element="<div>Reviews</div>" />
        </Route>
      </Route>
    </Routes>
  );
};

{
  /* <Routes>
<Route
  path="/"
  element={
    <div>
      Home <Outlet></Outlet>{' '}
    </div>
  }
>
  <Route index element="<div>Home</div>" />
  <Route path="movies" element="<div>Movies</div>" />
  <Route path="movies/:movieId" element="<div>Movie</div>">
    <Route path="cast" element="<div>Cast</div>" />
    <Route path="reviews" element="<div>Reviews</div>" />
  </Route>
</Route>
</Routes> */
}
