import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Cart, Favorites, Orders, Start} from '../views';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  );
};

export default () => (
  <Drawer.Navigator initialRouteName="Start">
    <Drawer.Screen name="Screens" component={Screens} />
  </Drawer.Navigator>
);
