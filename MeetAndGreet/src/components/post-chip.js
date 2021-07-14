import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const PostChip = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}># {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    marginVertical: 20,
    marginRight: 10,
    backgroundColor: '#61C2A2',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    margin: 2,
    borderRadius: 20,
  },
  label: {
    fontFamily: 'NanumGothic',
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});

export default PostChip;
