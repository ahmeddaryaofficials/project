import React from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput} from 'react-native'

const Description=()=>{
return(
<View style={styles.conatiner}>
    <Text>description</Text>
    </View>
);
}
const styles=StyleSheet.create({
    conatiner:{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%'
          },
})
export default Description;