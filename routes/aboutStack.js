import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../screens/About";
import Header from "../shared/header";
import React from "react";


const screens = {
    About:{
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle: { backgroundColor: '#6f3b2f', height: 70 }
    }
});

export default createAppContainer(AboutStack);