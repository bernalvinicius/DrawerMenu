import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigator from './Navigator';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Start">
    <Drawer.Screen name="Navigator" component={Navigator} />
  </Drawer.Navigator>
);
