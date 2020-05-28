import React,{ Component } from 'react';
import { View, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
// Images
import { Person } from '../../Images/Images';
// Icons
import { FAIcon } from '../../Icons/Icons';

export default class ProfileImage extends Component {
    render() {
        return (
            <View style={styles.AvatarMainContainer}>
                <View style={styles.AvatarOuterContainer}>
                    <ImageBackground imageStyle={{borderRadius: 71}} source={Person} style={styles.Avatar} />
                </View>
                <TouchableOpacity style={styles.IconContainer}>
                    <FAIcon name="pencil" color="white" size={18} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    AvatarMainContainer: {
        position: 'relative',
        alignSelf: 'center'
    },
    AvatarOuterContainer: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    Avatar: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },
    IconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: 'black',
        position: 'absolute',
        right: -3,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1
    }
});