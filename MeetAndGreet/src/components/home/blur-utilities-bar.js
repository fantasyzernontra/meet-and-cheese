import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import blurUtilitiesTools from '../../data/blur-utilities-tools';

const BlurUtilitiesBar = ({
  onFav,
  onOpenComment,
  onSave,
  onForward,
  fav,
  comments,
}) => {
  return (
    <BlurView blurRadius={1} blurType="light" style={styles.toolContainer}>
      {blurUtilitiesTools.map((item, index) => {
        return (
          <TouchableOpacity onPress={() => console.log('Hi')} key={index}>
            <View>
              <BlurView
                blurRadius={1}
                blurType="light"
                style={styles.button_container}>
                {item.icon_provider === 'antdesign' && (
                  <AntDesignIcon name={item.icon_name} size={23} color="#fff" />
                )}
                {item.icon_provider === 'feather' && (
                  <FeatherIcon name={item.icon_name} size={23} color="#fff" />
                )}
                {item.icon_provider === 'fontawesome' && (
                  <FontAwesomeIcon
                    name={item.icon_name}
                    size={22}
                    color="#fff"
                  />
                )}
              </BlurView>
              {item.icon_name === 'paper-plane' && (
                <Text style={styles.text}>Forward</Text>
              )}
              {item.icon_name === 'bookmark' && (
                <Text style={styles.text}>Save</Text>
              )}
              {item.icon_name === 'heart' && (
                <Text style={styles.text}>1.2K</Text>
              )}
              {item.icon_name === 'message1' && (
                <Text style={styles.text}>50</Text>
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
    height: '70%',
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
