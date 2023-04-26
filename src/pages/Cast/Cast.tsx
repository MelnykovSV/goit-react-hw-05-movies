import React, { useEffect, useState } from 'react';

import { Container } from './Cast.styled';
import { useParams } from 'react-router';
import { getMovieCast } from '../../api';

export const Cast = () => {
  const { movieId }: any = useParams();

  const [status, setStatus] = useState('pending');
  const [cast, setCast]: any = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(response => {
      setCast(response.data.cast);

      setStatus('resolved');
    });
  }, []);

  if (status === 'pending') {
    return <div>PENDING...</div>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <h2>CAST</h2>
        <ul>
          {cast.map((item: any) => {
            return (
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
