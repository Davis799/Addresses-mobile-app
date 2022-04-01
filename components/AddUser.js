import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function AddUser({submituser} ) {
    const [User, setUser] = useState({
        name:" ", email: " "
    });
    
    const changeHandler1 = (name) => {
      setUser({ name: name})
    }
    const changeHandler2 = (email) => {
       setUser({ email: email})
     }

    return (
        <View>
            <Text style= {styles.header}> CREATE USER </Text>
            <Text style= {styles.text}> Name </Text>
            <TextInput
            style= {styles.input}
            placeholder='Enter username...'
            placeholderTextColor= 'gray'
            onChangeText={(name) => changeHandler1(name)} 
            />
            <Text style= {styles.text}> Email </Text>
            <TextInput
            style= {styles.input}
            placeholder='Enter email...'
            placeholderTextColor= 'gray'
            onChangeText={(email) => changeHandler2(email)}
            />
            <Button onPress={() =>  submituser({User})} title='Add User' color='#6f3b2f' />
        </View>
    )
}

const styles = StyleSheet.create({
   input: {
       fontSize: 23,
       color: 'white',
       marginBottom: 10,
       paddingHorizontal: 8,
       paddingVertical: 6,
       borderBottomWidth: 1,
       borderBottomColor: '#6f3b2f',
       textDecorationColor: 'white'
   },
   header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginBottom: 7,
    fontWeight: 'bold'
   },
   text: {
    fontSize: 23,
    color: 'white',
   }


})