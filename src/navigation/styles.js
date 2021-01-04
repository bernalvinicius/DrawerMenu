import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaApp: {
    flex: 1,
  },
  safeAreaProvider: {
    borderTopLeftRadius: 48,
    overflow: 'hidden',
  },
  viewDrawer: {
    marginTop: 120,
  },
  viewTitle: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
    lineHeight: 38,
    fontSize: 28,
  },
  viewContentDrawer: {
    marginLeft: 10,
    width: '100%',
  },
  contentDrawerItemActive: {
    backgroundColor: '#4B2F3F',
    borderRadius: 15.5,
    marginHorizontal: 20,
  },
  drawerItemLabelActive: {
    color: '#FC8074',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
  contentDrawerItem: {
    marginHorizontal: 20,
  },
  drawerItemLabel: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
  viewRow: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 30,
    marginLeft: 30,
    marginRight: 20,
  },
  viewSignOut: {
    marginLeft: 30,
    marginRight: 20,
  },
  signoutItem: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'OpenSans',
    fontWeight: '400',
    width: 100,
  },
});

export default styles;
