import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RestaurentDes = props => {
  const {name, cost, rating, cuisines} = props;

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.heading}>{name}</Text>
      <Text>{`Rs.${cost} & ${rating}`}</Text>
      <Text>{cuisines}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    fontSize: 18,
  },
});

export default RestaurentDes;
