import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import MiniPost from '../../components/mini-post';
import Header from '../../components/account/header';
import InfoPanel from '../../components/account/info-panel';

import API from '../../api/path';

import PUBLIC_API from '../../data/public-api';
import { PRIMARY_COLOR } from '../../constant';

const AccountPage = ({ route, navigation }) => {
  const insets = useSafeAreaInsets();
  const photographer_account_id = route.params.photographer_account_id;
  const [photographerInfo, setPhotographerInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPhotograpger = async () => {
    const res = await API.photographer.getOnePhotographer(
      photographer_account_id,
    );
    if (res) setPhotographerInfo(res.data);
    setLoading(false);
  };

  useEffect(() => fetchPhotograpger(), []);

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
              <Header navigation={navigation} name={photographerInfo.name} />
              <View style={styles.profile_pic}>
                <Image
                  source={{
                    uri: PUBLIC_API + photographerInfo.avatar.url,
                  }}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={styles.username}>@{photographerInfo.username}</Text>
              <InfoPanel
                navigation={navigation}
                photographer_account_id={photographerInfo.id}
              />
            </>
          }
          showsVerticalScrollIndicator={false}
          data={photographerInfo.posts}
          renderItem={({ item }) => {
            return (
              <MiniPost
                navigation={navigation}
                isSelf={false}
                img={item.picture.url}
                post_id={item.id}
              />
            );
          }}
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

export default AccountPage;
