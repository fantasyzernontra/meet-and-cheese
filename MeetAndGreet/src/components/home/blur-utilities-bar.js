import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { MMKV } from 'react-native-mmkv';

import blurUtilitiesTools from '../../data/blur-utilities-tools';

const BlurUtilitiesBar = ({ photographer_account_id, navigation }) => {
  const user_type = MMKV.getString('user_type');

  return (
    <BlurView blurRadius={1} blurType="light" style={styles.toolContainer}>
      {blurUtilitiesTools.map((item, index) => {
        if (item.icon_name === 'team' && user_type === '2') return;
        else
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.icon_name === 'team')
                  navigation.navigate('Hiring', {
                    screen: 'Hiring',
                    params: { photographer_account_id },
                  });
                else if (item.icon_name === 'account')
                  navigation.navigate('Account', {
                    screen: 'Account',
                    params: { photographer_account_id },
                  });
              }}
              key={index}>
              <View>
                <BlurView
                  blurRadius={1}
                  blurType="light"
                  style={styles.button_container}>
                  {item.icon_provider === 'antdesign' && (
                    <AntDesignIcon
                      name={item.icon_name}
                      size={23}
                      color="#fff"
                    />
                  )}
                  {item.icon_provider === 'material_community' && (
                    <MaterialCommunityIcons
                      name={item.icon_name}
                      size={23}
                      color="#fff"
                    />
                  )}
                </BlurView>
                {item.icon_name === 'team' && (
                  <Text style={styles.text}>Hiring</Text>
                )}
                {item.icon_name === 'account' && (
                  <Text style={styles.text}>View Profile</Text>
                )}
              </View>
            </TouchableOpacity>
          );
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  toolContainer: {
    position: 'absolute',
    height: '40%',
    width: '30%',
    alignSelf: 'center',
    borderRadius: 20,
    top: 40,
    right: -20,
    zIndex: 1,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button_container: {
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginVertical: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'NanumGothic',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default BlurUtilitiesBar;
