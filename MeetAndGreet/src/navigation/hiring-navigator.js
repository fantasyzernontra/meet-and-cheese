import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HiringScreen from '../screens/hiring';

const HiringStackNavigator = createStackNavigator();

const HiringNavigator = () => {
  return (
    <HiringStackNavigator.Navigator headerMode="none">
      <HiringStackNavigator.Screen name="Hiring" component={HiringScreen} />
    </HiringStackNavigator.Navigator>
  );
};

export default HiringNavigator;
