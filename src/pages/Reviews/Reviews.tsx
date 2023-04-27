import React, { useEffect, useState } from 'react';

import { Container } from './Reviews.styled';
import { useParams } from 'react-router';
import { getMovieReviews } from '../../api';

const Reviews = () => {
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
    if (!reviews.length) {
      return (
        <div>
          <p>No veriews found</p>
        </div>
      );
    }
    return (
      <div>
        <h2>REVIEWS</h2>
        <ul>
          {reviews.map((item: any) => {
            return (
              <li>
                <p>{item.author || 'Author name is not found'}</p>
                <p>{item.content || 'Overview content is not found'}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Reviews;
