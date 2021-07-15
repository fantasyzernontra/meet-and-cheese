import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';

import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import API from '../../api/path';

import StrapiRole from '../../data/strapi-role';
import UserType from '../../data/user_type';

import Photographer from '../../assets/images/photographer.jpeg';

import { SECONDARY_COLOR, WHITE_TEXT_COLOR, ERROR_COLOR } from '../../constant';

const SignUp = ({ navigation }) => {
  const [info, setInfo] = useState({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    role: {
      _id: StrapiRole.public,
    },
    biography: '',
    gender: 'M',
    user_type: {
      _id: UserType.user,
    },
  });
  const [errMessage, setErrMessage] = useState('');
  const [pending, setPending] = useState(false);
  const [validated, setValidated] = useState(true);

  const onFill = (name, value) => {
    setInfo({ ...info, [name]: value });
  };

  const onSignUp = async () => {
    setPending(true);
    const res = await API.profile.signup(info);
    if (res) {
      if (res.status === 200) navigation.navigate('Login');
      else if (res.response.status === 400)
        setErrMessage('Sign Up is insuccess. Please try again.');

      setPending(false);
    }
  };

  useEffect(() => {
    if (
      info.email.length !== 0 &&
      info.firstname.length !== 0 &&
      info.lastname.length !== 0 &&
      info.password.length !== 0 &&
      info.username.length !== 0
    )
      setValidated(false);
    else setValidated(true);
  }, [info]);

  if (pending)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="blue" size="large" />
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
            navigation.goBack();
          }}>
          <AntdesignIcon name="left" color="#fff" size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>Create{'\n'}an account</Text>
        <TouchableOpacity style={styles.have_an_account_container}>
          <Text
            style={styles.have_an_account}
            onPress={() => navigation.navigate('PhotographerSignup')}>
            Are you a photographer? Sign Up Here
          </Text>
        </TouchableOpacity>
        <BlurView
          blurRadius={1}
          blurType="light"
          style={styles.field_container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.input_label}>Email</Text>
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
                onChangeText={val => onFill('email', val)}
                value={info.email}
              />
            </View>
            <Text style={styles.input_label}>Username</Text>
            <View style={styles.inputSection}>
              <MaterialCommunityIcon
                name="account"
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
                placeholder="Username"
                style={styles.input}
                selectionColor="#64bfa4"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={val => onFill('username', val)}
                value={info.username}
              />
            </View>
            <Text style={styles.input_label}>Password</Text>
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
                autoCapitalize="none"
                onChangeText={val => onFill('password', val)}
                value={info.password}
              />
            </View>
            <Text style={styles.input_label}>First Name</Text>
            <View style={styles.inputSection}>
              <MaterialCommunityIcon
                name="comment-edit"
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
                placeholder="Firstname"
                style={styles.input}
                selectionColor="#64bfa4"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={val => onFill('firstname', val)}
                value={info.firstname}
              />
            </View>
            <Text style={styles.input_label}>Last Name</Text>
            <View style={styles.inputSection}>
              <MaterialCommunityIcon
                name="comment-edit"
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
                placeholder="Lastname"
                style={styles.input}
                selectionColor="#64bfa4"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={val => onFill('lastname', val)}
                value={info.lastname}
              />
            </View>
            <Text style={styles.err_message}>{errMessage}</Text>
            <TouchableOpacity
              disabled={validated}
              onPress={onSignUp}
              activeOpacity={0.8}>
              <View
                style={
                  validated
                    ? styles.inactive_signup_button
                    : styles.active_signup_button
                }>
                <Text style={styles.signup_text}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 150 }} />
          </ScrollView>
        </BlurView>
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
  title: {
    fontFamily: 'NanumGothic',
    color: WHITE_TEXT_COLOR,
    fontWeight: '500',
    fontSize: 42,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  have_an_account_container: {
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  have_an_account: {
    fontFamily: 'NanumGothic',
    textDecorationLine: 'underline',
    color: '#fff',
  },
  photographer_signup_container: {
    alignSelf: 'center',
    marginTop: 25,
  },
  photographer_signup: {
    fontFamily: 'NanumGothic',
    textDecorationLine: 'underline',
    color: '#fff',
  },
  field_container: {
    height: Dimensions.get('screen').height * 0.75,
    width: Dimensions.get('screen').width,
    bottom: -40,
    borderRadius: 30,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
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
  input_label: {
    fontFamily: 'NanumGothic',
    color: '#fff',
    width: Dimensions.get('screen').width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
  },
  active_signup_button: {
    width: '80%',
    height: 48,
    borderRadius: 20,
    backgroundColor: SECONDARY_COLOR,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inactive_signup_button: {
    width: '80%',
    height: 48,
    borderRadius: 20,
    backgroundColor: 'grey',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signup_text: {
    fontFamily: 'NanumGothic',
    color: WHITE_TEXT_COLOR,
    fontSize: 16,
    fontWeight: '500',
  },
  err_message: {
    fontFamily: 'NanumGothic',
    color: ERROR_COLOR,
    textAlign: 'center',
    elevation: 5,
  },
  back_container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  back_text: {
    fontFamily: 'NanumGothic',
    paddingLeft: 10,
  },
});

export default SignUp;
