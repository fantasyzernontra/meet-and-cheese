import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import usePaddingBottom from '../../utils/usePaddingBottom';

import AccountBox from '../../components/home/ account-box';
import MiniAccountBox from '../../components/mini-account-box';

const Index = ({}) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.menu_container}>
          <Text>Yo</Text>
          <MiniAccountBox />
        </View>
        <Text style={styles.subHeader}>Popular Photographer</Text>
        {[...Array(2)].map((_, index) => (
          <AccountBox key={index} />
        ))}
        {/* Popular Model */}

        {usePaddingBottom(tabBarHeight)}
      </ScrollView>
    </SafeAreaView>
  );
};

export const screenOptions = {};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: { flex: 1, width: '100%' },
  menu_container: {
    width: Dimensions.get('screen').width * 0.9,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subHeader: {
    fontFamily: 'NanumGothic',
    fontSize: 18,
    width: Dimensions.get('screen').width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: '400',
  },
});

export default Index;
