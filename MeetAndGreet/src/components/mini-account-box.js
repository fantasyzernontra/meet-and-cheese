import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Profile from '../assets/images/model.jpeg';

const MiniAccountBox = ({}) => {
  return (
    <View style={styles.container}>
      <Image source={Profile} resizeMode="cover" style={styles.profile} />
      <Text style={styles.username}>Panyot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 40,
    backgroundColor: '#00997b',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    borderRadius: 30,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  username: {
    fontFamily: 'NanumGothic',
    fontSize: 15,
    color: '#fff',
  },
});

export default MiniAccountBox;
