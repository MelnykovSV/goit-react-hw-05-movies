import React from 'react';
import image404 from './../../images/image404.gif';
import { Container } from './Page404.styled';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <Container>
      <h1>Error 404</h1>
      <p>
        You are totally lost. There's nothing here. Go back to the{' '}
        <Link to="/">Home page</Link>{' '}
      </p>
      <img src={image404} alt="404 error" />
    </Container>
  );
};

export default Page404;
