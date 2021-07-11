import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignUp;
