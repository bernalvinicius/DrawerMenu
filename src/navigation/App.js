import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default App;
