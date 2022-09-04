import React from "react";
import Login from "../screens/Login";
import {TouchableOpacity, Text,Image} from 'react-native'
import Profile from "../screens/Profile";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NavTabs from './bottomnav'
const Drawer = createDrawerNavigator();


function Logotitle() {
  return (
    <Image
      style={{ width: 85, height: 30, justifyContent:"center" ,right:15,}}
      source={require('../banquet/2.png')}
    />
  );
}
const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Menu" >
      <Drawer.Screen name="Menu" component={NavTabs}
      options={{
        
        drawerLabel: 'Home',
        headerTitle: (props) => <Logotitle {...props} />,
        headerTitleAlign:"left",
        

       
        }}
       
      />
      <Drawer.Screen name="Profile" component={Profile} options={{ drawerLabel: 'Profile' }} />
      <Drawer.Screen name="Logout" component={Login} 
      
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;