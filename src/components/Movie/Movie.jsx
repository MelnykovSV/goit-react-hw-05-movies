import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { getMovieData } from '../../api';

import { useParams } from 'react-router-dom';
import placeholderPoster from './../../images/placeholder-poster.jpg';

const Movie = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('pending');
  const [movie, setMovie] = useState([]);

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieData(movieId).then(response => {
      setMovie(response.data);
      setStatus('resolved');
    });
  }, []);

  if (status === 'pending') {
    return <div>PENDING...</div>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <Link to={backLinkHref}>Go back</Link>
        <h2>{movie.title}</h2>

        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : placeholderPoster
          }
          alt={movie.title}
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
              return <li>{item.name}</li>;
            })}
          </ul>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

export default Movie;
