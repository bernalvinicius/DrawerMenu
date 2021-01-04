import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigator from './Navigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator
    initialRouteName="Start"
    drawerType="slide"
    overlayColor="transparent"
    drawerStyle={{width: '50%', backgroundColor: '#1F1B33'}}
    contentContainerStyle={{flex: 1}}
    drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Navigator" component={Navigator} />
  </Drawer.Navigator>
);
