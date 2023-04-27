import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getMoviesByQuery } from '../../api';

const Movies = () => {
  const [searchParams, setSearchParams]: any = useSearchParams('');
  const [status, setStatus] = useState('pending');
  const [movies, setMovies] = useState([]);

  const inputChangeHandler = (e: any) => {
    setSearchParams({ query: e.target.value });
  };

  useEffect(() => {
    getMoviesByQuery(searchParams.get('query')).then(response => {
      setMovies(response.data.results);
      setStatus('resolved');
    });
  }, [searchParams]);

  if (!searchParams.get('query')) {
    return (
      <Container>
        <Searchbar
          value={searchParams.get('query')}
          inputChangeHandler={inputChangeHandler}
        ></Searchbar>
      </Container>
    );
  } else {
    if (status === 'pending') {
      return (
        <Container>
          <Searchbar
            value={searchParams.get('query')}
            inputChangeHandler={inputChangeHandler}
          ></Searchbar>
          <div>PENDING...</div>
        </Container>
      );
    }

    if (status === 'resolved') {
      return (
        <Container>
          <Searchbar
            value={searchParams.get('query')}
            inputChangeHandler={inputChangeHandler}
          ></Searchbar>
          <FilmsList movies={movies}></FilmsList>
        </Container>
      );
    }
  }
};

export default Movies;
