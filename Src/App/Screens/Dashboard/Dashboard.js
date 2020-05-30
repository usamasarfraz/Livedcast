import React,{ Component } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// Components
import CoverAndProfile from '../../Components/CoverAndProfile/CoverAndProfile';
import Course from '../../Components/CoursePad/Course';
import OnlineUsersBar from '../../Components/OnlineUsersBar/OnlineUsers';
// Images
import { Person } from '../../Images/Images';

const { height } = Dimensions.get('window');

export default class Dashboard extends Component {
    render() {
        let coursesList = [{title: "Enrolled"},{title: "Cancel \n& Refund"}];
        return (
            <View style={{position: 'relative'}}>
                <ScrollView>
                    <CoverAndProfile />
                    <View style={styles.FlexRowContentCenter}>
                        <View>
                            <Image source={Person} style={styles.ModelPicture} />
                        </View>
                        <View style={styles.ModelCoursesAndProfessionContainer}>
                            <Text style={styles.ModelCourses}>
                                Emma Watson Courses enrolled
                            </Text>
                            <Text style={styles.ModelProfession}>
                                Model, Actress
                            </Text>
                        </View>
                    </View>
                    <View style={styles.CoursesContainer}>
                        {
                            coursesList.map((data,index)=>{
                                return (
                                    <Course key={index} buttonTitle={data.title} />
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={styles.OnlineBar}>
                    <OnlineUsersBar />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    FlexRowContentCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModelPicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden'
    },
    ModelCoursesAndProfessionContainer: {
        marginLeft: 10
    },
    ModelCourses: {
        fontWeight: 'bold'
    },
    ModelProfession: {
        color: 'silver'
    },
    CoursesContainer: {
        marginTop: 20,
        marginBottom: 110
    },
    OnlineBar: {
        position: 'absolute',
        height: 110,
        width: '100%',
        top: height-110,
        backgroundColor: 'white'
    }
});