import React,{ Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// Images
import { Person } from '../../Images/Images';
// Icons
import { MCIcon } from '../../Icons/Icons';

const { height, width } = Dimensions.get('window');

export default class Call extends Component {
    render() {
        return (
            <ImageBackground source={Person} style={styles.Container}>
                <View style={{width: width,alignItems: 'flex-end'}}>
                    <View style={styles.ShortScreenContainer}>
                        <Image source={Person} style={{height: '100%',width: '100%'}} />
                    </View>
                </View>
                <View style={styles.CallEndAndTimerContainer}>
                    <Text style={styles.CallTimer}>
                        0:00
                    </Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack(null)} style={styles.CallEndButton}>
                        <MCIcon name="phone-hangup" size={35} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: height,
        width: width,
        position: 'relative'
    },
    ShortScreenContainer: {
        marginTop: 40,
        marginRight: 10,
        height: 130,
        width: 90,
        borderRadius: 20,
        overflow: 'hidden'
    },
    CallEndAndTimerContainer: {
        position: 'absolute',
        bottom: 20,
        width: width,
        alignItems: 'center'
    },
    CallTimer: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    CallEndButton: {
        marginTop: 10,
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#FF2424',
        alignItems: 'center',
        justifyContent: 'center'
    }
});