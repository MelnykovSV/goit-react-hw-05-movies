import { Link, useLocation } from 'react-router-dom';
import { Container } from './FilmsList.styled';
import { IFilmsListItem, IFilmsListProps } from '../../interfaces';

export const FilmsList = ({ movies }: IFilmsListProps) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ title, name, id }: IFilmsListItem) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        );
      })}
    </Container>
  );
};
