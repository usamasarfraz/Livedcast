import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen(props) {
    return (
        <View style={styles.screenStyle}>
            <View style={styles.InputSection}>
                <TextInput placeholder="Amount (USD)" style={styles.Input} />
            </View>
            <View style={styles.InputSection}>
                <Picker
                style={{height: 30, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({value: itemValue})
                }>
                    <Picker.Item label="Paypal" value="paypal" />
                </Picker>
            </View>
            <View style={styles.summaryContainer}>
                <Text style={{fontSize: 18,fontWeight: 'bold'}}>
                    Summary
                </Text>
                <View style={{flexDirection: 'row',marginTop: 15}}>
                    <View style={styles.Flex1AlignItemCenter}>
                        <Text style={styles.HeadingText}>
                            USD 50
                        </Text>
                        <Text style={styles.ValueText}>
                            {props.screen === 1?"Deposit": "Withdraw"}
                        </Text>
                    </View>
                    <View style={styles.Flex1AlignItemCenter}>
                        <Text style={styles.HeadingText}>
                            5%
                        </Text>
                        <Text style={styles.ValueText}>
                            Fee
                        </Text>
                    </View>
                    <View style={styles.Flex1AlignItemCenter}>
                        <Text style={styles.HeadingText}>
                            USD 52.5
                        </Text>
                        <Text style={styles.ValueText}>
                            Total
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function DepositScreen(props) {
  return (
    <HomeScreen screen={1} {...props} />
  );
}

function WithdrawScreen(props) {
    return (
      <HomeScreen screen={2} {...props} />
    );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <Tab.Navigator tabBarOptions={tabBar}>
                <Tab.Screen name="Deposite" component={DepositScreen} />
                <Tab.Screen name="Withdraw" component={WithdrawScreen} />
            </Tab.Navigator>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        height: 280,
        width: '100%',
        backgroundColor: 'white'
    },
    screenStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    InputSection: {
        paddingHorizontal: 7,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginTop: 10
    },
    Input: {
        padding: 3,
        paddingLeft: 0
    },
    summaryContainer: {
        padding: 10,
        marginTop: 20,
        height: 120,
        width: '100%',
        borderColor: 'silver',
        borderWidth: 0.4,
        borderRadius: 10,
        overflow: 'hidden'
    },
    Flex1AlignItemCenter: {
        flex: 1,
        alignItems: 'center'
    },
    HeadingText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'pink'
    },
    ValueText: {
        fontSize: 14,
        color: 'silver'
    }
})
tabBar = {activeTintColor: 'black',inactiveTintColor: 'grey',indicatorStyle:{backgroundColor: 'black'}}