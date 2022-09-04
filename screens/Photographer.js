import React, { useState } from 'react';
import {View,Text,Image, TouchableOpacity, FlatList, ScrollView,StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


const Photographer=({navigation})=>{
    const Data=[
        {
            Name:'ADEEL ASIF PHOTOGRAPHY' , key:1, 
            about: "The responsibilities of photographers can depend on the medium in which they work, but some common duties include Capture and edit visual content for multiple platforms. Produce photography in various methods including printed/digital media. Deliver final product to various sources including internal and external customers, media, graphic designers, and corporate communications.Perform retouching and image adjustments after shoots.Promote the businesses to clients and the public.Purchase or requisition supplies.",
            image: [require('../banquet/ph1.jpg'),require('../photogarphy/adeel/1.jpg') ,require('../photogarphy/adeel/2.jpg'),require('../photogarphy/adeel/3.jpg'),
            require('../photogarphy/adeel/4.jpg'),require('../photogarphy/adeel/5.jpg'),require('../photogarphy/adeel/6.jpg'),require('../photogarphy/adeel/7.jpg'),require('../photogarphy/adeel/8.jpg'),require('../photogarphy/adeel/9.jpg')
        ,require('../photogarphy/adeel/10.jpg'),require('../photogarphy/adeel/11.jpg'),require('../photogarphy/adeel/12.jpg')],
            price:10000,disprice:9000,
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
          
        <TouchableOpacity onPress={()=>navigation.navigate('DetailPhoto',item)}>
        <View style={styles.card}>
       
        <Image
  style={{ width: '95%', height: 250, justifyContent:"center" , borderRadius:10}}
  source={item.image[0]}
/>          
 <Text style={styles.name}>{item.Name}</Text>
<View style={{display:'flex',flexDirection:'row'}}>
           <Text>starting from</Text>
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
export default Photographer;