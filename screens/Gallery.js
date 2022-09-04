import React, {useState} from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const Gallery=({route})=>{
    let data=route.params
    let [datas]=data.image
    return(
    
    <ScrollView style={styles.container}>
        
        {
         data.image.map((source)=>(
             <View key={source} style={{marginTop:20}}>
            <Image style={{height:300,width:'100%',borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.97,
        shadowRadius: 6.65,
        
       }} {...{source}}/>
             </View>
         ))
        }
    </ScrollView>
    
    
   
    );
}
const styles=StyleSheet.create({
    container:{
       
        textAlign:'center'
    },
})
export default Gallery;