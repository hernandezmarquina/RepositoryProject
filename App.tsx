import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NetInfoStateType, useNetInfo} from '@react-native-community/netinfo';
import MovieRepository from './src/repository/movie';
import {IMovieModel} from './src/types';
import MovieCard from './src/components/MovieCard';

const App = () => {
  const {type, isConnected} = useNetInfo();
  const [movies, setMovies] = useState<IMovieModel[]>([]);
  const [source, setSource] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getMovies = async (hasConnection: boolean, isWifi: boolean) => {
    // Create a new instance of the repository
    const repository = new MovieRepository(hasConnection, isWifi);
    setSource(repository.dataSource.sourceType);

    // Clear the list
    setMovies(() => []);
    // Show the loading indicator
    setLoading(() => true);
    // Simulate a delay of 1s
    setTimeout(async () => {
      const results = await repository.getMovieList();
      setMovies(results);
      // Hide the loading indicator
      setLoading(() => false);
    }, 1000);
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      getMovies(isConnected === true, type === NetInfoStateType.wifi);
    }, 1000); // 1s de debounce
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [type, isConnected]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.light} />
      <Text style={styles.title}>
        {source ? `Movies from: ${source}` : 'Loading...'}
      </Text>
      {source && loading && (
        <Text style={styles.subtitle}>{`Loading from ${source}...`}</Text>
      )}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default App;
