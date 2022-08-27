import React, {useEffect} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../shared/common/theme';

const CustomSidebarMenu = (props) => {

  useEffect(  () => {
    let isMounted = true;   
    if(isMounted){
    }
    return () => {
      isMounted = false;
    };  
  }, []);
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: colors.BLUE.default}}>
            {props?.fullName?.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          {props?.fullName}
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem style={{
          // position: 'absolute', //Here is the trick
    // top: 40, //Here is the trick
  }}
          label={({color}) => 
            <Text style={stylesSidebar.logout}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomSidebarMenu;
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.BLUE.default,
    paddingTop: 40,
    color: colors.WHITE
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: colors.BLUE.default,
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: colors.WHITE,
    backgroundColor: colors.WHITE,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: colors.WHITE,
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: colors.GREY.primary,
    marginTop: 15,
  },
  logout: {
    color: colors.GREY.default, 
    flex: 1, 
    justifyContent: 'flex-end', 
  }
});