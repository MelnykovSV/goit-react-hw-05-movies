import React, { useEffect, useState } from 'react';

import { Container } from './Reviews.styled';
import { useParams } from 'react-router';
import { getMovieReviews } from '../../api';

export const Reviews = () => {
  const { movieId }: any = useParams();

  const [status, setStatus] = useState('pending');
  const [reviews, setReviews]: any = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(response => {
      setReviews(response.data.results);

      setStatus('resolved');
    });
  }, []);

  if (status === 'pending') {
    return <div>PENDING...</div>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <h2>REVIEWS</h2>
        <ul>
          {reviews.map((item: any) => {
            return (
              <li>
                <p>{item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
