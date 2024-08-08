export interface IMovieSource<T> {
  getMovies(): Promise<T>;
  saveMovies(movies: T): Promise<void>;
}

export interface IMovieBeeceptor {
  id: number;
  name: string;
  year: number;
  actors: string[];
  calification: number;
  box_office: string;
}

export interface IMovieFreetestapi {
  id: number;
  title: string;
  year: number;
  actors: string[];
  rating: number;
  boxOffice: string;
}

export interface IMovieMMKV {
  id: number;
  movie_title: string;
  movie_year: number;
  movie_actors: string[];
  movie_rating: number;
  movie_box_office: string;
}

export const isTypeOfMovieBeeceptor = (obj: any): obj is IMovieBeeceptor => {
  return (obj as IMovieBeeceptor).name !== undefined;
};

export const isTypeOfMovieFreetestapi = (
  obj: any,
): obj is IMovieFreetestapi => {
  return (obj as IMovieFreetestapi).title !== undefined;
};

export const isTypeOfMovieMMKV = (obj: any): obj is IMovieMMKV => {
  return (obj as IMovieMMKV).movie_title !== undefined;
};
