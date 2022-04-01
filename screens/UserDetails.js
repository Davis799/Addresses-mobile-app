import React, {useState, useEffect, useRef} from "react";
import { View, Text, Button, ImageBackground, FlatList, TouchableOpacity, TouchableWithoutFeedback, Modal, Keyboard, StyleSheet} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';
import UpdateUser from "./UpdateUser";
import Addaddy from "./Addaddy";
import axios from "axios";
import FlatButton from "../shared/button";
import { Avatar } from "react-native-elements";


export default function  UserDetails({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    const [addyModal, setaddyModal] = useState(false);
    const [addresses, setaddys] = useState(navigation.getParam('addresses'));
    const [User, setUser] = useState(
        navigation.getParam('username'),
        navigation.getParam('email')
    )

    const deletes = (id)=>{
        axios.delete('http://172.20.10.7:3000/addressbook/'+ id)
        .then(() => {
        navigation.goBack();
        alert("Address has been deleted!");
    
      });
  }
        

    const update = (user) =>{
        axios.patch('http://172.20.10.7:3000/user/'+navigation.getParam('userid'), user)
        .then((res) => {
            alert("User has been updated!");
        })
        setModalVisible(false);
    }

    const addAddy = (addy) => {
        axios.post("http://172.20.10.7:3000/addressbook", {userid:navigation.getParam('userid'), id:addy.id, name:addy.name, phone:addy.phone, email:addy.email, work:addy.work})
                      .then((res) => {
                        console.log(res.data);
                        alert("Address has been created!");
                        setaddys((currentaddy) => {
                            return [ ...currentaddy, addy]
                        })
                        })
                    setaddyModal(false);
    }

    return(
        <View style={globalStyles.container}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); console.log('dismissed');}}> 
            <Modal 
              
              visible={modalVisible}
              animationType="slide"
             >  
              <View style={globalStyles.container}> 
              <MaterialIcons 
              name= 'close'
              size={26}
              style={ globalStyles.icon3}
              onPress={()=>{setModalVisible(false)}}
              />
              <UpdateUser update={update}/>
              </View>
           </Modal>
           </TouchableWithoutFeedback>

           <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); console.log('dismissed');}}> 
           <Modal 
              
              visible={addyModal}
              animationType="slide"
             >   
              <View style={globalStyles.container}> 
              <MaterialIcons 
              name= 'close'
              size={26}
              style={ globalStyles.icon3}
              onPress={()=>{setaddyModal(false)}}
              />
              <Addaddy addAddy={addAddy}/>
            
              </View>
           </Modal>
           </TouchableWithoutFeedback>
           <ImageBackground source={require('../assets/topbg.jpg')} style={{justifyContent:'flex-start'}}>
             <Text> {}</Text>
             <Avatar
                   size="large"
                    rounded
                    icon={{ name: 'person', color: 'dodgerblue', size:80 }}
                    // source={{
                    //     uri:
                    //     'https://avatars.dicebear.com/v2/avataaars/'+Math.round(Math.random()*10000000)+'.svg',
                    // }}
                    />
            <View style={styles.flex4}>
            <Text style={globalStyles.title3}> { navigation.getParam('username') } </Text>
            </View>
            </ImageBackground>
            <View style={globalStyles.paraghaph2}>
                <Text>
                <View style={styles.flex2}> 
                <Text style={globalStyles.addy1}> { navigation.getParam('username') }</Text>
                <Text style={globalStyles.addy2}> { navigation.getParam('email') }</Text>
                </View>
                </Text>
                <View style={styles.flex1}>
                <FlatButton text={<MaterialIcons name="update" style={globalStyles.icon2}/>} onPress={()=>{setModalVisible(!modalVisible)}}/>
                </View>
            </View>
            <View style={styles.flex1}>
            <Text style={globalStyles.title3}>Addresses</Text> 
            <View style={styles.flex1}>
            <FlatButton text={<MaterialIcons name="add" style={globalStyles.icon2}/>} onPress={()=>{setaddyModal(!addyModal)}}/>
             </View>
             </View>
            <FlatList
                 data= {addresses}
                 keyExtractor={(item)=>item.id}
                 renderItem={({item}) => (
                       <TouchableOpacity style={globalStyles.paraghaph2} onPress={ () => navigation.navigate('addyDetails', item)}>
                            <View style={styles.flex1}>
                                {/* <MaterialIcons name="article" style={globalStyles.icon}/> */}
                                <View style={styles.flex2}> 
                                    <Text style={globalStyles.titleText}> {item.name} </Text>
                                    <Text style={globalStyles.addy2}> {"    "}{item.email} </Text>
                                    <Text style={globalStyles.addy2}> {"    "}{item.phone} </Text>
                                    <Text style={globalStyles.addy2}> {"    "}{item.work} </Text>
                                 </View>
                            </View>
                            <View style={styles.flex1}>
                                  <FlatButton onPress={() => deletes(item.id)} text={<MaterialIcons name="delete" style={globalStyles.icon2}/>} />
                            </View>
                        </TouchableOpacity>
                     )
                     }
            />
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
        color:"darkgray"
    },
    flex4:{
        flexDirection:'column'
    },
})