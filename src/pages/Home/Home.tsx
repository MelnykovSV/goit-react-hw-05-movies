import React, { useEffect, useState } from 'react';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getTrendedMovies } from '../../api';

import { Watch } from 'react-loader-spinner';
import { Container } from './Home.styled';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { IError } from '../../interfaces';

const Home = () => {
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState<IError>({ status: null, body: '' });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendedMovies()
      .then(response => {
        setMovies(response.data.results);
        setStatus('resolved');
      })
      .catch((error: Error) => {
        setError(JSON.parse(error.message));
        setStatus('rejected');
      });
  }, []);

  if (status === 'rejected') {
    return <ErrorPage errorMessage={error.body} />;
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
        <FilmsList movies={movies}></FilmsList>
      </Container>
    );
  }
};

export default Home as React.ComponentType;
