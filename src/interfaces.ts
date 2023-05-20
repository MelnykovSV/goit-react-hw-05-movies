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
