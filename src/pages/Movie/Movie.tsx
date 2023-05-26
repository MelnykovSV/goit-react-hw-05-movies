import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, Link, useLocation, NavLink } from 'react-router-dom';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

import { getMovieData } from '../../api';

import { useParams } from 'react-router-dom';
import placeholderPoster from './../../images/placeholder-poster.jpg';
import { Watch } from 'react-loader-spinner';

import { IMovie, IError } from '../../interfaces';
import { Container } from './Movie.styled';
import Page404 from '../Page404/Page404';

const Movie = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState<IError>({ status: null, body: '' });
  const [movie, setMovie] = useState<IMovie>();

  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (movieId) {
      getMovieData(movieId)
        .then(response => {
          setMovie(response.data);
          setStatus('resolved');
        })
        .catch((error: Error) => {
          setError(JSON.parse(error.message));
          setStatus('rejected');
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === 'pending') {
    return (
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        visible={true}
      />
    );
  }
  if (status === 'rejected') {
    if (error.status === 404) {
      return <Page404 />;
    }
    return <ErrorPage errorMessage={error.body} />;
  }
  if (status === 'resolved') {
    if (movie) {
      return (
        <Container>
          <Link to={backLinkHref.current}>Go back</Link>
          <h2>{movie?.title || movie?.name}</h2>

          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                : placeholderPoster
            }
            alt={movie?.title || movie?.name}
          />

          <p>User Score: {movie.vote_average.toFixed(1)}</p>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          <div>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(item => {
                return <li key={item.name}>{item.name}</li>;
              })}
            </ul>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </nav>
          <Suspense
            fallback={
              <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      );
    } else {
      //some default movie data
    }
  }
};

export default Movie as React.ComponentType;
