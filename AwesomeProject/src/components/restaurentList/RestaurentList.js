import React from 'react';
import {Text} from 'react-native';

const RestaurentList = props => {
  const {data, title, listStyle} = props;

  return (
    <Text style={listStyle}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>
      {data}
    </Text>
  );
};

export default RestaurentList;
