import React, {StyleSheet, Text, View} from 'react-native';
import {IMovieModel} from '../types';

const MovieCard = (props: IMovieModel) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.year}>{props.year}</Text>
      <Text style={styles.actors}>{props.actors.join(', ')}</Text>
      <Text style={styles.rating}>{`Rating: ${props.rating}`}</Text>
      <Text style={styles.boxOffice}>{`Box Office: ${props.boxOffice}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 16,
  },
  actors: {
    fontSize: 14,
  },
  rating: {
    fontSize: 16,
  },
  boxOffice: {
    fontSize: 14,
  },
});

export default MovieCard;
