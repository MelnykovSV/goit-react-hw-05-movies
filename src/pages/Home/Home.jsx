import React, { useEffect, useState } from 'react';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getTrendedMovies } from '../../api';

import { Watch } from 'react-loader-spinner';

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

        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
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
