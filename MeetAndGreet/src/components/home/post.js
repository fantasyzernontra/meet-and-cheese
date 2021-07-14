import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BlurUtilitiesBar from './blur-utilities-bar';

import Photographer from '../../assets/images/photographer.jpeg';

const Post = ({ picture, name, id, user_type }) => {
  return (
    <View
      style={{
        ...styles.container,
      }}>
      <BlurUtilitiesBar />
      <ImageBackground
        style={styles.imageBackgroundContainer}
        source={Photographer}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 3,
          }}>
          <Image
            source={Photographer}
            resizeMode="cover"
            style={{ width: 35, height: 35, borderRadius: 25 }}
          />
          <Text style={styles.name}>John Doe</Text>
        </View>

        <View style={{ marginVertical: 3 }}>
          <Text style={styles.description} numberOfLines={2}>
            {'\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
        <View style={{ marginVertical: 3, flexDirection: 'row' }}>
          <Text style={styles.hashTag}>#photgrapher</Text>
          <Text style={styles.hashTag}>#noice</Text>
          <Text style={styles.hashTag}>#ilovechonlameth</Text>
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
    shadowOpacity: 0.25,
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
