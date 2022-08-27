import * as React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Location from './src/bottom-tab-screens/Location';
import Achat from './src/bottom-tab-screens/Achat';
import Ajout from './src/bottom-tab-screens/Ajout';
import Parametres from './src/bottom-tab-screens/Parametres';
import {Provider} from 'react-redux';
import {store} from './store';
import { createStackNavigator } from '@react-navigation/stack';
import CarDetails from './src/components/CarDetails';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
}
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loc" component={Location} options={{headerShown: false}} />
      <Stack.Screen name="CarDetails" component={CarDetails} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
function MyTabs() {
  return (
    <Provider store={store}>
      <Tab.Navigator
        initialRouteName="Location"
        activeColor="white"
        labelStyle={{fontSize: 12}}
        style={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Location"
          component={StackNavigator}
          options={{
            tabBarLabel: 'Louer',
            tabBarIcon: ({color}) => (
              // Month Outline
              <MaterialCommunityIcons
                name="calendar-month-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Acheter"
          component={Achat}
          options={{
            tabBarLabel: 'Acheter',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="car" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Ajouter"
          component={Ajout}
          options={{
            tabBarLabel: 'Vend',
            tabBarIcon: ({color}) => (
              <MaterialIcons
                name="add-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Parametres"
          component={Parametres}
          options={{
            tabBarLabel: 'Param',
            tabBarIcon: ({color}) => (
              <Ionicons name="settings-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator>
      <Stack.Screen
            name="CarDetails"
            component={CarDetails}
            // options={{headerShown: false}}
          />
      </Stack.Navigator> */}
    </Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
