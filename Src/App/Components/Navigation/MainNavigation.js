import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../Header/Header';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import Login from '../../Screens/LoginScreen/Login';
import Register from '../../Screens/RegisterInfluencerScreen/Register';
import Drawer from './DrawerNavigation/Drawer';
import Call from '../../Screens/CallScreen/Call';
import Calendar from '../../Screens/CalendarScreen/Calendar';
import PaymentHistory from '../../Screens/PaymentHistoryScreen/PaymentHistory';

class MainNavigation extends Component {
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                    <Stack.Screen options={Header} name="Register" component={Register} />
                    <Stack.Screen options={{ headerShown: false }} name="Drawer" component={Drawer} />
                    <Stack.Screen options={{ headerTransparent: true, headerTitle: null }} name="Call" component={Call} />
                    <Stack.Screen options={{ headerTitleAlign: "center" }} name="Calendar" component={Calendar} />
                    <Stack.Screen options={{ headerTitle: 'Payment History', headerTitleAlign: "center" }} name="PaymentHistory" component={PaymentHistory} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default MainNavigation;