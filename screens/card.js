import React, { useEffect, useState } from 'react'
    
   import { Calendar } from 'react-native-calendars';
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput,ScrollView,Modal,Pressable,FlatList} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { FontAwesome } from '@expo/vector-icons';

    
    const Card=({navigation,route})=>{
        let data=route.params
      
       
        const [no,setno]=useState(0);
        return(
            <ScrollView style={styles.conatiner1}>
                <FontAwesome style={{marginTop:70,marginLeft:'auto',marginRight:'auto'}} name="cc-visa" size={90} color="#2c6678" />
                <Text style={{fontSize:15,marginLeft:20,marginTop:5}}>Card ID:
  </Text>
  <TextInput
           style={styles.input}
           placeholder='Enter total persons'
           keyboardType='numeric'
           onChangeText={(item)=>{
            setno(item)
           }}
         />
  <TouchableOpacity
        style={styles.buttongoogle}
        onPress={()=>{navigation.navigate("Bill",{data,no})}}
        
      >
     
        <Text  style={styles.text4}>NEXT</Text>
      </TouchableOpacity>
           
          </ScrollView>
          
        );
    }
    export default Card;
    const styles=StyleSheet.create({
        
        conatiner1:{
          backgroundColor:'#fff',
          height:'100%',
          width:'100%'
            },
            input:{
       
                height:40,
                
                width:'90%',
                fontSize:15,
                marginBottom:10,
                marginTop:5,
                borderWidth:1,
                paddingLeft:20,
                borderColor:'#a9a9a9',
                backgroundColor:'#ffffff',
                marginLeft:20,
                marginRight:20
             },
             buttongoogle:{
        
                backgroundColor:'#2c6678',
                padding:13,
                shadowOffset: {
                 width: 0,
                 height: 4,
             },
             shadowOpacity: 0.57,
             shadowRadius: 2.65,
             
             elevation: 30,
                paddingLeft:'25%',
                paddingRight:'25%',
               
                marginTop:20,
                marginBottom:40,
                justifyContent:'center',
                alignItems:'center',
                borderRadius:30,
              marginLeft:'auto',
              marginRight:'auto'
             },
             text4:{
                color:'white',
                fontSize:15,
                letterSpacing:5
                
             },
        })