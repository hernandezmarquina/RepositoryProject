export enum IDataSourceType {
  LOCAL = 'local',
  WIFI = 'wifi',
  RED = 'red',
}

export interface IMovieDataSource<T> {
  sourceType: IDataSourceType;
  getMovies(): Promise<T[]>;
  saveMovies(movies: T[]): Promise<void>;
}
