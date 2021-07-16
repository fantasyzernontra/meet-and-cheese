import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Photographer from '../../assets/images/photographer.jpeg';

const Picture = ({ navigation, PostID }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Account', { PostID: '', screen: 'Post' })
      }>
      <View style={styles.container}>
        <Image
          source={Photographer}
          // source={{ uri: '' }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.33,
    height: 100,
    margin: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Picture;
