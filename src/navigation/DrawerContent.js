import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

export default (props) => {
  const getCurrentRouteName = () => {
    let _index = props.state.index;
    console.warn('index: ', _index);
    let _routeName = props.state.routeNames;
    console.warn('routename: ', _routeName);
    return _routeName[_index];
  };
  console.warn(getCurrentRouteName());
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
      }}>
      <View style={{marginTop: 120}}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 30,
          }}>
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

        <View
          style={{
            marginLeft: 10,
          }}>
          <View
            style={{
              backgroundColor: '#4B2F3F',
              borderRadius: 15.5,
              marginBottom: 30,
              marginHorizontal: 20,
            }}>
            <DrawerItem
              label="Start"
              labelStyle={{
                color: '#FC8074',
                fontSize: 17,
                fontFamily: 'OpenSans',
                fontWeight: '400',
                width: 100,
              }}
              onPress={() => props.navigation.navigate('Start')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#4B2F3F',
              borderRadius: 15.5,
              marginBottom: 30,
              marginHorizontal: 20,
            }}>
            <DrawerItem
              label="Your Cart"
              labelStyle={{
                color: '#FC8074',
                fontSize: 17,
                fontFamily: 'OpenSans',
                fontWeight: '400',
                width: 100,
              }}
              onPress={() => props.navigation.navigate('Cart')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#4B2F3F',
              borderRadius: 15.5,
              marginBottom: 30,
              marginHorizontal: 20,
            }}>
            <DrawerItem
              label="Favorites"
              labelStyle={{
                color: '#FC8074',
                fontSize: 17,
                fontFamily: 'OpenSans',
                fontWeight: '400',
                width: 100,
              }}
              onPress={() => props.navigation.navigate('Favorites')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#4B2F3F',
              borderRadius: 15.5,
              marginBottom: 30,
              marginHorizontal: 20,
            }}>
            <DrawerItem
              label="Your Orders"
              labelStyle={{
                color: '#FC8074',
                fontSize: 17,
                fontFamily: 'OpenSans',
                fontWeight: '400',
                width: 100,
              }}
              onPress={() => props.navigation.navigate('Orders')}
            />
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            marginVertical: 30,
            marginLeft: 30,
            marginRight: 20,
          }}
        />
        <View
          style={{
            marginLeft: 30,
            marginRight: 20,
          }}>
          <DrawerItem
            label="Sign Out"
            labelStyle={{
              color: '#fff',
              fontSize: 17,
              fontFamily: 'OpenSans',
              fontWeight: '400',
              width: 100,
            }}
            onPress={() => alert('Are you sure to logout?')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
