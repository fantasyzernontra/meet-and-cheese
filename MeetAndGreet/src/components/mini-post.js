import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Model from '../assets/images/model.jpeg';

const Label = ({ like }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{like}</Text>
    </View>
  );
};

const MiniPost = ({ img, like, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('ProfilePost', {})}>
      <ImageBackground
        source={Model}
        style={styles.imageBackground}
        imageStyle={styles.imageBackgroundStyle}>
        <Label like={100} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.3,
    height: 180,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 2,
    borderRadius: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageBackgroundStyle: {
    borderRadius: 20,
  },
  labelContainer: {
    width: 80,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 15,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'NanumGothic',
    fontWeight: '600',
  },
});

export default MiniPost;
