import React, { useEffect, useState } from 'react';

import { Container } from './Reviews.styled';
import { useParams } from 'react-router';
import { getMovieReviews } from '../../api';
import { Watch } from 'react-loader-spinner';
import { IError } from '../../interfaces';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Page404 from '../Page404/Page404';
import shortid from 'shortid';

const Reviews = () => {
  const { movieId }: any = useParams();

  const [status, setStatus] = useState('pending');
  const [error, setError] = useState<IError>({ status: null, body: '' });
  const [reviews, setReviews]: any = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => {
        setReviews(response.data.results);
        setStatus('resolved');
      })
      .catch((error: Error) => {
        setError(JSON.parse(error.message));
        setStatus('rejected');
      });
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
    if (!reviews.length) {
      return (
        <div>
          <p>No veriews found</p>
        </div>
      );
    }
    return (
      <Container>
        <h2>REVIEWS</h2>
        <ul>
          {reviews.map((item: any) => {
            return (
              <li key={shortid()}>
                <p>{item.author || 'Author name is not found'}</p>
                <p>{item.content || 'Overview content is not found'}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
};

export default Reviews as React.ComponentType;
