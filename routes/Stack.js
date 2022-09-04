import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Login from "../screens/Login";
import Home from "../screens/Home"
import Register from "../screens/Register"
import MyTabs from "./Tab";
import DrawerNavigator from './Drawer';
import NavTabs from './bottomnav';
import Banquets from '../screens/Banquets';
import Detail from '../screens/Detail';
import Gallery from '../screens/Gallery';
import Description from '../screens/Description';
import Bill from '../screens/bill';
import Select from '../screens/Select';
import Card from '../screens/card';
import CatersDetail from '../screens/caters/catersdetail';
import DetailPhoto from '../screens/Detailphoto';
const Stack = createNativeStackNavigator();
function Logotitle() {
  return (
    <Image
      style={{ width: 130, height: 50, justifyContent:"center" }}
      source={require('../banquet/1.png')}
    />
  );
}

  
const StackNav =({navigation})=>{
return(
 <Stack.Navigator initialRouteName="Home" screenOptions={{
    
  }}>
      <Stack.Screen name="Home" component={Home} options={{
    headerShown: false
}}
       />
      <Stack.Screen name="Login" component={Login} options={{
    headerShown: false
}}/>
      <Stack.Screen name="Register" component={Register} options={{
    headerShown: false
}}
       />
       
    <Stack.Screen name="Drawer" component={NavTabs} options={{
    headerShown: false
}} />
     <Stack.Screen name="Detail" component={Detail}  options={{
    headerTitle:"",
    headerBackTitleVisible:false,
    headerTransparent:true,
    headerTintColor:'#fff',
    
    

    
}}/>
<Stack.Screen name="CatersDetail" component={CatersDetail}  options={{
    headerTitle:"",
    headerBackTitleVisible:false,
    headerTransparent:true,
    headerTintColor:'#fff',
    
    

    
}}/>
<Stack.Screen name="DetailPhoto" component={DetailPhoto}  options={{
    headerTitle:"",
    headerBackTitleVisible:false,
    headerTransparent:true,
    headerTintColor:'#fff',
    
    

    
}}/>
     <Stack.Screen name="gallery" component={Gallery} options={{
    headerTitle:"",
    headerBackTitleVisible:false,
    headerTransparent:true,
    headerTintColor:'#fff',
    
    

    
}}/>
   <Stack.Screen name="select" component={Select} options={{
    headerTitle:"",
    headerBackTitleVisible:true,
    headerTransparent:true,
    headerTintColor:'#2c7768',
    
    

    
}}/>

<Stack.Screen name="Bill" component={Bill} options={{
    headerTitle:"Dawat Bill",
    headerBackTitleVisible:true,
    headerTransparent:true,
    headerTintColor:'#2c6678',
    
    

    
}}/>
<Stack.Screen name="card" component={Card} options={{
    headerTitle:"",
    headerBackTitleVisible:true,
    headerTransparent:true,
    headerTintColor:'#2c6678',
    
    

    
}}/>
     <Stack.Screen name="Description" component={Description} />
      
    </Stack.Navigator>
);
}
export default StackNav;