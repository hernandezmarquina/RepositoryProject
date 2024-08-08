import {IMovieMMKV, IMovieSource} from './types';
import {MMKV} from 'react-native-mmkv';

const MOVIES_KEY = 'movies';

class MMKVSource implements IMovieSource<IMovieMMKV[]> {
  storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  async getMovies(): Promise<IMovieMMKV[]> {
    const results = this.storage.getString(MOVIES_KEY);
    return results ? (JSON.parse(results) as IMovieMMKV[]) : [];
  }
  async saveMovies(movies: IMovieMMKV[]): Promise<void> {
    this.storage.set(MOVIES_KEY, JSON.stringify(movies));
  }
}

export default MMKVSource;
