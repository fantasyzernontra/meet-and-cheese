import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HiringScreen from '../screens/hiring';
import HiringListScreen from '../screens/hiring/hiring-list';
import HiringDetailsScreen from '../screens/hiring/hiring-details';

const HiringStackNavigator = createStackNavigator();

const HiringNavigator = () => {
  return (
    <HiringStackNavigator.Navigator headerMode="none">
      <HiringStackNavigator.Screen name="Hiring" component={HiringScreen} />
      <HiringStackNavigator.Screen
        name="HiringList"
        component={HiringListScreen}
      />
      <HiringStackNavigator.Screen
        name="HiringDetails"
        component={HiringDetailsScreen}
      />
    </HiringStackNavigator.Navigator>
  );
};

export default HiringNavigator;
