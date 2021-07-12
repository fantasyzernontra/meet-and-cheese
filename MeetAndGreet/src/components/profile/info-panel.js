import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InfoPanel = ({ following, followers, like }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <View style={styles.number_container}>
          <Text style={styles.number}>29</Text>
          <MaterialIcons
            name="connect-without-contact"
            color="#0DA2FF"
            size={20}
            style={{ bottom: 5 }}
          />
        </View>
        <Text style={styles.text}>Hiring</Text>
      </View>
      <View style={styles.info_container}>
        <View style={styles.number_container}>
          <Text style={styles.number}>4.5</Text>
          <AntdesignIcon
            name="star"
            color="#FCD12A"
            size={20}
            style={{ bottom: 5 }}
          />
        </View>
        <Text style={styles.text}>Rating</Text>
      </View>
      <View style={styles.info_container}>
        <View style={styles.number_container}>
          <Text style={styles.number}>29</Text>
          <AntdesignIcon
            name="like1"
            color="#4FA64F"
            size={20}
            style={{ bottom: 5 }}
          />
        </View>
        <Text style={styles.text}>Likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default InfoPanel;
