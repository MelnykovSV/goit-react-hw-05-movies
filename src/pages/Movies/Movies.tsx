import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from './Movies.styled';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { getMoviesByQuery } from '../../api';
import { Watch } from 'react-loader-spinner';

const Movies = () => {
  const [searchParams, setSearchParams]: any = useSearchParams('');
  const [status, setStatus] = useState('pending');
  const [movies, setMovies] = useState([]);

  const searchFormSubmitHandler = (e: any) => {
    e.preventDefault();
    const trimmedQuery = e.target.elements.searchQuery.value.trim();
    if (trimmedQuery) {
      setSearchParams({ query: trimmedQuery });
      e.target.reset();
    }
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
          searchFormSubmitHandler={searchFormSubmitHandler}
        ></Searchbar>
      </Container>
    );
  } else {
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
          <FilmsList movies={movies}></FilmsList>
        </Container>
      );
    }
  }
};

export default Movies;
