import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Users({ item }) {

return(
    <TouchableOpacity>
        <Text style={styles.item}>
        <Text>{item.name} {"\n"}</Text>
        <Text>{item.email}</Text>
        </Text>
    </TouchableOpacity>
)
}


const styles = StyleSheet.create({
    item: {
      padding: 30,
      color: 'white',
      marginTop: '15',
      borderBottomWidth: 1,
      borderBottomColor: '#6f3b2f',
      backgroundColor: '#1e1e1e',
      fontSize: 23
    }
})