import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen, {
  screenOptions as HomeScreenOptions,
} from '../screens/home';

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator headerMode="none">
      <HomeStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreenOptions}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;
