import React, { useEffect, useState } from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput,ScrollView,Modal,Pressable,FlatList} from 'react-native'
import * as Animatable from 'react-native-animatable'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

import Icon from 'react-native-vector-icons/FontAwesome';
import Rbutton from '../../component/roundbutton';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Calendar } from 'react-native-calendars';
import Controllers from '../../component/controller';
const CatersDetail =({navigation,route})=>{
  const Tab = createMaterialTopTabNavigator();
  
 let maximum_persons=150;
    const data =route.params;
    const [quantity,setquanitity]=useState(0)
  
    const [modalVisible, setModalVisible] = useState(false);
    const dish =[

        { name: "chicken biryani" ,quantity:25,detail:'generous serving of rice and chicken for all your biryani craving', pic: require('./caters/mehran/chickenbiryani.jpg'),key:0}, 
        {name: " beef haleem",quantity:0,detail:'generous serving of rice and chicken for all your biryani craving',pic: require('./caters/mehran/beefbiryani.jpg'),key:1},
        {name: "beef pulao",quantity:0,detail:'generous serving of rice and chicken for all your biryani craving',pic: require('./caters/mehran/beefpulao.jpg'),key:2},
        {name:"beef biryani",quantity:0,detail:'generous serving of rice and chicken for all your biryani craving',pic: require('./caters/mehran/beefbiryani.jpg'),key:3}, 
        {name:"koyla karahi",quantity:0,detail:'generous serving of rice and chicken for all your biryani craving',pic: require('./caters/mehran/koylakarahi.jpg'),key:4,},
        {name: "bhaji gosht",quantity:0,detail:'generous serving of rice and chicken for all your biryani craving',pic: require('./caters/mehran/bhajigosht.jpg'),key:5}]
  const facility =[
    {
      fac:'Secured Environment',
      icon:<MaterialIcons name="security" size={37} color="#2c6878" />,
      key:1

    },
    {
      fac:'Separate Entrance',
      icon:<FontAwesome5 name="door-open" size={37} color="#2c6878" />,
      key:2

    },
    {
      fac:'V.I.P Guest table',
      icon:<FontAwesome name="users" size={37} color="#2c6878" />,
      key:3

    },
    {
      fac:'Valet parking',
      icon:<AntDesign name="car" size={37} color="#2c6878" />,
      key:4

    },
    {
      fac:'Setup Standby Generator',
      icon:<MaterialCommunityIcons name="slot-machine" size={37} color="#2c6878" />,
      key:5

    },
    {
      fac:'Special Lighting ',
      icon:<FontAwesome name="lightbulb-o" size={37} color="#2c6878" />,
      key:6

    },
    {
      fac:'Exclusive Mehndi Arrangement',
      icon:<FontAwesome5 name="fantasy-flight-games" size={37} color="#2c6678" />,
      key:7

    },
   
  ]


function counter(i){
  console.log('enter')
  let num=dish[i].quantity 
   if(num<= 0)
   {
    num = 0
   }
   else{
    console.log('number')
    num = num - 5;
     console.log(num)
   }
  
}
function Facilities(){
  return(
    <View style={styles.conatiner1}>
       <Image></Image>
      </View>
  );
}

function Dishes(){
return(
  <View style={styles.conatiner1}>
  <FlatList
   data={dish}
   renderItem={(item)=>{
     return(
       <View
      
        style={{display:'flex',flexDirection:'row',paddingRight:5,borderColor:'#2c6678',borderBottomWidth:1,paddingBottom:15}}>
          <View
      
      style={{display:'flex',flexDirection:'column',paddingRight:90,margin:5,borderColor:'#2c6678',}}>
       <View style={{marginBottom:5,borderRadius:100,marginRight:'auto',paddingRight:12,paddingLeft:12,marginTop:5,marginLeft:5,backgroundColor:'#2c6678'}}>
          <Text style={{color:'#fff',fontSize:20}} > kg</Text>
          </View>
        <Text style={{fontSize:15,marginTop:2,marginLeft:5,fontWeight:'bold'}}>{item.item.name}</Text>
        <Text style={{fontSize:12,marginTop:2,marginLeft:5,marginBottom:10}}>{item.item.detail}</Text>
       
        <Controllers title={dish.name} total={data.detail}/>
        </View>
        <Image source={item.item.pic} style={{height:130,width:100,right:80,borderRadius:10,marginTop:11}}/>
        
       </View>
     );
   }}
   keyExtractor={item => item.key}
 />
  
 </View>
);

}

    

    

return(
  

<View style={{justifyContent:'center',alignItems:'center'}}>
   <View style={styles.conatiner}>
   <TouchableOpacity  style={{display:'flex',flexDirection:'row'} }>
    
     <Image source={data.image} style={styles.image}/>
           
    </TouchableOpacity>
    <Animatable.View style={{backgroundColor:'#fff',margin:5,borderTopLeftRadius:100,borderTopRightRadius:100}}
    animation="fadeInLeft"
    delay={5}
    
    duration={1500}>
    <Text style={styles.name}>{data.Name}</Text>
    <Animatable.Text style={{backgroundColor:'#fff',marginLeft:'auto',marginRight:'auto',margin:10,textAlign:'center'}}
    animation="fadeInRight"
    delay={5}
    
    duration={1500} >{data.about}</Animatable.Text>
    {/* <View style={{display:'flex',flexDirection:'row',marginLeft:'auto',marginRight:'auto'}}>
             <Rbutton label={data.min} type={'MIN'}/>
             <Rbutton label={data.max} type={'MAX'}/>          
             </View> */}
             
    </Animatable.View>
  <View></View>  
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
      name="Description"
      component={Dishes}
      options={{ tabBarLabel: 'Dishes' }}
    />
    <Tab.Screen
      name="Facilities"
      component={Facilities}
      options={{ tabBarLabel: 'Beverages' }}
    />
     
   
    
    
    </Tab.Navigator>
   
    </View> 
    <TouchableOpacity style={{bottom:'8.5%',right:'50%'}} onPress={()=>navigation.navigate('select',data)}>
   <LinearGradient
   start={{x:0,y:0,z:0}}
   end={{x:0.5,y:4,z:1}}
   colors={['#2c6650','#2c6678',"#2c6650"]}
   style={styles.b}
   >
    
       <Text style={styles.texting}>order now</Text>
     
     </LinearGradient>
     </TouchableOpacity>
    </View>
    

);
}

const styles=StyleSheet.create({
  icon1:{
    marginTop:10
  },
  input:{
       
    height:60,
    bottom:40,
    width:'80%',
    fontSize:20,
    marginBottom:10,
    marginTop:35,
    borderBottomWidth:1,
    paddingLeft:20,
    borderColor:'#a9a9a9',
    backgroundColor:'#ffffff',
    left:10
 },
  imageinput:{
    display:'flex',
    flexDirection:'row',
   
    paddingLeft:20,
    
    
 },
  conatiner1:{
    backgroundColor:'#fff',
    height:'100%',
    width:'100%'
      },
  calendar:{
    backgroundColor:'#fff',
    borderWidth:2,
    color:'#fff',
    padding:10,
    borderColor:'#2c6678',
   width:'12%',
   marginTop:5,
   marginLeft:10,
   justifyContent:'center',
   alignItems:'center',
    borderRadius:100,
    marginLeft:'auto',
    marginRight:10
  },
  button:{
    marginRight:20,
    marginRight:20,
    marginTop:15,
    backgroundColor:'#ffffff',
    borderRadius:10/2,
    shadowOffset: {
     width: 0,
     height: 4,
 },
 shadowOpacity: 0.57,
 shadowRadius: 3.65,
 
 elevation: 30,
  },
  text:{
     padding:10,
     fontSize:14,
     fontWeight:'bold',
     backgroundColor:'#ffffff',
     color:"#2c6678",
     marginLeft:20,marginRight:20,
    
  },
    conatiner:{
       height:'100%',
       width:'100%',
        textAlign:'center',
        backgroundColor:'#fff'
        
    },
    image:{
      position:'relative',
     height:150,
     width:'100%',
      marginTop:20
    },
    image1:{
    width:'20%',
    height:62.5,
    borderWidth:1,
    borderColor:'#fff',
    },
    image2:{
      opacity:0.7,
      width:'25%',
      height:70,
      borderWidth:1,
      borderColor:'#fff',
      },
      card:{
        backgroundColor:'#ffffff',
        paddingBottom:10,
        width:'100%',
        borderBottomWidth:1
        ,
        marginBottom:5,
        marginTop:10,
        marginRight:10,
        marginLeft:10,
        display:'flex',
        flexDirection:'row'
        ,
    borderColor:'#d3d3d3'

        
     
    },
    name:{
      
      fontSize:18,
      marginTop:10,
     
      color:'#2c6678',
      
      fontWeight:'bold',
      letterSpacing:3,
      marginLeft:'auto',marginRight:'auto'
      
  },
  disprice:{
    color:'#2c6678',
  fontSize:15,
  
  marginRight:5,
  marginTop:10,
  marginLeft:10
},
price:{
    
    
    fontSize:12,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    color:'grey',
    marginRight:5,
  
  marginLeft:10
},
b:{
  display:'flex',
  flexDirection:'row',
 backgroundColor:'transparent',
 padding:5,
 height:65,
 width:'100%',
position:'absolute',
top:'93%',
 justifyContent:'center',
 alignItems:'center',
 marginBottom:5,
 

 shadowColor: "#000",
 shadowOffset: {
  width: 0,
  height: 4,
},
shadowOpacity: 0.47,
shadowRadius: 3.65,

elevation: 20,
 
},
texting:{
marginLeft:15,
color:'white',
fontSize:18,
letterSpacing:10
}
})
export default CatersDetail;