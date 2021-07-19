import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import PUBLIC_API from '../data/public-api';

const Label = ({ like }) => {
  return (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{like}</Text>
    </View>
  );
};

const MiniPost = ({ img, like, navigation, isSelf, post_id }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => {
        if (isSelf) navigation.navigate('ProfilePost', { post_id });
        else navigation.navigate('Post', { post_id });
      }}>
      <ImageBackground
        source={{
          uri: PUBLIC_API + img.replace('gs://', ''),
        }}
        style={styles.imageBackground}
        imageStyle={styles.imageBackgroundStyle}></ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.31,
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
    margin: 4,
    borderRadius: 30,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageBackgroundStyle: {
    borderRadius: 30,
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
