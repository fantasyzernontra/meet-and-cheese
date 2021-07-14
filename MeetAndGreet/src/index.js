import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation';

const App = ({}) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
