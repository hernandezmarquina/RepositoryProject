import FreeTestApiSource from '../source/freetestapi';
import {IMovieFreetestapi} from '../source/types';
import {IDataSourceType, IMovieDataSource} from './types';

class WifiDataSource implements IMovieDataSource<IMovieFreetestapi> {
  sourceType: IDataSourceType;
  source: FreeTestApiSource;
  constructor() {
    this.sourceType = IDataSourceType.WIFI;
    this.source = new FreeTestApiSource();
  }
  async getMovies() {
    return this.source.getMovies();
  }
  async saveMovies(movies: IMovieFreetestapi[]): Promise<void> {
    throw new Error('Method not available for WifiDataSource');
  }
}

export default WifiDataSource;
