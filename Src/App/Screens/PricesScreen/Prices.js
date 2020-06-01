import React,{ Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

// Components
import CoverAndProfile from '../../Components/CoverAndProfile/CoverAndProfile';
// Images
import { VideoPricingPad, CoursePricingPad, ElectronicsSmall, Diploma } from '../../Images/Images';
export default class Prices extends Component {
    render() {
        return (
            <ScrollView style={styles.Container}>
                <CoverAndProfile check={this.props.check} />
                <View>
                    <ImageBackground source={VideoPricingPad} style={styles.VideoPricingPadImage}>
                        <View style={styles.VideoPricingContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.FlexRowItemCenter}>
                                    <Image source={ElectronicsSmall} />
                                    <Text style={styles.Size15MarginLeft10}>
                                        1 to 1 Video chat
                                    </Text>
                                </View>
                                <View style={styles.VideoPriceContainer}>
                                    <Text style={styles.Font12Grey}>
                                        $ 10 per minute
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={CoursePricingPad} style={styles.CoursePricingPadImage}>
                        <View style={styles.CoursePricingContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{marginTop: 10}}>
                                    <Image style={{tintColor: '#F5B6A5',height: 20,width: 15}} source={Diploma} />
                                </View>
                                <View style={{marginLeft: 10}}>
                                    <View style={styles.FlexRowItemCenter}>
                                        <Text style={{fontSize: 15}}>
                                            Custom Pricing Course
                                        </Text>
                                        <Text style={[styles.Font12Grey,{marginLeft: 10}]}>
                                            $ 12 per user
                                        </Text>
                                    </View>
                                    <Text style={{fontWeight: 'bold'}}>
                                        Course Description
                                    </Text>
                                    <Text numberOfLines={3} style={styles.Font12Grey}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    VideoPricingPadImage: {
        height: 140,
        marginTop: -30,
        justifyContent: 'center'
    },
    CoursePricingPadImage: {
        height: 160,
        marginTop: -30
    },
    VideoPricingContainer: {
        paddingHorizontal: 50,
        paddingVertical: 35,
        alignItems: 'center'
    },
    CoursePricingContainer: {
        paddingHorizontal: 50,
        paddingVertical: 40
    },
    FlexRowItemCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Size15MarginLeft10: {
        fontSize: 15,
        marginLeft: 10
    },
    VideoPriceContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },
    Font12Grey: {
        fontSize: 12,
        color: 'grey'
    },
});