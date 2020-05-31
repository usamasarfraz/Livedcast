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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Block, Button } from 'expo-ui-kit';

// screens
import InfluencerDashboard from '../BottomTabNavigator/BottomTab';
import Dashboard from '../../../Screens/Dashboard/Dashboard';
import MyProfile from '../../../Screens/MyProfileScreen/MyProfile';
import Discover from '../../../Screens/DiscoverScreen/Discover';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const InfluencerScreens = ({ navigation, style }) => {
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
        <Stack.Screen name="Home">{props => <InfluencerDashboard {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const Screens = ({ navigation, style }) => {
  homeScreenOptions={
    headerTransparent: true,
    headerTitle: 'Dashboard',
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerLeft: () => (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={18} color="white" style={{ paddingHorizontal: 15 }} />
      </Button>
    ),
    headerRight: () => (
      <Button transparent onPress={() => navigation.navigate('Search')}>
        <Octicons name="search" size={18} color="white" style={{ paddingHorizontal: 15 }} />
      </Button>
    )
  }
  profileScreenOptions={
    headerTitleAlign: 'center',
    headerTitle: 'My Profile',
    headerTintColor: 'black',
    headerLeft: () => (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 15 }} />
      </Button>
    )
  }
  discoverScreenOptions={
    headerStyle: {
      backgroundColor: '#F6E4D9',
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      elevation:0
        // shadowRadius: 0,
        // shadowOffset: {
        //     height: 0,
        // }
    },
    headerTitle: 'Discover',
    headerTitleAlign: 'center',
    headerTintColor: 'black',
    headerLeft: () => (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 15 }} />
      </Button>
    ),
    headerRight: () => (
      <Button transparent onPress={() => {}}>
        <MaterialCommunityIcons name="filter" size={18} color="black" style={{ paddingHorizontal: 15 }} />
      </Button>
    )
  }
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator>
        <Stack.Screen options={homeScreenOptions} name="Home">{props => <Dashboard check={true} {...props} />}</Stack.Screen>
        <Stack.Screen options={profileScreenOptions} name="MyProfile">{props => <MyProfile {...props} />}</Stack.Screen>
        <Stack.Screen options={discoverScreenOptions} name="Discover">{props => <Discover {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        {props.Influencer?
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
        :<Block flex={0.6} bottom>
          <DrawerItem
            label="Dashboard"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            label="My Profile"
            labelStyle={styles.drawerLabel}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('MyProfile')}
          />
          <DrawerItem
            label="Discover"
            labelStyle={styles.drawerLabel}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Discover')}
          />
        </Block>
        }
      </Block>

      <Block style={{marginBottom: 10,alignSelf: 'flex-start',padding: 20}} bottom flex={false}>
        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <Text style={{color: 'white',fontWeight: 'bold',marginRight: 10}}>
            Influencer Mode
          </Text>
          <Switch
            trackColor={{ false: "white", true: "#F5B6A5" }}
            thumbColor={props.Influencer ? "white" : "#F5B6A5"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={props.onValueChange}
            value={props.Influencer}
          />
        </View>
      </Block>
    </DrawerContentScrollView>
  );
};

export default ({ route }) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [Influencer, setInfluencer] = React.useState(route.params.Influencer);
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  onValueChange = () => {
    setInfluencer(previousState => !previousState);
  }
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
          return <DrawerContent Influencer={Influencer} onValueChange={onValueChange} {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => Influencer?<InfluencerScreens {...props} style={animatedStyle} />:<Screens {...props} style={animatedStyle} />}
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