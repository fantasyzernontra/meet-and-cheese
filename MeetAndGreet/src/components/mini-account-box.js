import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import { MMKV } from 'react-native-mmkv';

import Profile from '../assets/images/model.jpeg';

const MiniAccountBox = ({ navigation }) => {
  const isAuth = MMKV.getString('token');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        isAuth ? navigation.navigate('Profile') : navigation.navigate('Auth')
      }>
      {!isAuth && (
        <AntdesignIcon
          name="login"
          size={22}
          color="#000"
          style={{ alignContent: 'flex-start' }}
        />
      )}
      {isAuth && (
        <Image source={Profile} resizeMode="cover" style={styles.profile} />
      )}
      <Text style={styles.username}>{isAuth ? 'Panyot' : 'Sign In'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 40,
    backgroundColor: '#eee',
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
    fontSize: 16,
    color: '#000',
  },
});

export default MiniAccountBox;
