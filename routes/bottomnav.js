import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyTabs from './Tab';

const Tab = createBottomTabNavigator();
function Logotitle() {
    return (
        <View style={{display:'flex',flexDirection:'row',padding:5}}>
      
      <View style={{display:'flex',borderWidth:1,flexDirection:'row',flex:0,backgroundColor:'#f8f8ff',borderRadius:10,paddingLeft:10,borderColor:"#2c6678"}}>
      
      <TextInput placeholder='What are your looking for? banquets? catering? photographer?' style={{marginTop:5,marginLeft:4,width:"95%",height:30,}}/> 
      </View>
</View>
    );
  }
export default function NavTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyTabs} options={{
       tabBarLabel:'', 
       tabBarIcon: () => (<Icon name='home' size={30} color="#2c6678"/>),
         
        headerTitle: (props) => <Logotitle {...props} />,
        headerTitleAlign:"Left",
        
        

       
        }} />
      <Tab.Screen name="Settings" component={Profile}
      options={{
        tabBarLabel:'', 
        tabBarIcon: () => (<Icon name='user' size={30} color="#2c6678"/>),
       
 
        
         }} />
      <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarLabel:'', 
        tabBarIcon: () => (<Icon name='user' size={30} color="#2c6678"/>),
        
        
 
        
         }} />
    </Tab.Navigator>
  );
}