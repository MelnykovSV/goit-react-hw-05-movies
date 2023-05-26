import React from 'react';

import { Container } from './ErrorPage.styled';
import { Link } from 'react-router-dom';
import { IErrorPageProps } from '../../interfaces';

const ErrorPage = ({ errorMessage }: IErrorPageProps) => {
  return (
    <Container>
      <h1>ERROR</h1>
      <p>
        Something happened. Go back to the <Link to="/">Home page</Link>{' '}
      </p>
      <p>{errorMessage}</p>
    </Container>
  );
};

export default ErrorPage;
