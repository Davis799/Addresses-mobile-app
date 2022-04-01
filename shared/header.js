import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../styles/global";

export default function Header(){


    return (
        <View style={style.header}>
            <View>
              <Text style={style.headerText}> ADDRESSBOOK </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    header:{
        flexDirection: 'row',
        alignItems: 'left',
       // justifyContent: 'flex-start'
    },
    headerText:{
       fontWeight: 'bold',
       fontSize: 40,
       color: 'black',
       letterSpacing: 2,
       textShadowColor: 'gray',
        textShadowRadius: 7,
        textShadowOffset: { 
            width: 5,
            height: 5
          },
        textAlign:"left"  
    },
    icon:{
        padding: 2,
        marginBottom: 5,
        marginLeft: 2,
        color: '#aec364',
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})