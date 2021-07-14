import React from 'react';
import { View } from 'react-native';

export default usePaddingBottom = tabBarHeight => {
  return <View style={{ height: tabBarHeight + 20 }}></View>;
};
