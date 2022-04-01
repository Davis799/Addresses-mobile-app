import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, ImageBackground, ScrollView } from 'react-native'; 
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const UserSchema = yup.object({
    username: yup.string()
            .required()
            .min(4),
    email: yup.string()
        .required()
        .min(7),          
})


export default function updateUser({update}){
     
    return(
       <View style={globalStyles.container}>
    
         <Formik
            initialValues={{ userid:Number, username:"", email:""}}
            validationSchema={UserSchema}
            onSubmit ={(values, actions) => {
                actions.resetForm()
                update(values);
            }}
         >
             {(props) => (
                 <ScrollView>
                <View style={styles.center}>
                    <Text style={globalStyles.title}>UPDATE USER</Text>
                     <Text style={globalStyles.input}> Name {" "}
                     </Text>
                     <TextInput
                      style={globalStyles.hey}
                      placeholder=""
                      onChangeText={props.handleChange('username')}
                      value={props.values.username}
                      onBlur={props.handleBlur('username')}
                     />
                     <Text style={globalStyles.error}>{props.touched.username && props.errors.username}</Text>

                     <Text style={globalStyles.input}> Email {" "}
                     </Text>
                     <TextInput
                      style={globalStyles.hey}
                      placeholder=""
                      onChangeText={props.handleChange('email')}
                      value={props.values.email}
                      onBlur={props.handleBlur('email')}
                     />
                     <Text style={globalStyles.error}>{props.touched.email && props.errors.email}</Text>
                     <View style={styles.flex1}>
                      <FlatButton text='SAVE' onPress={props.handleSubmit} />
                    </View>
                 </View>
                 </ScrollView>
             )
             }
         </Formik>
       </View> 


    )
}

const styles= StyleSheet.create({
    flex1:{
        flexDirection:"row",
       justifyContent:"space-evenly",
       paddingVertical: 20
    },
    flex2:{
        flexDirection:"row",
    },
    center:{
        marginTop: 72
    }
})
