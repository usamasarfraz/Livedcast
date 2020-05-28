import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// Main Navigation
import MainNavigation from './Src/App/Components/Navigation/MainNavigation';

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide();
  }
  render(){
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        <MainNavigation />
      </>
    );
  }
};