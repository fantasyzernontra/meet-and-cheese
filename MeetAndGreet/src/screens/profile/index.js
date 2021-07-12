import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import ProfileHeader from '../../components/profile/header';
import InfoPanel from '../../components/profile/info-panel';
import MiniPost from '../../components/mini-post';

import API from '../../api/path';

import Photographer from '../../assets/images/photographer.jpeg';

const Profile = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const onSignOut = () => {
    API.profile.logout();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          ListHeaderComponent={
            <>
              <ProfileHeader
                name=""
                navigation={navigation}
                onSignOut={onSignOut}
              />
              <View style={styles.profile_pic}>
                <Image
                  source={Photographer}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={styles.username}>@Willson_je</Text>
              <InfoPanel />
            </>
          }
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          renderItem={item => <MiniPost navigation={navigation} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={{ alignItems: 'center' }}
          style={{ alignSelf: 'center' }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profile_pic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  username: {
    fontFamily: 'NanumGothic',
    fontSize: 24,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 2,
  },
});

export default Profile;
