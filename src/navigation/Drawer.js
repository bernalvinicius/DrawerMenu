import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigator from './Navigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    initialRouteName="Start"
    drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Navigator" component={Navigator} />
  </Drawer.Navigator>
);
