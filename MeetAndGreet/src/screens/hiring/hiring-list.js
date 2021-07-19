import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import List from '../../components/hiring/list';

import API from '../../api/path';
import { MMKV } from 'react-native-mmkv';

import { SECONDARY_COLOR } from '../../constant';

const HiringList = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const user_id = MMKV.getString('user_id');
  const [hiring_lists, setHiringLists] = useState([]);

  const fetchAllHiringList = async () => {
    const res = await API.hiring_contracts.getAllHiring(user_id);
    if (res) setHiringLists(res.data);
  };

  useEffect(() => fetchAllHiringList(), []);

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
            activeOpacity={0.2}
            style={{
              position: 'absolute',
              left: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntdesignIcon name="left" color="#000" size={25} />
          </TouchableOpacity>
          <Text style={styles.title}>Hiring Lists</Text>
        </View>
        <View style={styles.list_container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={hiring_lists}
            renderItem={({ item, index }) => {
              if (index === 0 || index === hiring_lists.length - 1)
                return (
                  <List
                    needTopBorder
                    navigation={navigation}
                    hiring_id={item.id}
                    hirer_name={item.hirer.username}
                    work_description={item.work_description}
                    start_date={item.start_date}
                    end_date={item.end_date}
                  />
                );
              else
                return (
                  <List
                    navigation={navigation}
                    hiring_id={item.id}
                    hirer_name={item.hirer.username}
                    work_description={item.work_description}
                    start_date={item.start_date}
                    end_date={item.end_date}
                  />
                );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
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
  container: { flex: 1, width: '100%' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
  },
  title: {
    fontFamily: 'NanumGothic',
    color: SECONDARY_COLOR,
    fontSize: 36,
    alignSelf: 'center',
  },
  list_container: {
    paddingTop: 30,
    flex: 0.7,
  },
});

export default HiringList;
