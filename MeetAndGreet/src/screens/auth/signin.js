import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/core';
import API from '../../api/path';

import { PRIMARY_COLOR } from '../../constant';

import Photographer from '../../assets/images/photographer.jpeg';

const SignIn = ({}) => {
  const navigation = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [pending, setPending] = useState(false);

  const onLogin = async () => {
    setPending(true);
    await API.profile
      .login(email, password)
      .then(res => navigation.navigate('Home'))
      .catch(err =>
        setAlertMessage('Email or Password is incorrect. Please try again...'),
      );
    setPending(false);
  };

  if (pending)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={PRIMARY_COLOR} size="large" />
      </View>
    );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ImageBackground
        source={Photographer}
        style={styles.content_container}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.3,
        }}>
        <TouchableOpacity
          style={styles.back_container}
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <AntdesignIcon name="left" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Meet And Cheese</Text>
        <View style={styles.inputSection}>
          <MaterialCommunityIcon
            name="email"
            color="#c9c9c9"
            size={25}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 10,
              justifyContent: 'flex-start',
            }}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            selectionColor="#64bfa4"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={onChangeEmail}
            value={email}
          />
        </View>
        <View style={styles.inputSection}>
          <MaterialCommunityIcon
            name="lock"
            color="#c9c9c9"
            size={25}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 10,
              justifyContent: 'flex-start',
            }}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            selectionColor="#64bfa4"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            onChangeText={onChangePassword}
          />
          <MaterialIcon
            name={showPassword ? 'visibility' : 'visibility-off'}
            color="#c9c9c9"
            size={25}
            style={{
              position: 'absolute',
              zIndex: 1,
              right: 12,
              bottom: 12,
              justifyContent: 'flex-end',
            }}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <Text style={styles.alert_message}>{alertMessage}</Text>
        <TouchableOpacity
          style={styles.signin_button}
          activeOpacity={0.6}
          onPress={onLogin}>
          <Text style={styles.signin_text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signup_container}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signup_text}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  content_container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  back_container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back_text: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    color: '#fff',
  },
  title: {
    fontFamily: 'NanumGothic',
    color: '#E3ECFF',
    fontSize: 50,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 50,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    paddingLeft: 40,
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    fontFamily: 'NanumGothic',
  },
  signin_button: {
    width: '100%',
    height: 48,
    borderRadius: 20,
    backgroundColor: '#64bfa4',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin_text: {
    fontFamily: 'NanumGothic',
    color: '#E3ECFF',
    fontSize: 16,
    fontWeight: '500',
  },
  signup_container: {
    marginVertical: 30,
  },
  signup_text: {
    fontFamily: 'NanumGothic',
    color: '#E3ECFF',
    textDecorationStyle: 'double',
    textDecorationLine: 'underline',
  },
  alert_message: {
    fontFamily: 'NanumGothic',
    color: '#FF7F7F',
  },
});

export default SignIn;
