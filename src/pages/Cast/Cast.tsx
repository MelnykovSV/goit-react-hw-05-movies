import React, { useEffect, useState } from 'react';

import { Container } from './Cast.styled';
import { useParams } from 'react-router';
import { getMovieCast } from '../../api';
import { Watch } from 'react-loader-spinner';

import placeholderImage from './../../images/placeholder-photo.jpg';

import { ICastItem, IError } from '../../interfaces';

import ErrorPage from '../../components/ErrorPage/ErrorPage';

const Cast = () => {
  const { movieId } = useParams();

  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      getMovieCast(movieId)
        .then(response => {
          setCast(response.data.cast);

          setStatus('resolved');
        })
        .catch((error: IError) => {
          setError(error.status_message);
          setStatus('rejected');
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (status === 'rejected') {
    return <ErrorPage errorMessage={error} />;
  }
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
  if (status === 'resolved') {
    if (!cast.length) {
      return (
        <div>
          <div>No cast found</div>
        </div>
      );
    }
    return (
      <Container>
        <h2>CAST</h2>
        <ul>
          {cast.map((item: ICastItem) => {
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
      </Container>
    );
  }
};

export default Cast as React.ComponentType;
