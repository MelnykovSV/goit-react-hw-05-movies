export interface IFilmsListItem {
  title: string | undefined;
  name: string | undefined;
  id: string;
}

export interface IFilmsListProps {
  movies: IFilmsListItem[];
}

export interface ICastItem {
  profile_path: string;
  name: string;
  character: string;
}

export interface IMovie {
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genres: [{ name: string }];
}

export interface IErrorPageProps {
  errorMessage: string;
}

export interface IError {
  status_code: number;
  status_message: string;
  success: boolean;
}
