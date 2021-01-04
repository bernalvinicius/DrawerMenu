import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Favorites = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B82C4',
      }}>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
};

export default Favorites;
