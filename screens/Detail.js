import React, { useEffect, useState } from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput,ScrollView,Modal,Pressable,FlatList} from 'react-native'
import * as Animatable from 'react-native-animatable'

import Modals from '../component/Modal';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import Photographer from '../screens/Photographer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Reviews from '../screens/Reviews';
import Rbutton from '../component/roundbutton';
import Cbutton from '../component/Cbutton';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Calendar } from 'react-native-calendars';

const Detail =({navigation,route})=>{
  const Tab = createMaterialTopTabNavigator();
  
 let maximum_persons=150;
    const data =route.params;
    const [person,setperson]=useState(0)
    
    const [modalVisible, setModalVisible] = useState(false);
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
function Description(){
  return(
    <View style={styles.conatiner1}>
<ScrollView>
<View style={{backgroundColor:"#fff",margin:5,borderTopStartRadius:50,borderTopEndRadius:50}}>       
             
             
  <Text style={styles.disprice}>Rs. {data.selling_price}</Text>
             <Text style={styles.price}>{data.original_price}</Text>
             <View style={{display:'flex',flexDirection:'row'}}>
             <Rbutton label={data.min} type={'MIN'}/>
             <Rbutton label={data.max} type={'MAX'}/>
            
             <Modals/>
             </View>
             </View>
<Text style={{marginTop:10,marginLeft:10,marginRight:10,fontSize:20}}>{data.description}</Text>

</ScrollView>

      </View>
  );
}
function Facilities(){
  return(
    <View style={styles.conatiner1}>
       <FlatList
        data={facility}
        renderItem={(item)=>{
          return(
            <Animatable.View
            animation="fadeInDown"
    delay={5}
    
    duration={1500}
             style={{display:'flex',flexDirection:'row',padding:15,borderWidth:2,margin:5,borderColor:'#2c6678'}}>
              {item.item.icon}
             <Text style={{fontSize:20,marginTop:7,marginLeft:35,}}>{item.item.fac}</Text>
            </Animatable.View>
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
   <TouchableOpacity onPress={()=>navigation.navigate('gallery',data)} style={{display:'flex',flexDirection:'row'} }>
    
     <Image source={data.image} style={styles.image}/>
     
     <View  style={{display:'flex',flexDirection:'column',justifyContent:'centre',height:250,width:'100%'}}>
    {/* <Image source={data.image[1]} style={styles.image1}/>
    <Image source={data.image[2]} style={styles.image1}/>
    <Image source={data.image[3]} style={styles.image1}/>
    <Image source={data.image[0]} style={styles.image1}/> */}
    <TouchableOpacity onPress={()=>navigation.navigate('gallery',data)} style={{position:'absolute',backgroundColor:'rgba(255, 255, 255, 0.8)',padding:7,borderRadius:100,top:'42.5%',left:'2%',paddingRight:10,paddingLeft:10,
   shadowOffset: {
    width: 0,
    height: 4,
},
shadowOpacity: 0.87,
shadowRadius: 3.65,

elevation: 30,
  }}>
      <Text style={{fontSize:13}}>view all</Text>
    </TouchableOpacity>
     
    </View>
     
   
              
     
           
    </TouchableOpacity>
    <Animatable.View style={{backgroundColor:'#fff',margin:5,borderTopLeftRadius:100,borderTopRightRadius:100}}
    animation="fadeInLeft"
    delay={5}
    
    duration={1500}>
    <Text style={styles.name}>{data.vendor_name}</Text>
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
      component={Description}
      options={{ tabBarLabel: 'Description' }}
    />
    <Tab.Screen
      name="Facilities"
      component={Facilities}
      options={{ tabBarLabel: 'Facilities' }}
    />
     
    {/* <Tab.Screen
      name="reviews"
      component={Reviews}
      options={{ tabBarLabel: 'Reviews' }}
    /> */}
    
    
    </Tab.Navigator>
   
    </View> 
    <TouchableOpacity style={{bottom:'8.5%',right:'50%'}} onPress={()=>navigation.navigate('select',data)}>
   <LinearGradient
   start={{x:0,y:0,z:0}}
   end={{x:0.5,y:4,z:1}}
   colors={['#2c6650','#2c6678',"#2c6650"]}
   style={styles.b}
   >
    
       <Text style={styles.texting}>book now</Text>
     
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
     height:250,
     width:'80%',
   
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
export default Detail;