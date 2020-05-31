import React,{ Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
// Images
import { Person } from '../../Images/Images';
const { width } = Dimensions.get('window');

export default class Card extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.Container}>
                <Image source={Person} style={styles.image} />
                <View style={styles.ContextContainer}>
                    <Text style={styles.Font16Bold}>
                        Jakie west
                    </Text>
                    <Text style={styles.Font10Silver}>
                        Model and influencer
                    </Text>
                    <Text style={styles.Font9Silver}>
                        1.5 Million followers 5 courses
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden',
        height: 200,
        width: width/2.4,
        marginRight: 15
    },
    image: {
        backgroundColor: 'red',
        height: '70%',
        width: '100%'
    },
    ContextContainer: {
        marginTop: 5,
        paddingHorizontal: 10
    },
    Font16Bold: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    Font10Silver: {
        fontSize: 10,
        color: 'silver'
    },
    Font9Silver: {
        fontSize: 9,
        color: 'silver'
    }
});