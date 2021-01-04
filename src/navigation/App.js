import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
