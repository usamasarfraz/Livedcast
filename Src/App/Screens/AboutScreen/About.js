import React,{ Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

// Components
import CoverAndProfile from '../../Components/CoverAndProfile/CoverAndProfile';
// Images
import { FansListPad, DiscussionPad, Person } from '../../Images/Images';
// Modals
import { LineMeUpModal, NextInLineModal } from '../../Components/Modals/index';

const { height } = Dimensions.get('window');

export default class About extends Component {
    state={
        isLineMeUpModal: false,
        isNextInLineModal: false,
    }
    toggleLineMeUp = () => {
        this.setState({
            isLineMeUpModal: !this.state.isLineMeUpModal
        })
    }
    toggleNextInLine = () => {
        this.setState({
            isNextInLineModal: !this.state.isNextInLineModal
        })
    }
    render() {
        return (
            <View>
                <CoverAndProfile check={this.props.check} />
                <ScrollView>
                    <ImageBackground source={FansListPad} style={styles.FansListPadImage}>
                        <View style={styles.FansListContainer}>
                            <View style={styles.CircleImageMainContainer}>
                                <View style={styles.CircleImageContainer}>
                                    <View>
                                        <Image source={Person} style={this.props.check?styles.FanImageTop:styles.FanImage} />
                                    </View>
                                    {
                                        [1,2,3,4].map((item,index)=>{
                                            return (
                                                <View key={index}>
                                                    <Image source={Person} style={styles.FanImage} />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                {this.props.check?
                                <Text style={{flex: 1.3,fontSize: 12,color: 'grey'}}>
                                    6 Fans waiting
                                </Text>
                                :<TouchableOpacity onPress={this.toggleNextInLine}>
                                    <Text style={{flex: 1.3,fontSize: 12,color: 'grey',marginTop: 14}}>
                                        6 Fans waiting
                                    </Text>
                                </TouchableOpacity>
                                }
                            </View>
                            {this.props.check?
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Call')} style={styles.Button}>
                                <Text style={styles.ButtonText}>
                                    Accept Call
                                </Text>
                            </TouchableOpacity>
                            :<TouchableOpacity onPress={this.toggleLineMeUp} style={styles.Button}>
                                <Text style={styles.ButtonText}>
                                    Line me up
                                </Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </ImageBackground>
                    <ImageBackground source={DiscussionPad} style={styles.DiscussionPadImage}>
                        <View style={styles.DiscussionContainer}>
                            <View style={styles.DiscussionImageAndNameContainer}>
                                <View>
                                    <Image source={Person} style={styles.DiscussionImage} />
                                </View>
                                <View style={styles.ModelNameAndProfessionText}>
                                    <Text style={styles.ModelNameText}>
                                        Emma Watson
                                    </Text>
                                    <Text style={styles.ModelProfessionText}>
                                        Model, Actress
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.MarginTop3}>
                                <Text style={styles.DiscussionQuestionText}>
                                    What we can discuss?
                                </Text>
                            </View>
                            <View style={styles.MarginTop3}>
                                <Text style={{fontWeight: 'bold'}}>
                                    Women's rights work
                                </Text>
                            </View>
                            <View style={styles.MarginTop3}>
                                <Text style={styles.DiscussionDescription} numberOfLines={2}>
                                    I am the top 99 outstanding women 2015, if there are anything related with women rights work, freely to ask...
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
            <LineMeUpModal isModalVisible={this.state.isLineMeUpModal} toggleModal={this.toggleLineMeUp} />
            <NextInLineModal isModalVisible={this.state.isNextInLineModal} toggleModal={this.toggleNextInLine} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1
    },
    FansListPadImage: {
        height: 150,
        marginTop: -20,
        resizeMode: "cover",
    },
    FansListContainer: {
        marginHorizontal: 40,
        marginVertical: 25,
    },
    DiscussionPadImage: {
        height: 210,
        marginTop: -15,
        marginBottom: height/2.6+60,
        resizeMode: "cover",
    },
    DiscussionContainer: {
        marginHorizontal: 45,
        marginVertical: 25,
    },
    CircleImageMainContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    CircleImageContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    FanImageTop: {
        marginRight: -15,
        zIndex: 1,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 2
    },
    FanImage: {
        marginRight: -13,
        width: 46,
        height: 46,
        borderRadius: 23,
        borderColor: 'white',
        borderWidth: 1.5
    },
    Button: {
        marginTop: 4,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    ButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    DiscussionImage: {
        width: 70,
        height: 70,
        borderRadius: 20
    },
    DiscussionImageAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ModelNameAndProfessionText: {
        paddingLeft: 10
    },
    ModelNameText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    ModelProfessionText: {
        fontSize: 12,
        color: 'grey'
    },
    MarginTop3: {
        marginTop: 3
    },
    DiscussionQuestionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    DiscussionDescription: {
        fontSize: 12,
        color: 'grey'
    }
});