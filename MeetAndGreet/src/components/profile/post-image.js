import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import PUBLIC_API from '../../data/public-api';

const PostImage = ({ img, navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: PUBLIC_API + img.replace('gs://', ''),
        }}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <TouchableOpacity
          style={{
            width: '20%',
            height: '15%',
          }}
          onPress={() => navigation.goBack()}>
          <FontistoIcon
            name="angle-left"
            color="#000"
            size={20}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.55,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 5,
    margin: 2,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  iconStyle: {
    left: 25,
    top: 25,
  },
});
export default PostImage;
