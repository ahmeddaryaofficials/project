
import React from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput} from 'react-native'

const Cbutton=(props)=>{
return(
<TouchableOpacity style={styles.conatiner}>
    <Text> {props.label}</Text>
    </TouchableOpacity>
);
}
const styles=StyleSheet.create({
    conatiner:{
        backgroundColor:'#fff',
        borderWidth:3,
        color:'#fff',
        padding:10,
        borderColor:'#2c6678',
       width:'15%',
       marginTop:5,
       marginLeft:10,
       justifyContent:'center',
       alignItems:'center',
       
          },
          text:{
              color:'#2c6678',
          }
})
export default Cbutton;