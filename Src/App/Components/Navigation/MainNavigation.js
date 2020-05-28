import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../Header/Header';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import Login from '../../Screens/LoginScreen/Login';
import Register from '../../Screens/RegisterInfluencerScreen/Register';
import Drawer from './DrawerNavigation/Drawer';

class MainNavigation extends Component {
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                    <Stack.Screen options={Header} name="Register" component={Register} />
                    <Stack.Screen options={{ headerShown: false }} name="Drawer" component={Drawer} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default MainNavigation;