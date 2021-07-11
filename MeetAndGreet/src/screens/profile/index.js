import React from 'react';
import { View, Button } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
