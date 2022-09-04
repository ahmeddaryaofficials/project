import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from "react-native-calendars";
const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
               <Icon  name='close' size={20} color="#2c6678"/>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.conatiner}
       
        onPress={() => setModalVisible(true)}
      >
        
             <Icon style={{margin:10}} name='calendar' size={25} color="#2c6678"/>
            
             </TouchableOpacity>
             
    </View>
  );
};

const styles = StyleSheet.create({
    
        conatiner:{
            backgroundColor:'#fff',
          
            color:'#fff',
           
            borderColor:'#2c6678',
           width:'20%',
           bottom:60,
           marginLeft:'auto',
           marginRight:5,
           justifyContent:'center',
           alignItems:'center',
            borderRadius:100
              },
     
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

});

export default Modals;