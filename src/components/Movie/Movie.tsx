import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { getMovieData } from '../../api';

import { useParams } from 'react-router-dom';

export const Movie = () => {
  const { movieId }: any = useParams();
  const [status, setStatus] = useState('pending');
  const [movie, setMovie]: any = useState([]);

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
        <h2>{movie.title}</h2>

        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
            {movie.genres.map((item: any) => {
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
        <Outlet />
      </div>
    );
  }
};
