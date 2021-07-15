import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/account';
import PostScreen from '../screens/account/post';
import WorkDetailsScreen from '../screens/account/work';
import CreatingPost from '../screens/account/create-post';

const AccountScreenNavigator = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountScreenNavigator.Navigator headerMode="none">
      <AccountScreenNavigator.Screen name="Account" component={AccountScreen} />
      <AccountScreenNavigator.Screen name="Post" component={PostScreen} />
      <AccountScreenNavigator.Screen
        name="WorkDetails"
        component={WorkDetailsScreen}
      />
      <AccountScreenNavigator.Screen
        name="CreatingPost"
        component={CreatingPost}
      />
    </AccountScreenNavigator.Navigator>
  );
};

export default AccountNavigator;
