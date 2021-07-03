import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconContainer}>
              <FeatherIcon name="home" color={color} size={size} />
              <Text style={{ color, ...styles.labelStyle }}>HOME</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconContainer}>
              <FeatherIcon name="search" color={color} size={size} />
              <Text style={{ color, ...styles.labelStyle }}>FIND</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcon name="account" color={color} size={size} />
              <Text style={{ color, ...styles.labelStyle }}>ACCOUNT</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default Tabs;
