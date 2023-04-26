import { Link } from 'react-router-dom';
import { Container } from './FilmsList.styled';
import { IFilmsListItem } from '../../interfaces';
export const FilmsList = ({ movies }: any) => {
  return (
    <Container>
      {movies.map(({ title, name, id }: IFilmsListItem) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        );
      })}
    </Container>
  );
};
