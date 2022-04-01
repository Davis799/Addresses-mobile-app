import React from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView, ImageBackground } from 'react-native'; 
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const UserSchema = yup.object({
    name: yup.string()
          .required()
          .min(2),
    phone: yup.number()
           .required()
           .min(10),      
    email: yup.string()
        .required()
        .min(7),
    work: yup.string()
          .required()
          .min(4)              
})


export default function Addaddy({ addAddy }){

    return(
       <View style={globalStyles.container}>
         <Formik
            initialValues={{ id:Math.round(Math.random()*1000), name: '', phone:'', email: '', work: '', userid:Number}}
            validationSchema={UserSchema}
            onSubmit ={(values, actions) => {
                actions.resetForm();
                addAddy(values);
            }}>

            {(props) => (
                <View>
                <ScrollView>
                <View>
                
                    <Text style={globalStyles.title}>ADD ADDRESS</Text>
                     <Text style={globalStyles.input}> Name {" "}
                     </Text>
                     <TextInput
                      style={globalStyles.hey}
                      placeholder=""
                      onChangeText={props.handleChange('name')}
                      value={props.values.name}
                      onBlur={props.handleBlur('name')}
                     />
                     <Text style={globalStyles.error}>{props.touched.name && props.errors.name}</Text>

                     <Text style={globalStyles.input}> Phone {" "}
                      </Text>
                      <TextInput
                      style={globalStyles.hey}
                      placeholder=""
                      onChangeText={props.handleChange('phone')}
                      value={props.values.phone}
                      onBlur={props.handleBlur('phone')}
                      keyboardType="numeric"
                     />
                     <Text style={globalStyles.error}>{props.touched.phone && props.errors.phone}</Text>

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

                     <Text style={globalStyles.input}> Work {" "}
                      </Text>
                      <TextInput
                      style={globalStyles.hey}
                      placeholder=""
                      onChangeText={props.handleChange('work')}
                      value={props.values.work}
                      onBlur={props.handleBlur('work')}
                     />
                     <Text style={globalStyles.error}>{props.touched.work && props.errors.work}</Text>
                 </View>
                 </ScrollView>
                 <View style={styles.flex1}>
                 <FlatButton text='Create' onPress={props.handleSubmit} />
                 </View>
                 </View>
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
    }
})