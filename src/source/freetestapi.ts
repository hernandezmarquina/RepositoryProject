import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {IMovieFreetestapi, IMovieSource} from './types';

class FreeTestApiSource implements IMovieSource<IMovieFreetestapi[]> {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://freetestapi.com/api/v1',
    });
  }
  async getMovies(): Promise<IMovieFreetestapi[]> {
    const response: AxiosResponse<IMovieFreetestapi[]> = await this.axios.get(
      '/movies',
    );
    return response.data;
  }
  async saveMovies(movies: IMovieFreetestapi[]): Promise<void> {
    throw new Error('Method not available for FreeTestApiSource');
  }
}

export default FreeTestApiSource;
