import React, { useEffect, useState } from 'react';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getTrendedMovies } from '../../api';

export const Home = () => {
  const [status, setStatus] = useState('pending');
  const [movies, setMovies] = useState([]);

  //   let movies;

  useEffect(() => {
    getTrendedMovies().then(response => {
      //   console.log(response.data.results);
      setMovies(response.data.results);
      setStatus('resolved');
    });
  }, []);

  if (status === 'pending') {
    return (
      <div>
        <h1>Trending today</h1>

        <div> PENDING...</div>
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <div>
        <h1>Trending today</h1>
        {console.log(movies)}
        <FilmsList movies={movies}></FilmsList>
      </div>
    );
  }
};
