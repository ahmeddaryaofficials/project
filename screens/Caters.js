import React, { useState } from 'react';
import {View,Text,Image, TouchableOpacity, FlatList, ScrollView,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


const Caters=({navigation})=>{
    const Data=[
        {
            Name:'Mehran Caters' ,
            about:"Welcome to Mehran Caterers & Decorator "
            , key:1, image: require('../banquet/cat1.jpg'),
         discount:20 , disprice:32000,min:250,max:2000,
           
        },
       
    ]
    let d=Data.disprice;
    let p=Data.price;
    let dis=(1-d/p)*100
    return(
        <View style={styles.conatiner}>
            <FlatList
            
            data={Data}
            renderItem={({item})=>
              
            <TouchableOpacity onPress={()=>navigation.navigate('CatersDetail',item)}>
            <View style={styles.card}>
           
            <Image
      style={{ width: '95%', height: 250, justifyContent:"center" , borderRadius:10}}
      source={item.image}
    />          
     <Text style={styles.name}>{item.Name}</Text>
    <View style={{display:'flex',flexDirection:'row'}}>
    
               <Text style={styles.disprice}>Range {item.min} - {item.max}</Text>
            
               
               </View>      
               <Text style={styles.dis}>{item.discount}%</Text>


            </View>
            </TouchableOpacity>
            }
            keyExtractor={item => item.key}
        />  
        </View>
    );
}

const styles=StyleSheet.create({
    conatiner:{
      
        
    },
    name:{
        fontSize:15,
        marginTop:10,
        color:'#2c6678',
        marginBottom:10,
        fontWeight:'bold',
        letterSpacing:3,
        marginLeft:10
        
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
        marginLeft:10
        ,
    borderColor:'#d3d3d3'

        
     
    },
    disprice:{
        color:'#2c6678',
      fontSize:15,
      
      marginRight:5,
      marginBottom:10,
      marginLeft:10
    },
    price:{
        marginTop:5,
        
        fontSize:10,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        color:'grey',
    }
    ,
    cut:{
        marginTop:12
        ,
        right:50,
    },
    dis:{
        padding:10,
        backgroundColor:'#2c6678',
        color:'white',
        textAlign:'right',
        right:10,
        position:'absolute',
        top:'5%',
        right:'5%'
       
    }
}
)
export default Caters;