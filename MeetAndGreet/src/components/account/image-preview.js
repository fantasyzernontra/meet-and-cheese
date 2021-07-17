import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ImagePreview = ({ img, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        flex: 0.4,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 3,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}>
      <Image
        source={{
          uri: img.uri,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 30,
        }}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export default ImagePreview;
