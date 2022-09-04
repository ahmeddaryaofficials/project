import React,{useState} from 'react'
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput, Alert} from 'react-native'
import { SocialIcon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
const Login = ({navigation}) =>{
  const auth=[{
      user: 'ahmed45',
      pass: '12345678',
      email: 'ahmeddaryaofficials@gmail.com',
      phone: '03010216250',
      fullname: 'Ahmed Ashraf',
      key:1
  }]
  let usertext='ahmed45'
  let passtext='12345678'
  const [user,setuser]=useState("")
  const [pass,setpass]=useState("")
  console.log(user)
  const Submit=()=>{
     
if(user === usertext && pass === passtext)
    {
      Alert.alert('login succesful')
      setpass('')
      setuser('')
      navigation.navigate('Drawer')
    }
     else if(user === "" && pass === ""){
      Alert.alert('empty textfields')    
     }
     else{
      Alert.alert('user or pass is wrong') 
     }
  }
return(
    <View style={styles.conatiner}>
    <Image style={styles.image} source={require('../banquet/1.png')}/>
    <Animatable.View style={styles.conatiner1}
    
    animation="bounceInUp"
    duration={100}>
       <Animatable.Text style={styles.txt}
       animation="fadeInLeft"
       delay={500}
       duration={1500}>Hello! Welcome</Animatable.Text>
        <View>
      <View>
         
          <View style={styles.imageinput}>
          <Image style={styles.icon1} source={require('../banquet/man.png')}/>
          <TextInput
          style={styles.input}
          placeholder='Enter your Username'
          
          value={user}
          onChangeText={(item)=>setuser(item)}
        />
        </View>
        <View style={styles.imageinput1}>
        <Image style={styles.icon} source={require('../banquet/key.png')}/>
          <TextInput
          style={styles.input1}
          placeholder='Enter your password'
          value={pass}
          onChangeText={(item)=>setpass(item)}
          secureTextEntry={true}
          />
          </View>
          </View>  
      <TouchableOpacity
        style={styles.buttongoogle}
        onPress={()=>Submit()}
     >
     
        <Text style={styles.text4}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{ navigation.navigate("Register")}}>
      <Text style={styles.text2}>Don't have an account? create now</Text>
      </TouchableOpacity>
     
  
    
    </View>
    </Animatable.View>
</View>
);
}
const styles=StyleSheet.create({
    imageinput:{
       display:'flex',
       flexDirection:'row',
      
       paddingLeft:20,
       
       
    },
    icon1:{
      marginTop:10
    },
    icon:{
        
      },
    imageinput1:{
        display:'flex',
        flexDirection:'row',
        
        paddingLeft:20,
        
        
     },
    conatiner:{
        backgroundColor:'#2c6678',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center'
    },
    conatiner1:{
        
        backgroundColor:'#ffffff',
        height:'90%',
        width:'100%',
        borderTopRightRadius:60,
        borderTopLeftRadius:60,
        

        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{marginTop:20,
        top:25,
        right:30,
        height: '20%',
        width:'80%',
    },
    text:{
        bottom:150,
        color:'white',
        fontSize:35,
        flexShrink: 1
    },
    button1:{
        display:'flex',
        flexDirection:'row',
       backgroundColor:'#3f2b96',
       padding:20,
       height:70,
       width:300,
       
       marginBottom:20,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:30,
       bottom:'10%'
       
       
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
    input1:{
       left:10,
        height:60,
        bottom:40,
        width:'80%',
        fontSize:20,
        marginBottom:10,
        marginTop:22,
       borderBottomWidth:1,
        paddingLeft:20,
        borderColor:'#a9a9a9',
        backgroundColor:'#ffffff',
     },
    text4:{
       color:'white',
       fontSize:25,
       letterSpacing:5
       
    },
    buttongoogle:{
        
       backgroundColor:'#2c6678',
       padding:13,
       shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.97,
    shadowRadius: 6.65,
    
    elevation: 30,
       paddingLeft:'25%',
       paddingRight:'25%',
       height:'20%',
       width:'90%',
       marginTop:20,
       marginBottom:40,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:30,
      left:40
    }
    ,
    txt:{
       bottom:80,
        color:'#2c6678',
        fontSize:32,
        letterSpacing:5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.47,
        shadowRadius: 6.65,
        
        elevation: 30,
       
        marginBottom:20,

    }
    ,
    text1:{
        bottom:120,
        color:'white',
        fontSize:18
    },
    text2:{
        color:'#2c6678',
        
        fontSize:17,
        fontWeight:'bold',
        left:35,
        bottom:10
    }
    ,
    views:{
     
     display:'flex',
     flexDirection:'row'
    },
    b:{
        backgroundColor:'white',
        justifyContent:'center',
       alignItems:'center',
        height:70,
        width:140,
        margin:5,
        bottom:70,
        borderRadius:30
    }
    ,
    butround1:{
        
    
    }

    
})
export default Login;