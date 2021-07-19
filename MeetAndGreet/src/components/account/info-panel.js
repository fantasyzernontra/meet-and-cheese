import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { PRIMARY_COLOR } from '../../constant/index';

const InfoPanel = ({ navigation, photographer_account_id, hiring }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container1}>
        <View style={styles.number_container1}>
          <Text style={styles.number}>{hiring}</Text>
          <AntdesignIcon
            name="team"
            color="#0DA2FF"
            size={20}
            style={{ bottom: 5 }}
          />
        </View>
        <Text style={styles.text}>Hiring</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate('Hiring', {
            screen: 'Hiring',
            params: { photographer_account_id },
          })
        }>
        <BlurView
          blurType="thickMaterialLight"
          blurRadius={1}
          style={styles.info_container2}>
          <View style={styles.number_container2}>
            <Entypo name="paper-plane" color={PRIMARY_COLOR} size={25} />
          </View>
        </BlurView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: Dimensions.get('screen').width * 0.5,
    alignSelf: 'center',
    marginVertical: 20,
  },
  info_container1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  number_container1: { flexDirection: 'row', alignItems: 'center' },
  info_container2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  number_container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: 'NanumGothic',
    fontWeight: '900',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'NanumGothic',
    fontWeight: '700',
    fontSize: 14,
    color: '#808080',
  },
});

export default InfoPanel;
