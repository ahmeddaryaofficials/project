import React, { useState } from 'react';
import {View,Text,Image, TouchableOpacity, FlatList, ScrollView,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


const Banquets=({navigation})=>{
    const Data=[
        {
            Name:'ELITE SOLUTION BANQUET' ,
            facility: "Secured Environment | Exclusive Wall | Panelli Flower Arrange | Waiters | Separate Entrance | V.I.P Guest table | Valet parking | Cafe table | Customise Round table | Setup Standby Generator | Special Lighting | Exclusive Mehndi Arrangement",
            about:"The ELITE Banquet Hall is an upscale, event facility, locaated in the heart of karachi, (Stadium Road Opposite Askari iV) the 21,000 sq ft banquet hall is close to everything, plenty of parking, we offers charming atmosphere, a beautifull decor with a touch of elegance at an effordable price!!! the decorated banquet hall is perfect as a wedding ceremony, valima reception, private parties, business functions and anything eles the imagionation can come up with!!! We are of the few banquet halls in karachi that decorate to fit YOUR indiviual need! reseve our banquet hall for all your special occasion with pride."
            , key:1, image: [ require('../banquet/ban1.jpg'),
            require('../banquet/ban1.2.jpg'),
            require('../banquet/ban1.3.jpg'),
            require('../banquet/ban1.1.jpg')] ,price:35000,disprice:32000,min:250,max:600,
            
            
    
            
            
            
        },
        {
            Name:'SAIMA BANQUET' ,
            facility: "Secured Environment | Exclusive Wall | Panelli Flower Arrange | Waiters | Separate Entrance | V.I.P Guest table | Valet parking | Cafe table | Customise Round table | Setup Standby Generator | Special Lighting | Exclusive Mehndi Arrangement",
            about:"The Saima Banquet Hall is an upscale, event facility, locaated in the heart of karachi, (Stadium Road Opposite Askari iV) the 21,000 sq ft banquet hall is close to everything, plenty of parking, we offers charming atmosphere, a beautifull decor with a touch of elegance at an effordable price!!! the decorated banquet hall is perfect as a wedding ceremony, valima reception, private parties, business functions and anything eles the imagionation can come up with!!! We are of the few banquet halls in karachi that decorate to fit YOUR indiviual need! reseve our banquet hall for all your special occasion with pride."
            , key:2, image: [ require('../banquet/ban2.jpg'),
            require('../banquet/ban2.2.jpg'),
            require('../banquet/ban2.3.jpg'),
            require('../banquet/ban2.1.jpg'),
            require('../banquet/ban2.4.jpg')] ,price:105000,disprice:98000,min:400,max:900
            
            
    
            
            
            
        }
    ]
    let d=Data.disprice;
    let p=Data.price;
    let dis=(1-d/p)*100
    return(
        <View style={styles.conatiner}>
            <FlatList
            
            data={Data}
            renderItem={({item})=>
              
            <TouchableOpacity onPress={()=>navigation.navigate('Detail',item)}>
            <View style={styles.card}>
           
            <Image
      style={{ width: '95%', height: 250, justifyContent:"center" , borderRadius:10}}
      source={item.image[0]}
    />          
     <Text style={styles.name}>{item.Name}</Text>
    <View style={{display:'flex',flexDirection:'row'}}>
    
               <Text style={styles.disprice}>Rs. {item.disprice}</Text>
               <Text style={styles.price}>{item.price}</Text>
               
               </View>      
               <Text style={styles.dis}>{((1-item.disprice/item.price)*100).toFixed(2)}%</Text>


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
export default Banquets;