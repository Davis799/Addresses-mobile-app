import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet, ImageBackground, FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import UserForm from "./UserForm";
import axios from "axios";
import FlatButton from "../shared/button";


export default function  Home({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    const [users, setUsers] = useState(null);


    useEffect(() => {
        axios.get("http://172.20.10.7:3000/user")
        .then((res) => {
          console.log(res.data.users);  
          setUsers(res.data.users);
        });
      }, [users]);
     
    const addUser = (user) => {
        axios.post("http://172.20.10.7:3000/user", user)
                      .then((res) => {
                        console.log(res.data);
                        alert("User has been created!");
                        setUsers((currentUser) => {
                            return [ ...currentUser, user]
                        });
                      });
            
             console.log(user);
         setModalVisible(false)
    }

    const delete1 = (id)=>{
        axios.delete('http://172.20.10.7:3000/user/'+ id)
        .then((res) => {
        alert("User has been deleted!");
      });
  };
    return(
        <View style={globalStyles.container}>
            <Modal 
                visible={modalVisible}
                animationType="slide"
               >
               <TouchableWithoutFeedback>    
                <View style={globalStyles.container}> 
                <MaterialIcons 
                name= 'close'
                size={26}
                style={ globalStyles.icon3}
                onPress={()=>{setModalVisible(false)}}
                />
                <UserForm addUser={addUser}/>
                </View>
                </TouchableWithoutFeedback>
             </Modal>
            <View style={styles.flex1}>
            <Text style={globalStyles.title}>Users </Text> 
            <View style={styles.flex1}>
            <FlatButton
                text={<MaterialIcons name="add" style={globalStyles.icon2}/>}
                onPress={()=>{setModalVisible(!modalVisible)}}
             />
             </View>
             </View>
            <FlatList
                data= {users}
                keyExtractor={(item)=>item.userid}
                renderItem={({item}) => (
                    <View>
                    <TouchableOpacity style={globalStyles.paraghaph2} onPress={() => navigation.navigate('UserDetails', item)}>
                         <Text>
                             <MaterialIcons name="person" style={globalStyles.icon}/>
                            <View style={styles.flex2}> 
                                <Text style={globalStyles.addy1}>{(item.username).toString().slice(0,22)}</Text>
                                <Text style={globalStyles.addy2}>{(item.email).toString().slice(0,22)}</Text>
                            </View>
                         </Text>
                         <View style={styles.flex1}>
                         <Text>{" "}</Text>
                         <FlatButton onPress={() => delete1(item.userid)} text={<MaterialIcons name="delete" style={globalStyles.icon2}/>} />
                         </View>
                    </TouchableOpacity>
                    </View>
                )
                }
            />
        </View>
    )
}


const styles= StyleSheet.create({
    flex1:{
        flexDirection:"row",
       justifyContent:"space-between",
    },
    flex2:{
        flexDirection:"column",
        color: 'black',
        fontSize: 30,
        justifyContent:"flex-start",
        fontWeight:"bold"
    },
    flex3:{
        color:"darkgray"
    },
})
