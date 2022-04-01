import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";
import Header from "../shared/header";
import React from "react";
import AddyDetails from "../screens/AddyDetails";
import UpdateUser from "../screens/UpdateUser";

const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            headerTitle: () => <Header />,
        }
    },
    UserDetails:{
        screen: UserDetails,
        navigationOptions:{
            title: ' ',
            headerStyle: {  height: 60,
                backgroundColor: '#FF8456',
        }
        }
    },
    UpdateUser:{
        screen: UpdateUser,
        navigationOptions:{
            title: ' ',
        }
    },
    addyDetails:{
        screen: AddyDetails,
        navigationOptions:{
            title: ' ',
        }
    }
}

const HomeStack = createStackNavigator(screens, 
    {
    defaultNavigationOptions: {
        headerTintColor: 'black',
        headerTitleStyle:{
            fontWeight: 'bold',
            paddingVertical: 20,
            fontSize: 25,
        },
         headerStyle: {  height: 60,
             backgroundColor: '#CCCCCC',
             
     }

    }
});

export default createAppContainer( HomeStack);