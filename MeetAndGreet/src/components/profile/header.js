import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileHeader = ({ name, navigation, onSignOut }) => {
  return (
    <View style={styles.menu_container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontistoIcon name="angle-left" color="#000" size={20} />
      </TouchableOpacity>
      <Text style={styles.name}>Jenny Wilson</Text>
      <TouchableOpacity
        onPress={onSignOut}
        style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name="logout" color="#000" size={20} />
        <Text style={{ fontFamily: 'NanumGothic', marginLeft: 5 }}>
          Log Out
        </Text>
      </TouchableOpacity>
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
  },
  name: {
    fontFamily: 'NanumGothic',
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
});

export default ProfileHeader;
