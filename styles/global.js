import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
       flex: 1,
       paddingHorizontal: 2,
       //paddingVertical: 3,
       backgroundColor: "#CCCCCC"
    },
    title: {
       marginTop: 1,
       color: 'black',
       fontSize: 40,
       justifyContent: 'center',
       textAlign: 'left',
       fontWeight: 'bold',
       paddingTop: 7,
       paddingBottom: 10,
    },
    title2: {
        marginTop: 1,
        color: '#aec364',
        fontSize: 23,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        borderBottomWidth: 4,
        borderBottomColor: '#6f3b2f',
        borderTopWidth: 4,
        borderTopColor: '#6f3b2f',
        paddingVertical: 10,
        textShadowColor: 'black',
        textShadowRadius: 2,
        textShadowOffset: { 
            width: 2,
            height: 2
          }
     },
     title3:{
        marginTop: 1,
        color: 'dodgerblue',
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
        paddingTop: 7,
        paddingBottom: 1,
     },

    titleText: {
        fontSize: 30,
        color:"black",
        fontWeight:"700"
    },

    paraghaph:{
        lineHeight: 20,
        justifyContent: "space-between",
        textAlign: 'left',
        padding: 30,
        paddingLeft: 50,
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#6f3b2f',
        backgroundColor: '#1e1e1e',
        fontSize: 20
    },
    paraghaph2:{
        lineHeight: 20,
        justifyContent:"space-between",
        textAlign: 'left',
        padding: 15,
        //paddingLeft: 10,
        color: 'white',
        marginVertical: 5,
        borderRadius:10,
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        backgroundColor: 'white',
        fontSize: 30,
        flexDirection:'row'
    },
    icon:{
        color: 'dodgerblue',
        fontSize: 40,
        paddingHorizontal: 7,
        justifyContent: 'left',
        textAlign: 'left',
        fontWeight: 'bold',
    
    },
    icon2:{
        color: 'black',
        fontSize: 30,
        justifyContent: 'left',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    icon3:{
        color: 'red',
        fontSize: 35,
        paddingTop: 7,
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'left',
        textAlign: 'right',
        fontWeight: 'bold',
    },
    icon4:{
        color: 'dodgerblue',
        fontSize: 40,
        paddingHorizontal: 7,
        justifyContent: 'left',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    input:{
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
        textAlign: 'left',
        marginRight: 5,
        justifyContent:'space-evenly',
        textShadowColor: 'black',
    },
    hey:{ 
        lineHeight: 23,
        textAlign: 'center',
        padding: 11,
        color: 'black',
        fontSize: 22,
        borderWidth: 2,
        marginHorizontal:5,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor:'dodgerblue',
        backgroundColor: 'white',
    },
    error:{
        color: 'red',
        textAlign: 'right'
    },
    addy1:{
        fontSize: 20,
        color:"black",
        fontWeight:"bold"
    },
    addy2:{
        fontSize: 20,
        color:"darkgray",
        fontWeight:"700"
    },
    user:{
        color: 'white',
        fontSize: 23,
        justifyContent: 'center',
        textAlign: 'center',
        paddingVertical: 5
    },
    image:{
            flex: 2,
            justifyContent: "center"
    }

})