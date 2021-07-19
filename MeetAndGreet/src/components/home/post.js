import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BlurUtilitiesBar from './blur-utilities-bar';

import PUBLIC_API from '../../data/public-api';
import API from '../../api/path';

const Post = ({ picture, name, photographer_id, captions, navigation }) => {
  const [photographer, setPhotographer] = useState({});

  const getPhotographer = async () => {
    const res = await API.photographer.getOnePhotographer(photographer_id);
    if (res) setPhotographer(res.data);
  };

  useEffect(() => getPhotographer(), []);

  return (
    <View style={styles.container}>
      <BlurUtilitiesBar
        navigation={navigation}
        photographer_account_id={photographer.id}
      />
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={{
          uri: PUBLIC_API + picture.url.replace('gs://', ''),
        }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 3,
          }}>
          {photographer.avatar && (
            <Image
              source={{
                uri: PUBLIC_API + photographer.avatar.url.replace('gs://', ''),
              }}
              resizeMode="cover"
              style={{ width: 35, height: 35, borderRadius: 25 }}
            />
          )}
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={{ marginVertical: 3 }}>
          <Text style={styles.description} numberOfLines={2}>
            {captions}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.85,
    flex: 1,
    height: 500,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
    margin: 20,
    borderRadius: 30,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'NanumGothic',
    color: '#fff',
    elevation: 10,
    marginHorizontal: 10,
  },
  imageBackgroundContainer: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
  },
  description: {
    color: '#fff',
    fontFamily: 'NanumGothic',
  },
  hashTag: {
    color: 'lime',
    marginRight: 2,
  },
  toolContainer: {
    position: 'absolute',
    height: '70%',
    width: '27%',
    alignSelf: 'center',
    borderRadius: 20,
    top: 40,
    right: -14,
    zIndex: 1,
    padding: 20,
    flexDirection: 'column',
  },
});

export default Post;
