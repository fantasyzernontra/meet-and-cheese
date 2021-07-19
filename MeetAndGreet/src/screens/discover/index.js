import React, { useState, useEffect } from 'react';
import { Text, TextInput, FlatList, StyleSheet } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Picture from '../../components/discover/picture';
import PhotographerList from '../../components/discover/photographer-list';

import API from '../../api/path';
import usePaddingBottom from '../../utils/usePaddingBottom';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SECONDARY_COLOR } from '../../constant';

const Discover = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const bottomNavHeight = useBottomTabBarHeight();
  const [posts, setPosts] = useState([]);
  const [photographers, setPhotographers] = useState([]);
  const [searchEvidence, setSearchEvidence] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [searchStatus, setSearchStatus] = useState(
    'Searching ' + searchEvidence + ' ...',
  );

  const fetchAllPosts = async () => {
    const res = await API.post.getAllPosts();
    if (res) setPosts(res.data);
  };

  const onTyping = val => {
    setSearchStatus(`Searching ${val} ...`);
    setSearchEvidence(val);
  };

  const onSearch = async () => {
    const res = await API.photographer.searchPhotographers(searchEvidence);
    if (res) setPhotographers(res.data);
    setSearchStatus('Searched Results');
  };

  useEffect(() => fetchAllPosts(), []);

  useEffect(() => {
    if (searchEvidence.length === 0) setIsSearch(false);
    else setIsSearch(true);
  }, [searchEvidence]);

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        ...styles.safeAreaContainer,
      }}>
      <TextInput
        style={styles.input}
        selectionColor="#64bfa4"
        placeholder="Search a photographer"
        onChangeText={onTyping}
        value={searchEvidence}
        onSubmitEditing={onSearch}
      />
      {!isSearch && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => (
            <Picture
              navigation={navigation}
              img={item.picture.url}
              post_id={item.id}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          style={{ width: '100%', marginTop: 20 }}
          ListFooterComponent={usePaddingBottom(bottomNavHeight + 10)}
        />
      )}
      {isSearch && (
        <>
          <Text style={styles.search_label}>{searchStatus}</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={photographers}
            renderItem={({ item }) => (
              <PhotographerList
                navigation={navigation}
                photographer_account_id={item.id}
                username={item.username}
                pic={item.avatar ? item.avatar.url : null}
                style={{ width: '100%', marginTop: 20 }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={usePaddingBottom(bottomNavHeight + 10)}
              />
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: { flex: 1, width: '100%' },
  input: {
    backgroundColor: '#eee',
    width: '90%',
    padding: 15,
    borderRadius: 20,
    fontFamily: 'NanumGothic',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  search_label: {
    fontFamily: 'NanumGothic',
    fontSize: 18,
    fontWeight: '900',
    color: SECONDARY_COLOR,
    marginTop: 20,
    alignSelf: 'flex-start',
    left: 20,
  },
});

export default Discover;
