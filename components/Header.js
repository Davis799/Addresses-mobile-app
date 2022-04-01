import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style= {styles.header}>
         <Text style={styles.title}> ADDRESSBOOK </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#6f3b2f',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})