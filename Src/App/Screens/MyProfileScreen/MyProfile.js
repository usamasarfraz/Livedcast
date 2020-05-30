import React,{ Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// Images
import { Person, ProfilePicturePad } from '../../Images/Images';
// Icons
import { FAIcon } from '../../Icons/Icons';
// Components
import Course from '../../Components/CoursePad/Course';

export default class MyProfile extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <ScrollView>
                    <View style={{paddingHorizontal: 20}}>
                        <View style={styles.CoverImageContainer}>
                            <Image source={Person} style={styles.CoverImage} />
                            <TouchableOpacity style={styles.CoverEditButton}>
                                <FAIcon name="pencil" color="black" size={16} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ImageBackground source={ProfilePicturePad} style={styles.image}>
                        <View style={styles.ProfileDetailsContainer}>
                            <View style={{flex: 1.1,position: 'relative'}}>
                                <Image style={styles.ProfileImage} source={Person} />
                                <TouchableOpacity style={styles.ProfileEditButton}>
                                    <FAIcon name="pencil" color="black" size={16} />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 3,paddingLeft: 10}}>
                                <View style={styles.NameContainer}>
                                    <Text style={styles.NameText}>
                                        Emma Watson
                                    </Text>
                                    <TouchableOpacity style={{marginLeft: 10}}>
                                        <FAIcon name="pencil" color="black" size={16} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.EscrowContainer}>
                                    <View>
                                        <Text style={styles.Font15Bold}>
                                            $12
                                        </Text>
                                        <Text style={styles.Font12Grey}>
                                            Escrow
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.CoursesContainer}>
                        <Course />
                    </View>
                </ScrollView>
                <View style={styles.BottomBar}>
                    <TouchableOpacity style={styles.LoginButton}>
                        <Text style={styles.LoginButtonText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        position: 'relative'
    },
    CoverImageContainer: {
        marginTop: 15,
        position: 'relative'
    },
    CoverImage: {
        height: 180,
        width: '100%',
        borderRadius: 30,
        overflow: 'hidden'
    },
    CoverEditButton: {
        position: 'absolute',
        bottom: 15,
        right: 15
    },
    image: {
        height: 160,
        width: '100%',
        marginTop: -10,
        resizeMode: "cover",
    },
    ProfileDetailsContainer: {
        marginHorizontal: 30,
        marginVertical: 37,
        flexDirection: 'row'
    },
    ProfileImage: {
        height: '100%',
        width: '100%',
        borderRadius: 20
    },
    ProfileEditButton: {
        position: 'absolute',
        bottom: 8,
        right: 8
    },
    NameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    NameText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    EscrowContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    Font15Bold: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Font12Grey: {
        fontSize: 12,
        color: 'grey',
        paddingHorizontal: 2
    },
    CoursesContainer: {
        marginTop: -10,
        marginBottom: 70
    },
    BottomBar: {
        position: 'absolute',
        height: 70,
        width: '100%',
        bottom: -7,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    LoginButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    LoginButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
});