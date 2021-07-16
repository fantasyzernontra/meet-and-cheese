import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePickerModal from '../../components/hiring/date-picker';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import useForceRender from '../../utils/useForceRender';
import API from '../../api/path';

import { PRIMARY_COLOR, WHITE_TEXT_COLOR } from '../../constant';

const HiringIndex = ({ route, navigation, account_id }) => {
  const [photographerInfo, setPhotographerInfo] = useState({});
  const [workDescription, setWorkDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startWorkingDate, setStartWorkingDate] = useState(new Date());
  const [isStartWorkingDateVisible, setIsStartWorkingDateVisible] =
    useState(false);
  const [endWorkingDate, setEndWorkingDate] = useState(new Date());
  const [isEndWorkingDateVisible, setIsEndWorkingDateVisible] = useState(false);
  const [validated, setValidated] = useState(true);
  const [landingTime] = useState(new Date().getTime());
  const photographer_account_id = route.params.photographer_account_id;

  const onFill = (name, val) => {
    if (name === 'work-description') setWorkDescription(val);
    else if (name === 'location') setLocation(val);
  };

  const fetchPhotographer = async () => {
    const res = await API.photographer.getOnePhotographer(
      photographer_account_id,
    );
    if (res) setPhotographerInfo(res.data);
  };

  const onSendRequisition = async () => {};

  useEffect(() => {
    if (
      workDescription.length !== 0 &&
      location.length !== 0 &&
      startWorkingDate.getTime() !== landingTime &&
      endWorkingDate.getTime() !== landingTime
    )
      setValidated(false);
    else setValidated(true);
  }, [workDescription, location, startWorkingDate, endWorkingDate]);

  useEffect(() => fetchPhotographer(), []);

  useForceRender(navigation);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1622550105129-02c04a85a5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        }}
        style={styles.container}
        imageStyle={{ opacity: 0.4 }}
        resizeMode="cover">
        <View style={styles.back_container}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntdesignIcon name="left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Hiring{'\n'}
          {photographerInfo.name}
        </Text>
        <ScrollView
          showsVerticalScrollIndicator
          style={{ flex: 0.8, width: Dimensions.get('screen').width }}>
          <View style={styles.input_section}>
            <Text style={styles.label}>Work Description</Text>
            <TextInput
              autoCapitalize="sentences"
              style={{
                padding: 20,
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop: 15,
                flex: 1,
                height: 100,
                paddingTop: 20,
                alignItems: 'center',
              }}
              placeholder="Taking a photo"
              multiline={true}
              onChangeText={val => onFill('work-description', val)}
              value={workDescription}
            />
          </View>
          <View style={styles.input_section}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.input}
              placeholder="99, Bang Mod, Thung Kru, Thailand"
              onChangeText={val => onFill('location', val)}
              value={location}
            />
          </View>
          <View style={styles.input_section}>
            <Text style={styles.label}>Start Working Time</Text>
            <View style={styles.time_data}>
              <View style={styles.time_container}>
                <Text>{startWorkingDate.toLocaleString()}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.date_select_button}
                onPress={() => setIsStartWorkingDateVisible(true)}>
                <Text style={styles.date_select_label}>Select the time</Text>
              </TouchableOpacity>
            </View>
            <DatePickerModal
              label="Start Working Time"
              workingDate={startWorkingDate}
              setWorkingDate={setStartWorkingDate}
              isVisible={isStartWorkingDateVisible}
              onRequestClose={() => setIsStartWorkingDateVisible(false)}
            />
          </View>
          <View style={styles.input_section}>
            <Text style={styles.label}>End Working Time</Text>
            <View style={styles.time_data}>
              <View style={styles.time_container}>
                <Text>{endWorkingDate.toLocaleString()}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.date_select_button}
                onPress={() => setIsEndWorkingDateVisible(true)}>
                <Text style={styles.date_select_label}>Select the time</Text>
              </TouchableOpacity>
            </View>
            <DatePickerModal
              label="End Working Time"
              workingDate={endWorkingDate}
              setWorkingDate={setEndWorkingDate}
              isVisible={isEndWorkingDateVisible}
              onRequestClose={() => setIsEndWorkingDateVisible(false)}
            />
          </View>
        </ScrollView>
        <View style={{ flex: 0.2 }}>
          <TouchableOpacity
            disabled={validated}
            style={
              validated
                ? styles.inactive_submit_requisition_button
                : styles.active_submit_requisition_button
            }
            onPress={() => {}}>
            <Text style={styles.submit_requisition_label}>
              Send the requisition
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    fontFamily: 'NanumGothic',
    fontWeight: '700',
    fontSize: 36,
    color: PRIMARY_COLOR,
    alignSelf: 'flex-start',
  },
  input_section: {
    width: Dimensions.get('screen').width,
    padding: 20,
  },
  label: {
    fontFamily: 'NanumGothic',
    fontSize: 24,
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
  time_data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  time_container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  date_select_button: {
    backgroundColor: 'grey',
    padding: 13,
    borderRadius: 15,
  },
  date_select_label: {
    fontFamily: 'NanumGothic',
    color: WHITE_TEXT_COLOR,
  },
  back_container: {
    alignSelf: 'flex-start',
  },
  active_submit_requisition_button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 18,
    borderRadius: 15,
  },
  inactive_submit_requisition_button: {
    backgroundColor: 'grey',
    padding: 18,
    borderRadius: 18,
  },
  submit_requisition_label: {
    fontFamily: 'NanumGothic',
    color: WHITE_TEXT_COLOR,
  },
});

export default HiringIndex;
