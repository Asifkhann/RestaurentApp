import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RestaurentAddress = props => {
  const {address} = props;

  return (
    <View style={styles.mainWrapper}>
      <Icon name="map-marker-alt" size={25} />
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 5,
  },
  address: {
    fontSize: 16,
    lineHeight: 18,
    flex: 1,
    paddingLeft: 10,
  },
});

export default RestaurentAddress;
