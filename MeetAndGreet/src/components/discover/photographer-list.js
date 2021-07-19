import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import PUBLIC_API from '../../data/public-api';
import { WHITE_TEXT_COLOR } from '../../constant';

import Photographer from '../../assets/images/photographer.jpeg';

const PhotographerList = ({
  photographer_account_id,
  navigation,
  pic,
  username,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Account', {
          screen: 'Account',
          params: { photographer_account_id },
        })
      }>
      {pic && (
        <Image
          source={{
            uri: PUBLIC_API + pic.replace('gs://', ''),
          }}
          resizeMode="cover"
          style={{ width: '30%', height: '100%', borderRadius: 50 }}
        />
      )}
      <View stlye={styles.label_container}>
        <Text style={styles.username_label}>@{username}</Text>
      </View>
      <AntDesignIcon name="right" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: WHITE_TEXT_COLOR,
    height: 100,
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label_container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  username_label: {
    fontFamily: 'NanumGothic',
    fontSize: 16,
  },
});

export default PhotographerList;
