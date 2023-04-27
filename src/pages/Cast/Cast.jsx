import React, { useEffect, useState } from 'react';

import { Container } from './Cast.styled';
import { useParams } from 'react-router';
import { getMovieCast } from '../../api';

import placeholderImage from './../../images/placeholder-photo.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [cast, setCast] = useState([]);

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
    if (!cast.length) {
      return (
        <div>
          <div>No cast found</div>
        </div>
      );
    }
    return (
      <div>
        <h2>CAST</h2>
        <ul>
          {cast.map(item => {
            return (
              <li>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                      : placeholderImage
                  }
                  alt={item.name || 'No name found'}
                />
                <p>{item.name || 'No name found'}</p>
                <p>Character: {item.character || 'No character name found'}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Cast;
