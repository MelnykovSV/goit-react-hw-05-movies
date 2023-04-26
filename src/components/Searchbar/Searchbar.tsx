import { Container } from './Searchbar.styled';

export const Searchbar = ({ inputChangeHandler, value }: any) => {
  return (
    <Container>
      <input
        type="text"
        name="searchQuery"
        value={value}
        onChange={inputChangeHandler}
      />
    </Container>
  );
};
