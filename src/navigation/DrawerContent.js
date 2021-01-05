import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './styles';

export default (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.safeAreaApp}>
      <View style={styles.viewDrawer}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Viktor</Text>
        </View>

        <View style={styles.viewContentDrawer}>
          <View style={styles.contentDrawerItemActive}>
            <DrawerItem
              label="Start"
              labelStyle={styles.drawerItemLabelActive}
              onPress={() => props.navigation.navigate('Start')}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Your Cart"
              labelStyle={styles.drawerItemLabel}
              onPress={() => props.navigation.navigate('Cart')}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Favorites"
              labelStyle={styles.drawerItemLabel}
              onPress={() => props.navigation.navigate('Favorites')}
            />
          </View>

          <View style={styles.contentDrawerItem}>
            <DrawerItem
              label="Your Orders"
              labelStyle={styles.drawerItemLabel}
              onPress={() => props.navigation.navigate('Orders')}
            />
          </View>
        </View>

        <View style={styles.viewRow} />
        <View style={styles.viewSignOut}>
          <DrawerItem
            label="Sign Out"
            labelStyle={styles.signoutItem}
            onPress={() => alert('Are you sure to logout?')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
