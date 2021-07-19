import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { SOFT_GREEN_COLOR } from '../../constant';

const ImageSelection = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <FeatherIcon name="image" size={40} />
      <Text style={styles.label}>Select the image</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: SOFT_GREEN_COLOR,
    flex: 0.4,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontFamily: 'NanumGothic',
  },
});

export default ImageSelection;
