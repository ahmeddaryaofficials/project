
import * as React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Photographer from '../screens/Photographer';
import Banquets from '../screens/Banquets';
import Caters from '../screens/Caters';
import Login from '../screens/Login';
const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Menu"
    screenOptions={{
      tabBarActiveTintColor: '#2c6678',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: '#ffffff',
    borderRightWidth:2 ,
},
    }}
    >
        <Tab.Screen
      name="Banquetss"
      component={Banquets}
      options={{ tabBarLabel: 'Banquets' }}
    />
    <Tab.Screen
      name="Caters"
      component={Caters}
      options={{ tabBarLabel: 'Cater' }}
    />
    <Tab.Screen
      name="Photographer"
      component={Photographer}
      options={{ tabBarLabel: 'Photographer' }}
    />
     
    
    </Tab.Navigator>
  );
}