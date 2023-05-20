export interface IFilmsListItem {
  title: string | undefined;
  name: string | undefined;
  id: string;
}

export interface IFilmsListProps {
  movies: IFilmsListItem[];
}

// export interface ISearchbarProps {
//   searchFormSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
// }

// export interface ISearchForm extends HTMLFormElement {
//   searchQuery: HTMLInputElement;
// }

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
