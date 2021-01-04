import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Cart from '../views/Cart';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Cart">
    <Drawer.Screen name="Cart" component={Cart} />
  </Drawer.Navigator>
);
