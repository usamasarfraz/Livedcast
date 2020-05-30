import React from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { Block, Button } from 'expo-ui-kit';

// screens
import Dashboard from '../BottomTabNavigator/BottomTab';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 15 }} />
            </Button>
          ),
          headerRight: () => (
            <Button transparent onPress={() => navigation.navigate('Login')}>
              <Octicons name="sign-out" size={18} color="black" style={{ paddingHorizontal: 15 }} />
            </Button>
          )
        }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  const [Influencer, setInfluencer] = React.useState(true);
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.6} bottom>
          <DrawerItem
            label="Manage Courses"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            label="Settings"
            labelStyle={styles.drawerLabel}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => {}}
          />
          <DrawerItem
            label="Payment History"
            labelStyle={styles.drawerLabel}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('PaymentHistory')}
          />
          <DrawerItem
            label="Calendar"
            labelStyle={styles.drawerLabel}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Calendar')}
          />
        </Block>
      </Block>

      <Block style={{marginBottom: 10,alignSelf: 'flex-start',padding: 20}} bottom flex={false}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Text style={{color: 'white',fontWeight: 'bold',marginRight: 10}}>
            Influencer Mode
          </Text>
          <Switch
            trackColor={{ false: "white", true: "#F5B6A5" }}
            thumbColor={Influencer ? "white" : "#F5B6A5"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={()=>setInfluencer(previousState => !previousState)}
            value={Influencer}
          />
        </View>
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Block style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'black' }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Block>
  );
};

const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        borderRadius: 20,
        overflow: 'hidden',
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5
    },
    drawerStyles: {
        flex: 1,
        width: '50%',
        backgroundColor: 'black'
    },
    drawerItem: {
        alignItems: 'flex-start',
        marginVertical: 0
    },
    drawerLabel: {
        color: 'white',
        fontWeight: 'bold'
    }
});