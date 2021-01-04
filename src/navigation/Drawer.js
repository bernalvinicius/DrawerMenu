import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Navigator from './Navigator';
import DrawerContent from './DrawerContent';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const rotate = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg'],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0px', '55px'],
  });

  const translateY = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: ['0px', '50px'],
  });

  const screenStyles = {
    borderRadius,
    transform: [{rotate}, {translateX}, {translateY}],
  };

  const updateProgress = (props) => {
    setProgress(props.progress);
  };

  return (
    <Drawer.Navigator
      initialRouteName="Start"
      drawerType="slide"
      overlayColor="transparent"
      contentOptions={{backgroundColor: 'red'}}
      drawerStyle={{width: '50%', backgroundColor: '#1F1B33'}}
      contentContainerStyle={{flex: 1}}
      sceneContainerStyle={{
        backgroundColor: '#1F1B33',
      }}
      drawerContentOptions={{
        activeTintColor: 'red',
        activeBackgroundColor: 'red',
      }}
      drawerContent={(props) => {
        updateProgress(props);
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="Navigator">
        {(props) => <Navigator {...props} style={screenStyles} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
