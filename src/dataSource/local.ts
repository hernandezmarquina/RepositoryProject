import MMKVSource from '../source/mmkv';
import {IMovieMMKV} from '../source/types';
import {IDataSourceType, IMovieDataSource} from './types';

class LocalDataSource implements IMovieDataSource<IMovieMMKV> {
  sourceType: IDataSourceType;
  source: MMKVSource;
  constructor() {
    this.sourceType = IDataSourceType.LOCAL;
    this.source = new MMKVSource();
  }
  async getMovies() {
    return this.source.getMovies();
  }
  async saveMovies(movies: IMovieMMKV[]): Promise<void> {
    return this.source.saveMovies(movies);
  }
}

export default LocalDataSource;
