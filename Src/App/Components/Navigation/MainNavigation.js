import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// screens
import Login from '../../Screens/LoginScreen/Login';

class MainNavigation extends Component {
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default MainNavigation;