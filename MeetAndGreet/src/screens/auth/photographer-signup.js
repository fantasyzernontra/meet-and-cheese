import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import StrapiRole from '../../data/strapi-role';
import UserType from '../../data/user_type';

import { SECONDARY_COLOR } from '../../constant';

const PhotographerSignUp = ({ navigation }) => {
  const insets = useSafeAreaInsets();
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
      _id: UserType.photographer,
    },
  });
  const [errMessage, setErrMessage] = useState('');
  const [pending, setPending] = useState(false);

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

  if (pending)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}>
      <View style={styles.main_container}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={styles.back_container}
            activeOpacity={0.2}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntdesignIcon name="left" color="#000" size={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Create an account to show your work</Text>
        <BlurView
          style={styles.form_container}
          blurRadius={1}
          blurType="thinMaterialLight">
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              alignSelf: 'center',
            }}>
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
          </ScrollView>
          <View style={{ height: 30 }} />
          <Text style={styles.err_message}>{errMessage}</Text>
          <TouchableOpacity onPress={onSignUp} activeOpacity={0.8}>
            <View style={styles.signup_button}>
              <Text style={styles.signup_text}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  main_container: {
    flex: 1,
  },
  form_container: {
    height: Dimensions.get('screen').height * 0.8,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingBottom: 60,
  },
  title: {
    fontFamily: 'NanumGothic',
    fontWeight: '700',
    fontSize: 35,
    color: SECONDARY_COLOR,
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 30,
  },
  back_container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  back_text: {
    fontFamily: 'NanumGothic',
    paddingLeft: 10,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginVertical: 10,
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.8,
  },
  input: {
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 40,
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    fontFamily: 'NanumGothic',
    flex: 1,
  },
  input_label: {
    flex: 1,
    fontFamily: 'NanumGothic',
    color: '#fff',
    marginTop: 20,
  },
  signup_button: {
    width: '80%',
    height: 48,
    borderRadius: 20,
    backgroundColor: SECONDARY_COLOR,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signup_text: {
    fontFamily: 'NanumGothic',
    color: '#E3ECFF',
    fontSize: 16,
    fontWeight: '500',
  },
  err_message: {
    fontFamily: 'NanumGothic',
    color: '#FF7F7F',
    textAlign: 'center',
    elevation: 5,
  },
});

export default PhotographerSignUp;
