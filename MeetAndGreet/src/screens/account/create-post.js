import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const CreatingPost = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default CreatingPost;
