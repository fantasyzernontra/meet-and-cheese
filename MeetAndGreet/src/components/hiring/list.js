import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { SECONDARY_COLOR } from '../../constant';

const List = ({
  needTopBorder,
  navigation,
  hiring_id,
  work_description,
  hirer_name,
  start_date,
  end_date,
}) => {
  return (
    <View
      style={{
        borderTopWidth: needTopBorder ? 1 : 0,
        ...styles.container,
      }}>
      <View style={styles.text_container}>
        <Text style={styles.hirer}>{hirer_name}</Text>
        <Text style={styles.work_description} numberOfLines={2}>
          {work_description}
        </Text>
      </View>
      <View style={styles.time_container}>
        <Text style={styles.start_working_date}>
          {new Date(start_date).toLocaleDateString()}
        </Text>
        <AntDesignIcon name="arrowdown" color={SECONDARY_COLOR} size={20} />
        <Text style={styles.end_working_date}>
          {new Date(end_date).toLocaleDateString()}
        </Text>
      </View>
      <TouchableOpacity
        style={{ alignSelf: 'center' }}
        activeOpacity={0.2}
        onPress={() => {
          navigation.navigate('HiringDetails', { hiring_id });
        }}>
        <AntDesignIcon name="right" color="#000" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#000',
    height: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_container: {
    flexDirection: 'column',
    width: '60%',
  },
  hirer: {
    fontFamily: 'NanumGothic',
    fontSize: 20,
    color: SECONDARY_COLOR,
  },
  work_description: {
    fontFamily: 'NanumGothic',
    fontSize: 15,
    marginTop: 10,
  },
  time_container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
  },
  start_working_date: {
    fontFamily: 'NanumGothic',
  },
  end_working_date: {
    fontFamily: 'NanumGothic',
  },
});

export default List;
