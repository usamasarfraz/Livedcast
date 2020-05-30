import React,{ Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// Images
import { Person, OnlineSign } from '../../Images/Images';
export default class OnlineUsers extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 20}}>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.OnlineText}>
                        Online
                    </Text>
                    <Text style={styles.AllText}>
                        All
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {[1,2,3,4,5].map((data,index) => {
                        return(
                            <View key={index} style={styles.ImageMainContainer}>
                                <View style={styles.ImageContainer}>
                                    <Image source={Person} style={styles.PersonImage} />
                                    <Image source={OnlineSign} style={styles.OnlineSignImage} />
                                </View>
                                <Text>
                                    Barbie
                                </Text>
                            </View>
                        )
                    })
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    OnlineText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    AllText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'silver'
    },
    ImageMainContainer: {
        flex: 1,
        height: 60,
        width: 60,
        alignItems: 'center'
    },
    ImageContainer: {
        position: 'relative',
        height: 60,
        width: 60,
    },
    PersonImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden'
    },
    OnlineSignImage: {
        position: 'absolute',
        right: -30,
        bottom: -25
    }
});