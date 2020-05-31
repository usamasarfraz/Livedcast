import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Rating } from 'react-native-ratings';
// Images
import { CoursePadRectangle, Date, Men, Clock, Contract } from '../../Images/Images';
export default class Course extends Component {
    render() {
        return (
            <ImageBackground source={CoursePadRectangle} style={styles.Container}>
                <View style={styles.ContentContainer}>
                    <View style={styles.ContextContainer}>
                        <View style={styles.MarginTop10}>
                            <View style={styles.TitleAndStarContainer}>
                                <Text style={styles.Title}>
                                    Course Title
                                </Text>
                                <View style={styles.RatingContainer}>
                                    <Rating
                                        startingValue={5}
                                        ratingCount={5}
                                        imageSize={15}
                                        readonly={true}
                                    />
                                    <Text style={styles.RatingCountText}>
                                        (256)
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.MarginTop10}>
                            <View>
                                <Text style={{fontWeight: 'bold'}}>
                                    Course Description
                                </Text>
                            </View>
                        </View>
                        <View style={styles.MarginTop10}>
                            <View style={styles.WidthAndFlexRow}>
                                <Text numberOfLines={3} style={styles.Description}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                </Text>
                                {this.props.buttonTitle?
                                <TouchableOpacity style={styles.EnrollButton}>
                                    <Text style={[styles.EnrollButtonText,{fontWeight: 'bold'}]}>
                                        {this.props.buttonTitle}
                                    </Text>
                                </TouchableOpacity>:null
                                }
                            </View>
                        </View>
                        <View style={styles.MarginTop10}>
                            <View style={styles.WidthAndFlexRow}>
                                <View style={styles.Flex1ItemCenter}>
                                    <Image
                                        source={Date}
                                    />
                                    <Text style={styles.PinkWithFont10}>
                                        12 Apr 2020
                                    </Text>
                                </View>
                                <View style={styles.Flex1ItemCenter}>
                                    <Image
                                        source={Men}
                                    />
                                    <Text style={styles.PinkWithFont10}>
                                        5/8
                                    </Text>
                                </View>
                                <View style={styles.Flex1ItemCenter}>
                                    <Image
                                        source={Clock}
                                    />
                                    <Text style={styles.PinkWithFont10}>
                                        18:00 HKR
                                    </Text>
                                </View>
                                <View style={styles.Flex1ItemCenter}>
                                    <Image
                                        source={Contract}
                                    />
                                    <Text style={styles.PinkWithFont10}>
                                        Consultation
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        height: 250,
        marginTop: -32
    },
    ContentContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    ContextContainer: {
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    MarginTop10: {
        marginTop: 10
    },
    TitleAndStarContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    RatingContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    RatingCountText: {
        marginLeft: 3,
        fontSize: 12,
        color: 'grey'
    },
    Title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    ColorGrey: {
        color: 'grey'
    },
    EnrollButton: {
        flex: 1,
        backgroundColor: 'black',
        marginLeft: 5,
        paddingHorizontal: 3,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    EnrollButtonText: {
        color: 'white',
        fontSize: 12
    },
    Description: {
        flex: 3,
        color: 'grey'
    },
    WidthAndFlexRow: {
        width: '100%',
        flexDirection: 'row'
    },
    Flex1ItemCenter: {
        flex: 1,
        alignItems: 'center'
    },
    PinkWithFont10: {
        color: '#F5B6A5',
        fontSize: 10
    }
});