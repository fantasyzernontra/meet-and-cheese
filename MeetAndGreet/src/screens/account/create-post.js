import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import WritingPostSuccesModal from '../../components/account/writing-post-success';

import ImageSelection from '../../components/account/image-selection';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import API from '../../api/path';
import { launchImageLibrary } from 'react-native-image-picker';
import { MMKV } from 'react-native-mmkv';

import { SECONDARY_COLOR } from '../../constant';
import ImagePreview from '../../components/account/image-preview';

const CreatingPost = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [post_info, setPostInfo] = useState({
    title: '',
    captions: '',
  });
  const [post_image, setPostImage] = useState(null);
  const [validate, setValidated] = useState(true);
  const [onSucces, setOnSuccess] = useState(false);
  const user_id = MMKV.getString('user_id');

  const onFill = (name, value) => {
    setPostInfo({ ...post_info, [name]: value });
  };

  const onSelectImage = img => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.assets) setPostImage(response.assets[0]);
      },
    );
  };

  const onWritingPost = async () => {
    const res = await API.post.createPost(
      post_image,
      post_info.title,
      post_info.captions,
      user_id,
    );
    if (res) setOnSuccess(true);
  };

  useEffect(() => {
    if (post_image && post_info.title.length !== 0) setValidated(false);
    else setValidated(true);
  }, [post_image, post_info]);

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        ...styles.safeAreaContainer,
      }}>
      <View
        style={{
          flex: 1,
          padding: 20,
        }}>
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity
            style={{
              marginBottom: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => navigation.goBack()}>
            <FontistoIcon name="angle-left" color="#000" size={20} />
            <TouchableOpacity disabled={validate} onPress={onWritingPost}>
              <Text
                style={
                  validate ? styles.inactive_post_text : styles.active_post_text
                }>
                Post
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.title}>Write a Post</Text>
        </View>
        {post_image && (
          <ImagePreview img={post_image} onPress={onSelectImage} />
        )}
        {!post_image && <ImageSelection onPress={onSelectImage} />}
        <View style={{ flex: 0.5 }}>
          <View style={styles.input_section}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              autoCapitalize="words"
              style={{
                padding: 15,
                backgroundColor: '#fff',
                borderRadius: 15,
                alignItems: 'center',
                marginTop: 15,
                fontFamily: 'NanumGothic',
              }}
              selectionColor="#64bfa4"
              onChangeText={val => onFill('title', val)}
              value={post_info.title}
            />
          </View>
          <View style={styles.input_section}>
            <Text style={styles.label}>Captions</Text>
            <TextInput
              autoCapitalize="sentences"
              style={{
                padding: 20,
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop: 15,
                height: 80,
                marginVertical: 40,
                alignItems: 'center',
                fontFamily: 'NanumGothic',
              }}
              selectionColor="#64bfa4"
              multiline={true}
              onChangeText={val => onFill('captions', val)}
              value={post_info.captions}
            />
          </View>
        </View>
      </View>
      <WritingPostSuccesModal
        isVisible={onSucces}
        onSuccess={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    fontFamily: 'NanumGothic',
    fontSize: 36,
    fontWeight: '600',
    color: SECONDARY_COLOR,
  },
  inactive_post_text: {
    fontFamily: 'NanumGothic',
    color: 'grey',
    fontSize: 20,
    fontWeight: '500',
  },
  active_post_text: {
    fontFamily: 'NanumGothic',
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: '500',
  },
  input_section: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  label: {
    fontFamily: 'NanumGothic',
    fontSize: 24,
    marginTop: 10,
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
  },
});

export default CreatingPost;
