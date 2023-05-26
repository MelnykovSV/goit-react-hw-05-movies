import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getMoviesByQuery } from '../../api';
import { Watch } from 'react-loader-spinner';
import { IError } from '../../interfaces';

import ErrorPage from '../../components/ErrorPage/ErrorPage';

const Movies = () => {
  const [searchParams, setSearchParams]: any = useSearchParams('');
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState<IError>({ status: null, body: '' });
  const [movies, setMovies] = useState([]);

  const searchFormSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      searchQuery: { value: string };
    };

    const trimmedQuery = target.searchQuery.value.trim();
    if (trimmedQuery) {
      setStatus('pending');
      setSearchParams({ query: trimmedQuery });
      target.searchQuery.value = '';
    }
  };

  useEffect(() => {
    getMoviesByQuery(searchParams.get('query'))
      .then(response => {
        setMovies(response.data.results);
        setStatus('resolved');
      })
      .catch((error: Error) => {
        setError(JSON.parse(error.message));
        setStatus('rejected');
      });
  }, [searchParams]);

  if (!searchParams.get('query')) {
    return (
      <Container>
        <Searchbar
          value={searchParams.get('query')}
          searchFormSubmitHandler={searchFormSubmitHandler}
        ></Searchbar>
      </Container>
    );
  } else {
    if (status === 'rejected') {
      return <ErrorPage errorMessage={error.body} />;
    }
    if (status === 'pending') {
      return (
        <Container>
          <Searchbar
            value={searchParams.get('query')}
            searchFormSubmitHandler={searchFormSubmitHandler}
          ></Searchbar>
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </Container>
      );
    }

    if (status === 'resolved') {
      return (
        <Container>
          <Searchbar
            value={searchParams.get('query')}
            searchFormSubmitHandler={searchFormSubmitHandler}
          ></Searchbar>
          {movies.length ? (
            <FilmsList movies={movies}></FilmsList>
          ) : (
            <p>{`Cant find a movie with name ${searchParams.get('query')}`}</p>
          )}
        </Container>
      );
    }
  }
};

export default Movies as React.ComponentType;
