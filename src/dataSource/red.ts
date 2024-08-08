import BeeceptorSource from '../source/beeceptor';
import {IMovieBeeceptor} from '../source/types';
import {IDataSourceType, IMovieDataSource} from './types';

class RedDataSource implements IMovieDataSource<IMovieBeeceptor> {
  sourceType: IDataSourceType;
  source: BeeceptorSource;
  constructor() {
    this.sourceType = IDataSourceType.RED;
    this.source = new BeeceptorSource();
  }
  async getMovies() {
    return this.source.getMovies();
  }

  async saveMovies(movies: IMovieBeeceptor[]): Promise<void> {
    throw new Error('Method not available for RedDataSource');
  }
}

export default RedDataSource;
