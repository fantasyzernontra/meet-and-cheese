import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/profile';
import Post from '../screens/profile/post';

const ProfileStackNavigator = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator headerMode="none">
      <ProfileStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <ProfileStackNavigator.Screen name="ProfilePost" component={Post} />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileNavigator;
