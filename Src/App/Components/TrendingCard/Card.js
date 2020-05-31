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
                    <Text style={styles.Font5Silver}>
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
        height: 180,
        width: width/3.6,
        marginRight: 10
    },
    image: {
        backgroundColor: 'red',
        height: '70%',
        width: '100%',
        borderRadius: 20,
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
        fontSize: 8.5,
        color: 'silver'
    },
    Font5Silver: {
        fontSize: 5.5,
        color: 'silver'
    }
});