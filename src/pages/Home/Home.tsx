import React, { useEffect, useState } from 'react';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getTrendedMovies } from '../../api';

import { Watch } from 'react-loader-spinner';
import { Container } from './Home.styled';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { IError } from '../../interfaces';

const Home = () => {
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendedMovies()
      .then(response => {
        setMovies(response.data.results);
        setStatus('resolved');
      })
      .catch((error: IError) => {
        setStatus('rejected');
        setError(error.status_message);
      });
  }, []);

  if (status === 'rejected') {
    return <ErrorPage errorMessage={error} />;
  }
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
      <Container>
        <h1>Trending today</h1>
        {/* <img src={image} alt="" /> */}
        {console.log(movies)}
        <FilmsList movies={movies}></FilmsList>
      </Container>
    );
  }
};

export default Home;
