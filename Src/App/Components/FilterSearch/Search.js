import React,{ Component } from 'react';
import { View, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
// Images
import { SearchBar } from '../../Images/Images';
// Icons
import Octicons from 'react-native-vector-icons/Octicons';
import { MCIcon } from '../../Icons/Icons';

export default class Search extends Component {
    render() {
        return (
            <ImageBackground source={SearchBar} style={styles.Container}>
                <View style={styles.InputContainer}>
                    <TextInput placeholder="Type here to search..." placeholderTextColor="black" />
                </View>
                <View style={styles.IconsContainer}>
                    <TouchableOpacity>
                        <Octicons name="search" size={18} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPressFilter} style={{marginLeft: 10}}>
                        <MCIcon name="filter" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        borderRadius: 30,
        overflow: 'hidden',
        padding: 5,
        paddingHorizontal: 20
    },
    InputContainer :{
        flex: 5
    },
    IconsContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});