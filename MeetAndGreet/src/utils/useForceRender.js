import React from 'react';
import { useIsFocused } from '@react-navigation/native';

export default useForceRender = navigation => {
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    return unsubscribe;
  }, [isFocused]);
};
