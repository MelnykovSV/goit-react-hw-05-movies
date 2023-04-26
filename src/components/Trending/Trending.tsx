import { Container } from './Trending.styled';
export const Trending = ({ children }: any) => {
  return (
    <Container>
      <h1>Trending today</h1>
      <ul>{children}</ul>
    </Container>
  );
};
