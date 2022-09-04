import React from 'react';
import {View,Text,StyleSheet, Image, TouchableOpacity,Alert} from 'react-native';

const Profile=({navigation})=>{
    return(
        <View style={styles.conatiner}>
           <View style={styles.conatiner1}>

           </View>
           <View style={styles.conatiner2}>
          
           <Image source={require('../banquet/elon.jpg')} style={styles.image}/>
           <Text style={styles.name}>ahmed45</Text>
           <Text style={styles.email}>ahmedaryaofficials@gmail.com</Text>
           <Text style={styles.no}>03010216250</Text>
           <TouchableOpacity>
           <Image source={require('../banquet/pencil.png')} style={styles.edit}/>
           </TouchableOpacity>
           </View>
           <View style={styles.conatiner3}>
               <TouchableOpacity style={styles.conatiner4}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>My Bookings</Text>
                   <Image style={{ marginRight:10,left:180,height:25,width:25}} source={require('../banquet/cart.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.conatiner4}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>My favourites</Text>
                   <Image style={{ marginRight:10,left:178,height:25,width:25}} source={require('../banquet/heart.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.conatiner4}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>Credits & Coupons</Text>
                   <Image style={{ marginRight:10,left:135,height:25,width:25}} source={require('../banquet/credit-card.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.conatiner4}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>Invite Friends</Text>
                   <Image style={{ marginRight:10,left:178,height:25,width:25}} source={require('../banquet/friends.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.conatiner4}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>Account Settings</Text>
                   <Image style={{ marginRight:10,left:150,height:25,width:25}} source={require('../banquet/settings.png')}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.conatiner4} onPress={()=>{
                Alert.alert(
                    "logout",
                    "do yopu really want to logout",
                    [
                      {
                        text: "No",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "Yes", onPress: () => navigation.navigate('Login') }
                    ]
                  );
               }}>
                   <Text style={{
                       justifyContent:'flex-start',marginLeft:5,
                       fontSize:18,
                       fontWeight:'400'}}>Logout</Text>
                   <Image style={{ marginRight:10,left:230,height:25,width:25}} source={require('../banquet/logout.png')}/>
               </TouchableOpacity>


           </View>
           
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
        top:370,
        backgroundColor:'#ffffff',
        height:'80%',
        width:'100%',
        

        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
      height:80,
      width:80,
      borderRadius:80/2,
      
      
      
    },
    conatiner2:{
        bottom:410,
        backgroundColor:'#ffffff',
        height:'25%',
        width:'90%',
        

        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.67,
        shadowRadius: 3.65,
        
        elevation: 30,
    },
    conatiner3:{
        bottom:400,
        backgroundColor:'#ffffff',
        height:'47%',
        width:'90%',
        

        
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.67,
        shadowRadius: 3.65,
        
        elevation: 30,
    },
    conatiner4:{
        display:'flex',flexDirection:'row',marginTop:15.5,
        borderBottomWidth:1,
        padding:10,
        marginRight:10,
        marginLeft:10,
        borderColor:'#2c6678'
    },
    name:{
        marginTop:5,
        fontSize:20,
        fontWeight:'bold',
        color:'#2c6678'
    },
    email:{
        fontSize:15,
        letterSpacing:3,
        fontWeight:'400'
    },
    no:{
        fontSize:15,
        letterSpacing:3,
        fontWeight:'300'
    },
    edit:{
        height:20,
        width:20,
        
       left:160,
       bottom:150
       
    }
})
export default Profile;