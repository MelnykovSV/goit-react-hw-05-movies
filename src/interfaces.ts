export interface IFilmsListItem {
  title: string | undefined;
  name: string | undefined;
  id: string;
}

export interface IFilmsListProps {
  movies: IFilmsListItem[];
}
