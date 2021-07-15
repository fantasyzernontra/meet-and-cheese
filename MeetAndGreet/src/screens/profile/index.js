import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
  Linking,
  Platform,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import ProfileHeader from '../../components/profile/header';
import InfoPanel from '../../components/profile/info-panel';
import MiniPost from '../../components/mini-post';

import API from '../../api/path';
import { MMKV } from 'react-native-mmkv';

import PUBLIC_API from '../../data/public-api';
import { PRIMARY_COLOR } from '../../constant';

const Profile = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const avatar = MMKV.getString('avatar');
  const name = MMKV.getString('name');
  const username = MMKV.getString('username');
  const [user_posts, setUsersPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserPosts = async () => {
    const res = await API.post.getSelfPosts(username);
    if (res) setUsersPosts(res.data);
    setLoading(false);
  };

  const onSignOut = () => {
    API.profile.logout();
    navigation.navigate('Home');
  };

  useEffect(() => fetchUserPosts(), []);

  if (loading)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={PRIMARY_COLOR} size="large" />
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          ListHeaderComponent={
            <>
              <ProfileHeader
                name={name}
                navigation={navigation}
                onSignOut={onSignOut}
              />
              <View style={styles.profile_pic}>
                <Image
                  source={{
                    uri: PUBLIC_API + avatar,
                  }}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={styles.username}>@{username}</Text>
              <InfoPanel />
            </>
          }
          showsVerticalScrollIndicator={false}
          data={user_posts}
          renderItem={({ item }) => (
            <MiniPost
              navigation={navigation}
              isSelf={true}
              post_id={item.id}
              img={item.picture.url}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
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
