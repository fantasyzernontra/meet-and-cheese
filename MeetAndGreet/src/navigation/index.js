import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { MMKV } from 'react-native-mmkv';

import HomeScreen from '../screens/home';
import DiscoverScreen from '../screens/discover';

import AuthNavigator from './auth-navigator';
import ProfileNavigator from './profile-navigator';
import AccountNavigator from './account-navigator';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SECONDARY_COLOR } from '../constant';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const isAuth = MMKV.getString('token');

const Tabs = ({ route, navigation }) => {
  const [selectedScreen, setSelectedScreen] = useState('Home');
  const focused = getFocusedRouteNameFromRoute(route);

  useEffect(() => {
    setSelectedScreen(focused);
  }, [route]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      tabBarOptions={{
        activeTintColor: SECONDARY_COLOR,
        inactiveTintColor: '#000',
        showLabel: false,
        style: {
          opacity: 0.85,
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: selectedScreen !== 'Profile' ? 25 : 0,
          left: 40,
          right: 40,
          elevation: 0,
          borderRadius: 30,
          height: 75,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={
                focused ? styles.activeIconContainer : styles.iconContainer
              }>
              <FeatherIcon name="home" color={color} size={20} />
              <Text style={{ color, ...styles.labelStyle }}>HOME</Text>
            </View>
          ),
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={
                focused ? styles.activeIconContainer : styles.iconContainer
              }>
              <FeatherIcon name="compass" color={color} size={20} />
              <Text style={{ color, ...styles.labelStyle }}>DISCOVER</Text>
            </View>
          ),
          tabBarVisible: true,
        }}
      />
      <Tab.Screen
        name="FakeProfile"
        component={AuthNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate(isAuth ? 'Profile' : 'Auth')
                }>
                <View
                  style={
                    focused ? styles.activeIconContainer : styles.iconContainer
                  }>
                  <MaterialCommunityIcon
                    name="account"
                    color={color}
                    size={20}
                  />
                  <Text style={{ color, ...styles.labelStyle }}>PROFILE</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          },
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Home" component={Tabs} />
      <RootStack.Screen name="Profile" component={ProfileNavigator} />
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen name="Account" component={AccountNavigator} />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: 70,
    padding: 10,
  },
  activeIconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 60,
    padding: 10,
    borderRadius: 20,
    width: 70,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.8,
    elevation: 5,
  },
  labelStyle: {
    fontSize: 10,
    fontFamily: 'NanumGothic',
    fontWeight: '500',
  },
});

export default RootStackNavigator;
