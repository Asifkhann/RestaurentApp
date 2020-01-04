import React from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';

const RestaurentLink = props => {
  const {title, des, linkUrl} = props;

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.listTitle}>{title}</Text>
      <Text style={styles.listLink} onPress={() => Linking.openURL(linkUrl)}>
        {des}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  listTitle: {
    fontWeight: 'bold',
    marginRight: 20,
    fontSize: 18,
  },
  listLink: {
    color: 'blue',
    fontSize: 18,
  },
});

export default RestaurentLink;
