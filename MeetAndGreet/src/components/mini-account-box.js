import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import { MMKV } from 'react-native-mmkv';
import publicApi from '../data/public-api';

const MiniAccountBox = ({ navigation }) => {
  const isAuth = MMKV.getString('token');
  const username = MMKV.getString('username');
  const avatar = MMKV.getString('avatar');

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
      {isAuth && avatar && (
        <Image
          source={{
            uri: publicApi + avatar.replace('gs://', ''),
          }}
          resizeMode="cover"
          style={styles.profile}
        />
      )}
      <Text style={styles.username} numberOfLines={1}>
        {isAuth ? username : 'Sign In'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
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
    fontSize: 11,
    color: '#000',
  },
});

export default MiniAccountBox;
