import React from 'react';
import {Image} from 'react-native';
import restaurant from '../../images/restaurant.png';

const RestaurentImage = props => {
  const {imageStyle, thumbUrl} = props;
  return (
    <Image
      style={imageStyle}
      source={
        thumbUrl
          ? {
              uri: thumbUrl,
            }
          : restaurant
      }
    />
  );
};

export default RestaurentImage;
