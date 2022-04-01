import React, {useState, useEffect} from "react";
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, TouchableWithoutFeedback, Modal, Keyboard, StyleSheet} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import FlatButton from "../shared/button";
import UpdateAddy from "./UpdateAddy";

export default function  UserDetails({navigation}){
    const [updateAddy, setupdateAddy] = useState(false);

    const deletes = ()=>{
        axios.delete('http://172.20.10.7:3000/addressbook/'+ navigation.getParam('id'))
        .then(() => {
        navigation.goBack();
        alert("Address has been deleted!");
      });
  }

    const update = (addy) => {
        axios.patch('http://172.20.10.7:3000/addressbook/'+navigation.getParam('id'), addy)
        .then((res) => {
            alert("Address has been updated!");
        })
        setupdateAddy(false);
    }

    return(
        <View style={globalStyles.container}>
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <Modal 
              visible={updateAddy}
              animationType="slide"
             >    
              <View style={globalStyles.container}> 
              <MaterialIcons 
              name= 'close'
              size={26}
              style={ globalStyles.icon3}
              onPress={()=>{setupdateAddy(false)}}
              />
              <UpdateAddy update={update}/>
              </View>
           </Modal>
        </TouchableWithoutFeedback>
        <Text style={globalStyles.title3}> ADDRESS</Text>
        <View style={styles.flex1}>
        <Text style={globalStyles.title}>{ navigation.getParam('name') }</Text>
        <FlatButton text={<MaterialIcons name="update" style={globalStyles.icon2}/>} onPress={()=>{setupdateAddy(!updateAddy)}}/>
        </View>
        <View style={globalStyles.paraghaph2}>
        <View style={styles.flex1}>
        <MaterialIcons name="article" style={globalStyles.icon}/>
        <View>
        <Text style={styles.flex3}> Name </Text>
        <Text style={globalStyles.addy1}> {"      "}{ navigation.getParam('name') } {"\n"}</Text>
        <Text style={styles.flex3}> Email  </Text>
        <Text style={globalStyles.addy1}> {"      "}{ navigation.getParam('email') } {"\n"}</Text>
        <Text style={styles.flex3}> Phone </Text>
        <Text style={globalStyles.addy1}> {"      "}{ navigation.getParam('phone') } {"\n"}</Text>
        <Text style={styles.flex3}> Work </Text>
        <Text style={globalStyles.addy1}> {"      "}{ navigation.getParam('work') } {"\n"}</Text>
        </View>
        </View>
        </View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <View style={styles.flex1}>
        </View>
        </View>
    )
}


const styles= StyleSheet.create({
    flex1:{
        flexDirection:"row",
       justifyContent:'space-between',
       paddingTop: 10
    },
    flex2:{
        flexDirection:"column",
        color: 'black',
        fontSize: 30,
        justifyContent:"flex-start",
        fontWeight:"bold"
    },
    flex3:{
        color: 'black',
        fontSize: 25,
        textAlign: 'left',
    },
    flex4:{
        flexDirection:'column'
    }
})