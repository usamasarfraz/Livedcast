import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { i, ChatSmall, Money, Diploma } from '../../../Images/Images';
import Message from '../../../Screens/MessageScreen/Message';
import About from '../../../Screens/AboutScreen/About';
import Courses from '../../../Screens/CoursesScreen/Courses';
import Prices from '../../../Screens/PricesScreen/Prices';
const Tab = createBottomTabNavigator();

function AboutScreen(props) {
  return (
    <About {...props} check={true} />
  )
}
function MessageScreen(props) {
  return (
    <Message {...props} check={true} />
  )
}
function CoursesScreen(props) {
  return (
    <Courses {...props} check={true} />
  )
}
function PricesScreen(props) {
  return (
    <Prices {...props} check={true} />
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="About"
      tabBarOptions={{
        activeTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Image source={i} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Image source={ChatSmall} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color, size }) => (
            <Image source={Diploma} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Prices"
        component={PricesScreen}
        options={{
          tabBarLabel: 'Prices',
          tabBarIcon: ({ color, size }) => (
            <Image source={Money} tintColor={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <MyTabs />
  );
}