import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import { SECONDARY_COLOR, WHITE_TEXT_COLOR } from '../../constant';

const InfoPanel = ({ hiring, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <View style={styles.number_container}>
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
      <View style={styles.info_container}>
        <TouchableOpacity
          style={styles.view_hiring_button}
          onPress={() =>
            navigation.navigate('Hiring', { screen: 'HiringList' })
          }>
          <Text style={styles.view_hiring_label}>View Hiring</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: Dimensions.get('screen').width * 0.65,
    alignSelf: 'center',
    marginVertical: 20,
  },
  info_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  number_container: { flexDirection: 'row', alignItems: 'center' },
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
  view_hiring_button: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 12,
    padding: 14,
  },
  view_hiring_label: {
    fontFamily: 'NanumGothic',
    fontSize: 16,
    color: WHITE_TEXT_COLOR,
  },
});

export default InfoPanel;
