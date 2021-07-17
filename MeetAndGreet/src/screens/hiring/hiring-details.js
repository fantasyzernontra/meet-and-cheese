import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HorizontalLine from '../../components/hiring/horizontal-line';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import API from '../../api/path';

import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constant';

const HiringDetails = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const hiring_id = route.params.hiring_id;
  const [hiring_detail, setHiringDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchHiringDetail = async () => {
    const res = await API.hiring_contracts.getOneHiring(hiring_id);
    if (res) setHiringDetail(res.data);
    setLoading(false);
  };

  useEffect(() => fetchHiringDetail(), []);

  if (loading)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={PRIMARY_COLOR} size="large" />
      </View>
    );

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              bottom: 40,
              left: 20,
              position: 'absolute',
            }}>
            <AntDesignIcon name="left" color="#000" size={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Hiring Details</Text>
        </View>
        <View style={styles.hirer_container}>
          <Text style={styles.hirer_title}>Hirer Info.</Text>
          <Text style={styles.hirer_name}>
            Name: {hiring_detail.hirer.name}
          </Text>
          <Text style={styles.hirer_email}>
            Email: {hiring_detail.hirer.email}
          </Text>
          <HorizontalLine />
        </View>
        <View style={styles.work_description_container}>
          <Text style={styles.work_description_title}>Work Description</Text>
          <Text style={styles.description}>
            {hiring_detail.work_description}
          </Text>
          <HorizontalLine />
        </View>
        <View style={styles.location_container}>
          <Text style={styles.location_title}>Working Location</Text>
          <Text style={styles.location}>{hiring_detail.location}</Text>
          <HorizontalLine />
        </View>
        <View style={styles.working_time_container}>
          <Text style={styles.working_time_title}>Working Time</Text>
          <View style={styles.start_working_time_container}>
            <Text style={styles.start_working_date}>Start Working Date:</Text>
            <Text style={styles.start_working_time}>
              {new Date(hiring_detail.start_date).toDateString()},
              {new Date(hiring_detail.start_date).toLocaleTimeString()}
            </Text>
          </View>
          <View style={styles.end_working_time_container}>
            <Text style={styles.end_working_date}>End Working Date: </Text>
            <Text style={styles.end_working_time}>
              {new Date(hiring_detail.end_date).toDateString()},
              {new Date(hiring_detail.end_date).toLocaleTimeString()}
            </Text>
          </View>
          <HorizontalLine />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'NanumGothic',
    fontSize: 36,
    fontWeight: '500',
    color: SECONDARY_COLOR,
    left: 5,
    marginBottom: 35,
    textAlign: 'center',
  },
  hirer_container: {
    paddingHorizontal: 30,
  },
  hirer_title: {
    fontFamily: 'NanumGothic',
    fontSize: 17,
  },
  hirer_name: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    marginTop: 10,
    left: 20,
  },
  hirer_email: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    marginTop: 5,
    left: 20,
  },
  location_container: {
    paddingHorizontal: 30,
  },
  location_title: {
    fontFamily: 'NanumGothic',
    fontSize: 17,
  },
  location: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    marginTop: 10,
    left: 20,
  },
  working_time_container: {
    paddingHorizontal: 30,
  },
  working_time_title: {
    fontFamily: 'NanumGothic',
    fontSize: 17,
  },
  start_working_time_container: {
    marginTop: 10,
    left: 20,
  },
  start_working_date: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
  },
  start_working_time: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    left: 10,
  },
  end_working_time_container: {
    marginTop: 10,
    left: 20,
  },
  end_working_date: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
  },
  end_working_time: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    left: 10,
  },
  work_description_container: {
    paddingHorizontal: 30,
  },
  work_description_title: {
    fontFamily: 'NanumGothic',
    fontSize: 17,
  },
  description: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    left: 20,
    marginTop: 10,
  },
});

export default HiringDetails;
