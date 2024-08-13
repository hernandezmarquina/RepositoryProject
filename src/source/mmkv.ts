import {IMovieMMKV, IMovieSource} from './types';
import {MMKV} from 'react-native-mmkv';

class MMKVSource implements IMovieSource<IMovieMMKV[]> {
  storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  async getMovies(): Promise<IMovieMMKV[]> {
    const results = this.storage.getString('movies');
    return results ? (JSON.parse(results) as IMovieMMKV[]) : [];
  }
  async saveMovies(movies: IMovieMMKV[]): Promise<void> {
    this.storage.set('movies', JSON.stringify(movies));
  }
}

export default MMKVSource;
