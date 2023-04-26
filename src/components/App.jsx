import React, { useState, useEffect } from 'react';

import { Route, Routes, Outlet } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { TestComponent } from './TestComponent';
import { Movie } from './Movie/Movie';
import { getTrendedMovies } from '../api';
import { Trending } from './Trending/Trending';
import { FilmsListItem } from './FilmsList/FilmsList';
import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { Cast } from '../pages/Cast/Cast';

import { Reviews } from '../pages/Reviews/Reviws';
// export const App = () => {
//   const [status, setStatus] = useState('idle');
//   let movies;

//   useEffect(() => {
//     setStatus('pending');
//     getTrendedMovies().then(response => {
//       console.log(response.data.results);
//       movies = response.data.results;
//       setStatus('resolved');
//     });
//   }, []);

//   if (status === 'resolved') {
//     return (
//       <Routes>
//         <Route path="/" element={<SharedLayout />}>
//           <Route
//             index
//             element={
//               <Trending>
//                 {movies.map(({ id, title }) => {
//                   console.log(title);
//                   return <FilmsListItem key={id} name={title} id={id} />;
//                 }) || <TestComponent />}
//               </Trending>
//             }
//           />
//           <Route path="movies" element="<div>Movies</div>" />
//           <Route path="movies/:movieId" element={<Movie />}>
//             <Route path="cast" element="<div>Cast</div>" />
//             <Route path="reviews" element="<div>Reviews</div>" />
//           </Route>
//         </Route>
//       </Routes>
//     );
//   }
// };

export const App = () => {
  // const [status, setStatus] = useState('idle');
  // const [movies, setMovies] = useState('idle');

  // useEffect(() => {
  //   setStatus('pending');
  //   getTrendedMovies().then(response => {
  //     setMovies(response.data.results);
  //     setStatus('resolved');
  //   });
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

// <Trending>
//   {movies.map(({ id, title }) => {
//     console.log(title);
//     return <FilmsListItem key={id} name={title} id={id} />;
//   }) || <TestComponent />}
// </Trending>
