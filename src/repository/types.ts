import {
  IMovieBeeceptor,
  IMovieFreetestapi,
  IMovieMMKV,
  isTypeOfMovieBeeceptor,
} from '../source/types';
import {IMovieModel} from '../types';

export interface IMovieRepository {
  getMovieList(): Promise<IMovieModel[]>;
}

export const MovieMapper = {
  fromBeeceptor: (data: IMovieBeeceptor[]): IMovieModel[] => {
    return data.map(movie => ({
      id: movie.id,
      title: movie.name,
      year: movie.year,
      actors: movie.actors,
      rating: movie.calification,
      boxOffice: movie.box_office,
    }));
  },
  fromFreetestapi: (data: IMovieFreetestapi[]): IMovieModel[] => {
    return data.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: movie.year,
      actors: movie.actors,
      rating: movie.rating,
      boxOffice: movie.boxOffice,
    }));
  },
  fromMMKV: (data: IMovieMMKV[]): IMovieModel[] => {
    return data.map(movie => ({
      id: movie.id,
      title: movie.movie_title,
      year: movie.movie_year,
      actors: movie.movie_actors,
      rating: movie.movie_rating,
      boxOffice: movie.movie_box_office,
    }));
  },
  toMMKV: (data: IMovieBeeceptor[] | IMovieFreetestapi[]): IMovieMMKV[] => {
    if (isTypeOfMovieBeeceptor(data[0])) {
      data = data as IMovieBeeceptor[];
      return data.map(movie => ({
        id: movie.id,
        movie_title: movie.name,
        movie_year: movie.year,
        movie_actors: movie.actors,
        movie_rating: movie.calification,
        movie_box_office: movie.box_office,
      }));
    } else {
      data = data as IMovieFreetestapi[];
      return data.map(movie => ({
        id: movie.id,
        movie_title: movie.title,
        movie_year: movie.year,
        movie_actors: movie.actors,
        movie_rating: movie.rating,
        movie_box_office: movie.boxOffice,
      }));
    }
  },
};
