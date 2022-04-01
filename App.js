import 'react-native-gesture-handler';
import React from "react";
import Navigator from './routes/homeStack'


export default function App(){
    return (
       <Navigator />

    );
}



























// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TextInput, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
// import Header from './components/Header';
// import Users from './components/Users';
// import AddUser from './components/AddUser';

// export default function App() {
//   const [users, setUsers] = useState([
//     {name: 'Dave', email: 'dave@gmail.com', key: '1'},
//     {name: 'John', email: 'john@gmail.com', key: '2'},
//     {name: 'Ade', email: 'aderub@gmail.com', key: '3'}
//   ]);

//   const submitUser = ({User}) => {
//     setUsers((prevUsers) => {
//       return [
//         { name: User.name, email: User.email, key: Math.random().toString()},
//         ...prevUsers
//       ]
//     })
//   }

//   return (
//     <TouchableWithoutFeedback onPress={()=>{ 
//       console.log("dismiss keyboard");
//     }}>
//     <View style={styles.container}>
//        <Header/>
//         <View style={styles.content}>
//         <AddUser submituser={submitUser}/>
//          <View style={styles.list}>
//          <Text style={styles.list}> USERS </Text>
//           <FlatList
//             data={users}
//             renderItem={({ item }) => (
//              <Users item={item}/>
//             )}
//           />
//          </View>
//         </View>
//       </View>
//      </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   content: {
//     padding: 10, 
//     flex: 1,
//   },
//   list: {
//     flex: 1,
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 30,
//     marginBottom: 7,
//     fontWeight: 'bold' 
//   }
// });
