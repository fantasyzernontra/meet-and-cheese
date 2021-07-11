import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/auth/signin';
import SignUpScreen from '../screens/auth/signup';

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator headerMode="none" initialRouteName="Login">
      <AuthStackNavigator.Screen name="Login" component={SignInScreen} />
      <AuthStackNavigator.Screen name="SignUp" component={SignUpScreen} />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
