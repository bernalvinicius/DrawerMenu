import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const Start = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.containerText}>Start</Text>
      </View>
    </SafeAreaView>
  );
};

export default Start;
