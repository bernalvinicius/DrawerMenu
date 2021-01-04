import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaApp}>
      <SafeAreaProvider style={styles.safeAreaProvider}>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default App;
