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
import About from '../../Screens/AboutScreen/About';
import Search from '../../Screens/SearchScreen/Search';

class MainNavigation extends Component {
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                    <Stack.Screen options={Header} name="Register" component={Register} />
                    <Stack.Screen initialParams={{ Influencer: true }} options={{ headerShown: false }} name="Drawer" component={Drawer} />
                    <Stack.Screen initialParams={{ Influencer: false }} options={{ headerShown: false }} name="Dashboard" component={Drawer} />
                    <Stack.Screen options={{ headerTransparent: true, headerTitle: null }} name="Call" component={Call} />
                    <Stack.Screen options={{ headerTitleAlign: "center" }} name="Calendar" component={Calendar} />
                    <Stack.Screen options={{ headerTitle: 'Payment History', headerTitleAlign: "center" }} name="PaymentHistory" component={PaymentHistory} />
                    <Stack.Screen options={{ headerTransparent: true, headerTitle: 'Emma Watson', headerTitleAlign: "center" }} name="About" component={About} />
                    <Stack.Screen options={{ headerTitle: 'Search', headerTitleAlign: "center" }} name="Search" component={Search} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default MainNavigation;