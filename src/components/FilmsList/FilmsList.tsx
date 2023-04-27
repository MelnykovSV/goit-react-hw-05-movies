import { Link, useLocation } from 'react-router-dom';
import { Container } from './FilmsList.styled';
import { IFilmsListItem } from '../../interfaces';
export const FilmsList = ({ movies }: any) => {
  const location = useLocation();

  console.log(location);
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
