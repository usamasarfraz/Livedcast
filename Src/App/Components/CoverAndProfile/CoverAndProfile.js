import React,{ Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';

const { height } = Dimensions.get('window');
// Images
import { Person, ProfilePicturePad } from '../../Images/Images';
export default class About extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={{minHeight: (height/2.6)+60}}>
                    <Image style={styles.CoverImage} source={Person} />
                    <ImageBackground source={ProfilePicturePad} style={styles.image}>
                        <View style={styles.ProfileDetailsContainer}>
                            <View style={{flex: 1.1}}>
                                <Image style={styles.ProfileImage} source={Person} />
                            </View>
                            <View style={{flex: 3,paddingLeft: 10}}>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Text style={styles.NameText}>
                                        Emma Watson
                                    </Text>
                                    <Text style={styles.VerifiedText}>
                                        Verified
                                    </Text>
                                </View>
                                <View style={{flexDirection: 'row',marginTop: 10}}>
                                    <View style={styles.AlignItemsCenter}>
                                        <Text style={styles.Font15Bold}>
                                            34K
                                        </Text>
                                        <Text style={styles.Font12Grey}>
                                            Followers
                                        </Text>
                                    </View>
                                    <View style={styles.AlignItemsCenter}>
                                        <Text style={styles.Font15Bold}>
                                            120
                                        </Text>
                                        <Text style={styles.Font12Grey}>
                                            Following
                                        </Text>
                                    </View>
                                    <View style={styles.AlignItemsCenter}>
                                        {this.props.check?
                                        <Text style={styles.Font15Bold}>
                                            $50
                                        </Text>
                                        :<Text style={[styles.Font15Bold,{color: '#4CAF50'}]}>
                                            online
                                        </Text>
                                        }
                                        {this.props.escrow?
                                        <TouchableOpacity onPress={this.props.toggleEscrow}>
                                            <Text style={styles.Font12Grey}>
                                                Escrow
                                            </Text>
                                        </TouchableOpacity>
                                        :<Text style={styles.Font12Grey}>
                                            {this.props.check?"Escrow":"Status"}
                                        </Text>
                                        }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1
    },
    CoverImage: {
        height: height/2.6,
        width: '100%'
    },
    image: {
        height: 130,
        marginTop: -65,
        resizeMode: "cover",
    },
    ProfileDetailsContainer: {
        marginHorizontal: 37,
        marginVertical: 25,
        flexDirection: 'row'
    },
    ProfileImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    NameText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    VerifiedText: {
        fontSize: 10,
        color: '#F5B6A5',
        padding: 2,
        paddingTop: 3
    },
    AlignItemsCenter: {
        flex: 1,
        alignItems: 'center'
    },
    Font15Bold: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Font12Grey: {
        fontSize: 12,
        color: 'grey',
        paddingHorizontal: 2
    }
});