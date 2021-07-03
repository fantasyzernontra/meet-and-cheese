import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Index = ({}) => {
  const insets = useSafeAreaInsets();

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
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerHeader}>Welcome!</Text>
          <Text style={styles.bannerSubHeader}>FIRSTNAME LASTNAME</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = {};

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, alignItems: 'center' },
  container: { flex: 1, width: '100%', padding: 20 },
  bannerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    height: 120,
    backgroundColor: '#DADDCD',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  bannerHeader: {
    textAlign: 'right',
    fontSize: 36,
    fontFamily: 'NanumGothic-Bold',
  },
  bannerSubHeader: {
    textAlign: 'right',
    fontSize: 18,
  },
});

export default Index;
