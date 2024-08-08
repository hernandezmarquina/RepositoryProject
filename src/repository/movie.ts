import LocalDataSource from '../dataSource/local';
import RedDataSource from '../dataSource/red';
import {IDataSourceType, IMovieDataSource} from '../dataSource/types';
import WifiDataSource from '../dataSource/wifi';
import {IMovieModel} from '../types';
import {IMovieRepository, MovieMapper} from './types';

class MovieRepository implements IMovieRepository {
  dataSource: IMovieDataSource<any>;
  constructor(isConnected: boolean, isWifi: boolean) {
    if (isConnected) {
      this.dataSource = isWifi ? new WifiDataSource() : new RedDataSource();
    } else {
      this.dataSource = new LocalDataSource();
    }
  }
  async getMovieList(): Promise<IMovieModel[]> {
    const data = await this.dataSource.getMovies();
    if (this.dataSource.sourceType === IDataSourceType.LOCAL) {
      return MovieMapper.fromMMKV(data);
    } else {
      const localSource = new LocalDataSource();
      localSource.saveMovies(MovieMapper.toMMKV(data));
      if (this.dataSource.sourceType === IDataSourceType.RED) {
        return MovieMapper.fromBeeceptor(data);
      }
      return MovieMapper.fromFreetestapi(data);
    }
  }
}

export default MovieRepository;
