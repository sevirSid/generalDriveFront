// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
// Import React
import React, {useState, useEffect, useMemo} from 'react';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import RidesScreen from './DrawerScreens/RidesScreen';
import WalletScreen from './DrawerScreens/WalletScreen';
import ContactUsScreen from './DrawerScreens/ContactUsScreen';
import {View, Text, Button} from 'react-native';
import {useRef} from 'react/cjs/react.development';
import {colors} from '../shared/common/theme';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        // {<HomeScreen extraData={someData} />}
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),

          // headerRight: () => (
          //   <Button onPress={() => {}} title="Cancel" />
          // ),
          headerStyle: {
            backgroundColor: colors.BLUE.default, //Set Header color
            // backgroundColor: 'transparent', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          // headerTransparent: true,
           headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
const walletScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Wallet">
      <Stack.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Wallet', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.BLUE.default, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const ridesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Rides">
      <Stack.Screen
        name="Rides"
        component={RidesScreen}
        options={{
          title: 'Rides', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.BLUE.default, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const contactUsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ContactUs">
      <Stack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{
          title: 'About Us', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: colors.BLUE.default, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: colors.BLUE.default, //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
import {useRoute} from '@react-navigation/native';
const DrawerNavigatorRoutes = ({navigation, testVar}) => {
  const route = useRoute();
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    let isMounted = true;
    return () => {
      isMounted = false;
      // unsubscribe;
    };
  }, []);
  const getFullName = async () => {
    await AsyncStorage.getItem('user').then((val) => {
      const res = JSON.parse(val);
      //  console.log(res);
      setFullName(''
        // res.Account.firstName.concat(' ').concat(res.Account.lastName),
      );
    });
  };

  const fireFullName = async () => {
    return await getFullName();
  };
  fireFullName();
  return (
    <Drawer.Navigator
      initialRouteName={homeScreenStack}
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      // drawerContent={CustomSidebarMenu}> {(props) => <HomeScreen {...props} otherProp={otherProp} />}
      drawerContent={(props) => (
        <CustomSidebarMenu
          navigation={navigation}
          // here we force call the method to get the full name from AsyncStorage then add the value to fullName
          {...props}
          fullName={fullName}
        />
      )}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="walletScreenStack"
        options={{drawerLabel: 'My Wallet'}}
        component={walletScreenStack}
      />
      <Drawer.Screen
        name="ridesScreenStack"
        options={{drawerLabel: 'My Rides'}}
        component={ridesScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Edit Profile'}}
        component={settingScreenStack}
      />
      <Drawer.Screen
        name="contactUsScreenStack"
        options={{drawerLabel: 'About Us'}}
        component={contactUsScreenStack}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigatorRoutes;
