import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {IMovieBeeceptor, IMovieSource} from './types';

const BASE_URL = 'https://movies.free.beeceptor.com';

class BeeceptorSource implements IMovieSource<IMovieBeeceptor[]> {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
    });
  }

  async getMovies(): Promise<IMovieBeeceptor[]> {
    const response: AxiosResponse<IMovieBeeceptor[]> = await this.axios.get(
      '/movies',
    );
    return response.data;
  }
  async saveMovies(movies: IMovieBeeceptor[]): Promise<void> {
    throw new Error('Method not available for BeeceptorSource');
  }
}

export default BeeceptorSource;
