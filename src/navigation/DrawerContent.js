import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

export default (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      drawerContentOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: 'red',
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <View style={{marginTop: 40}}>
        <View>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'OpenSans',
              fontWeight: 'bold',
              lineHeight: 38,
              fontSize: 28,
            }}>
            Viktor
          </Text>
        </View>
        <DrawerItem
          label="Start"
          labelStyle={{color: '#fff'}}
          onPress={() => props.navigation.navigate('Start')}
        />
        <DrawerItem
          label="Your Cart"
          labelStyle={{color: '#fff'}}
          onPress={() => props.navigation.navigate('Cart')}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={{color: '#fff'}}
          onPress={() => props.navigation.navigate('Favorites')}
        />
        <DrawerItem
          label="Your Orders"
          labelStyle={{color: '#fff'}}
          onPress={() => props.navigation.navigate('Orders')}
        />
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            width: '50%',
            marginLeft: 50,
          }}
        />
        <DrawerItem
          label="Sign Out"
          labelStyle={{color: '#fff'}}
          onPress={() => alert('Are you sure to logout?')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
