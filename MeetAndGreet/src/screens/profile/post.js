import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PostImage from '../../components/profile/post-image';
import PostChip from '../../components/post-chip';

import API from '../../api/path';
import useForceRender from '../../utils/useForceRender';

import PUBLIC_API from '../../data/public-api';
import { PRIMARY_COLOR } from '../../constant';

const Post = ({ navigation, route }) => {
  const post_id = route.params.post_id;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    const res = await API.post.getOnePost(post_id);
    if (res) setPost(res.data);
    setLoading(false);
  };

  useEffect(() => fetchPost(), []);

  useForceRender(navigation);

  if (loading)
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={PRIMARY_COLOR} size="large" />
      </View>
    );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <PostImage navigation={navigation} img={post.picture.url} />
        <View style={styles.description_container}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{post.title}</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={{
                  uri: PUBLIC_API + post.user.avatar.url.replace('gs://', ''),
                }}
                style={{ width: 35, height: 35, borderRadius: 17.5 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{post.captions}</Text>
          {/* <View style={styles.chip_container}>
            <PostChip text="Eiei" />
            <PostChip text="JubJub" />
          </View> */}
        </View>
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
  container: { flex: 1, backgroundColor: '#fff' },
  description_container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: 'NanumGothic',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 20,
  },
  description: {
    fontFamily: 'NanumGothic',
  },
  chip_container: {
    flexDirection: 'row',
  },
});

export default Post;
