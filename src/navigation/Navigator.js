import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Favorites, Orders, Start} from '../views';
import Animated from 'react-native-reanimated';
import styles from './styles';

const Stack = createStackNavigator();

export default ({navigation, style}) => {
  return (
    <Animated.View style={[styles.animatedView, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View style={styles.screenOptionsView}>
                <Image
                  source={require('../assets/images/menu.png')}
                  style={styles.screenOptionsImage}
                />
                <Text style={styles.screenOptionsText}>START</Text>
              </View>
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </Animated.View>
  );
};
