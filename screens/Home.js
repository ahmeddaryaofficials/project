import React from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
const Home = ({ navigation }) =>{
return(
    <View style={styles.conatiner}>
    <Image style={styles.image} source={require('../banquet/1.png')}/>
    <Animatable.View style={styles.conatiner1}
    duration={1500}
    animation="bounceInUp">
        <Animatable.Text style={styles.text
        }
        delay={1000}
        duration={1500}
        animation="slideInLeft">Welcome to </Animatable.Text>
        <Animatable.Text style={styles.text}
        delay={1000}
         duration={1500}
         animation="slideInRight"> Event booking application</Animatable.Text>
        <View>
        <TouchableOpacity
        style={styles.button1}
        onPress={()=>{}}
      >
      <Image source={require('../banquet/facebook-logo.png')}/>
        <Text style={styles.text1}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttongoogle}
        onPress={()=>{}}
      >
      <Image source={require('../banquet/googles.png')}/>
        <Text style={styles.text4}>Sign in with Google</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.views}>
        <TouchableOpacity
        style={styles.b}
        onPress={()=>{navigation.navigate("Login")}}
      >
        <Text style={styles.text2}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.b}
        onPress={()=>{navigation.navigate("Register")}}
      >
        <Text style={styles.text2}>Register</Text>
      </TouchableOpacity>
        </View>

   
    </Animatable.View>
    
</View>
);
}
const styles=StyleSheet.create({
    conatiner:{
      backgroundColor:'#2c6678',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    conatiner1:{
        backgroundColor:'#ffffff',
        height:'80%',
        width:'100%',
        borderTopRightRadius:60,
        borderTopLeftRadius:60,

        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
      top:20,
      right:30,
        height: 150,
        width:300,
    },
    text:{
        bottom:80,
        color:'#2c6678',
        fontSize:25,
        marginBottom:10,
        
    },
    button1:{
        display:'flex',
        flexDirection:'row',
       backgroundColor:'#3f2b96',
       padding:20,
       height:70,
       width:300,
       bottom:45,
       marginBottom:20,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:30,
       shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.47,
    shadowRadius: 3.65,
    
    elevation: 20,
       
    },
    text4:{
       color:'black',
       fontSize:18,
       marginLeft:30,
       right:17,
    },
    buttongoogle:{
        display:'flex',
        flexDirection:'row',
       backgroundColor:'#ffffff',
       padding:20,
       height:70,
       width:300,
       bottom:45,
       marginBottom:20,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:30,
       borderWidth:1,
       shadowColor: "#000",
       shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.47,
    shadowRadius: 3.65,
    
    elevation: 20,

       
    }
    ,
    txt:{
        top:40,
        color:'white',
        letterSpacing:2
    }
    ,
    text1:{
        marginLeft:15,
        color:'white',
        fontSize:18
    },
    text2:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold'
    }
    ,
    views:{
     
     display:'flex',
     flexDirection:'row'
    },
    b:{
      backgroundColor:'#2c6678',
     borderWidth:1,
        justifyContent:'center',
       alignItems:'center',
        height:70,
        width:140,
        margin:5,
        bottom:45,
        borderRadius:30,
        shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.47,
      shadowRadius: 3.65,
      
      elevation: 20,
    }

    
})
export default Home;