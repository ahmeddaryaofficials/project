import React from 'react';
import {View ,Image,StyleSheet, Button,Text,TouchableOpacity, TextInput,ScrollView,Modal,Pressable,FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Bill=({navigation,route})=>{
    const data =route.params;
    let name=data.Name;
    let dis=((1-(data.data.data.disprice/data.data.data.price))*100).toFixed(1)
    return(
        <View style={styles.conatiner1}> 
       
            <View style={{margin:20,borderWidth:1,marginTop:65,padding:10,height:'80%'}}>

           <Text style={{fontSize:20,letterSpacing:2}}> Dawat Bill</Text>
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
          
           <Text style={{left:'auto'}}>{data.data.data.Name}</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>{data.data.data.price}</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
          
           <Text style={{left:'auto'}}>FullName</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>User123</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
          
           <Text style={{left:'auto'}}>NIC</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>4210-0919934-5</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
          
           <Text style={{left:'auto'}}>Date</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>{data.data.date}</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
          
           <Text style={{left:'auto'}}>Persons</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>{data.data.person}</Text>
           </View>
           
           <View style={{display:'flex',flexDirection:'row',marginTop:10}}>
          
           <Text style={{left:'auto'}}>Discount %</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto'}}>{dis}%</Text>    
          
           </View>
           <Text>------------------------------------------------------</Text>
           <View style={{display:'flex',flexDirection:'row',marginTop:'auto',marginBottom:20}}>
          
           <Text style={{left:'auto',fontSize:15,marginLeft:10}}>Actual Price</Text>
           <Text style={{color:"#2c7768",marginLeft:'auto',fontSize:15,marginRight:10,letterSpacing:2}}>{data.data.data.disprice}</Text>
           </View>
           <Entypo style={{marginLeft:'auto',marginRight:20}} name="print" size={32} color="#2c6678" />
           
           </View>
           
          
        </View>
    );
}
export default Bill;
const styles=StyleSheet.create({
    conatiner1:{
      backgroundColor:'#fff',
      height:'100%',
      width:'100%'
        },

    })