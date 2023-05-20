import { Container } from './Searchbar.styled';
// import { ISearchbarProps } from '../../interfaces';

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
