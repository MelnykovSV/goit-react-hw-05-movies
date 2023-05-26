import { Container } from './Searchbar.styled';

import { BiSearchAlt2 } from 'react-icons/bi';

export const Searchbar = ({ searchFormSubmitHandler }: any) => {
  return (
    <Container>
      <form onSubmit={searchFormSubmitHandler}>
        <input type="text" name="searchQuery" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </Container>
  );
};
