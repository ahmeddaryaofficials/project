
import React from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput} from 'react-native'

const Rbutton=(props)=>{
return(
<View style={styles.conatiner}>
    <Text style={styles.text}>{props.type}</Text>
    <Text style={styles.text}> {props.label}</Text>
    </View>
);
}
const styles=StyleSheet.create({
    conatiner:{
        backgroundColor:'#fff',
        borderWidth:2,
        color:'#fff',
        padding:-8,
        borderColor:'#2c6678',
       width:'13%',
       marginTop:5,
       marginLeft:10,
       justifyContent:'center',
       alignItems:'center',
     
          },
          text:{
              fontSize:11,
              color:'#2c6678',
          }
})
export default Rbutton;