import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import usePaddingBottom from '../../utils/usePaddingBottom';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import Picture from '../../components/discover/picture';

const Discover = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const bottomNavHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        ...styles.safeAreaContainer,
      }}>
      <TextInput
        style={styles.input}
        selectionColor="#64bfa4"
        placeholder="Search a photographer"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1,
        ]}
        renderItem={item => <Picture navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        style={{ width: '100%', marginTop: 20 }}
        ListFooterComponent={usePaddingBottom(bottomNavHeight + 10)}
      />
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
  input: {
    backgroundColor: '#eee',
    width: '90%',
    padding: 15,
    borderRadius: 20,
    fontFamily: 'NanumGothic',
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

export default Discover;
