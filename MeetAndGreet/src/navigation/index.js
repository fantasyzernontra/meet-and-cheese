import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './home-navigator';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: '#046307',
        inactiveTintColor: '#000',
        showLabel: false,
        style: {
          backgroundColor: '#e3e3e3',
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
      lazy={true}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
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
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
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
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={
                focused ? styles.activeIconContainer : styles.iconContainer
              }>
              <MaterialCommunityIcon name="account" color={color} size={20} />
              <Text style={{ color, ...styles.labelStyle }}>PROFILE</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
    width: 70,
    padding: 10,
  },
  activeIconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 65,
    padding: 10,
    borderRadius: 15,
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

export default Tabs;
