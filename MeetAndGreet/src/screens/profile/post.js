import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import PostImage from '../../components/profile/post-image';
import PostChip from '../../components/post-chip';

import useForceRender from '../../utils/useForceRender';

import Model from '../../assets/images/model.jpeg';

const Post = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  useForceRender(navigation);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <PostImage navigation={navigation} />
        <View style={styles.description_container}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Model</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Image
                source={Model}
                style={{ width: 35, height: 35, borderRadius: 17.5 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.chip_container}>
            <PostChip text="Eiei" />
            <PostChip text="JubJub" />
          </View>
          <View style={styles.CTA_container}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: 40, height: 40, borderRadius: 25 }}>
                <AntdesignIcon name="heart" color="#00997B" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: 40, height: 40, borderRadius: 25 }}>
                <AntdesignIcon name="heart" color="#00997B" size={20} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: 40, height: 40, borderRadius: 25 }}>
                <AntdesignIcon name="heart" color="#00997B" size={20} />
              </TouchableOpacity>
            </View>
          </View>
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
  CTA_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  icon_container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Post;
