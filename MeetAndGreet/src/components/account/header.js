import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const Header = ({ navigation, name }) => {
  return (
    <View style={styles.menu_container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontistoIcon name="angle-left" color="#000" size={20} />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menu_container: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  name: {
    width: Dimensions.get('screen').width * 0.9,
    textAlign: 'center',
    fontFamily: 'NanumGothic',
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
});

export default Header;
