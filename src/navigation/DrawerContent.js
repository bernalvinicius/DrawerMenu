import React from 'react';
import {View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

export default (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItem
          label="Start"
          labelStyle={{color: '#000'}}
          onPress={() => props.navigation.navigate('Start')}
        />
        <DrawerItem
          label="Your Cart"
          labelStyle={{color: '#000'}}
          onPress={() => props.navigation.navigate('Cart')}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={{color: '#000'}}
          onPress={() => props.navigation.navigate('Favorites')}
        />
        <DrawerItem
          label="Your Orders"
          labelStyle={{color: '#000'}}
          onPress={() => props.navigation.navigate('Orders')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
