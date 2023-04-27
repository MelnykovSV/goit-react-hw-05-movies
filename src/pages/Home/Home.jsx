import React, { useEffect, useState } from 'react';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getTrendedMovies } from '../../api';
// import image from './../../images/placeholder-photo.jpg';

const Home = () => {
  const [status, setStatus] = useState('pending');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendedMovies().then(response => {
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
        {/* <img src={image} alt="" /> */}
        {console.log(movies)}
        <FilmsList movies={movies}></FilmsList>
      </div>
    );
  }
};

export default Home;
