/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Favorites, Orders, Start} from '../views';
import Animated from 'react-native-reanimated';

const Stack = createStackNavigator();

export default ({navigation, style}) => {
  return (
    <Animated.View style={[{flex: 1, overflow: 'hidden'}, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../assets/images/menu.png')}
                  style={{height: 30, width: 30, margin: 30}}
                />
                <Text
                  style={{
                    color: '#9F9FA0',
                    fontFamily: 'OpenSans',
                    fontSize: 30,
                  }}>
                  START
                </Text>
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
