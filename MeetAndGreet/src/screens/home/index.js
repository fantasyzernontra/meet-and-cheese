import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import usePaddingBottom from '../../utils/usePaddingBottom';
import useForceRender from '../../utils/useForceRender';

import Post from '../../components/home/post';
import MiniAccountBox from '../../components/mini-account-box';

const Index = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  useForceRender(navigation);

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
        {/* Menu */}
        <View style={styles.menu_container}>
          <Text style={styles.title}>Meet And Cheese</Text>
          <MiniAccountBox navigation={navigation} />
        </View>

        {/* Post */}
        {[...Array(2)].map((_, index) => (
          <Post key={index} />
        ))}

        {/* Padding Bottom */}
        {usePaddingBottom(tabBarHeight)}
      </ScrollView>
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
  title: {
    fontFamily: 'NanumGothic',
    fontSize: 20,
    color: '#00997b',
  },
});

export default Index;
