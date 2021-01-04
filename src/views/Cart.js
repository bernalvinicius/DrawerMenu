import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const Cart = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.containerText}>Cart</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
