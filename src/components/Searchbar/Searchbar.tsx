import { Container } from './Searchbar.styled';

export const Searchbar = ({ searchFormSubmitHandler }: any) => {
  return (
    <Container>
      <form onSubmit={searchFormSubmitHandler}>
        <input type="text" name="searchQuery" />
        <button type="submit">Search</button>
      </form>
    </Container>
  );
};
