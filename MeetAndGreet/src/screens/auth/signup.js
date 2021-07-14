import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {
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
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Photographer from '../../assets/images/photographer.jpeg';

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ImageBackground
        source={Photographer}
        style={styles.content_container}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.3,
        }}>
        <Text style={styles.title}>Create{'\n'}an account</Text>
        <TouchableOpacity style={styles.have_an_account_container}>
          <Text
            style={styles.have_an_account}
            onPress={() => navigation.goBack()}>
            Have an account already? Sign In
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
                autoCorrect={false}
                autoCapitalize="none"
                // onChangeText={onChangeEmail}
                // value={email}
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
                autoCorrect={false}
                autoCapitalize="none"
                // onChangeText={onChangeEmail}
                // value={email}
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
                autoCorrect={false}
                autoCapitalize="none"
                // onChangeText={onChangeEmail}
                // value={email}
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
                autoCorrect={false}
                autoCapitalize="none"
                // onChangeText={onChangeEmail}
                // value={email}
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
                autoCorrect={false}
                autoCapitalize="none"
                // onChangeText={onChangeEmail}
                // value={email}
              />
            </View>
            <TouchableOpacity style={styles.signup_button} activeOpacity={0.6}>
              <Text style={styles.signup_text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photographer_signup_container}>
              <Text
                style={styles.photographer_signup}
                onPress={() => navigation.navigate('PhotographerSignup')}>
                Photographer Sign Up
              </Text>
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
    color: '#fff',
    fontWeight: '500',
    fontSize: 42,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 30,
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
  signup_button: {
    width: '80%',
    height: 48,
    borderRadius: 20,
    backgroundColor: '#64bfa4',
    marginTop: 40,
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
});

export default SignUp;
