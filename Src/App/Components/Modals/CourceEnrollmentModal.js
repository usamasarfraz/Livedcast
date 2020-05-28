import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
// Images
import { X, Clock, Contract, Date, Men } from '../../Images/Images';

const { height } = Dimensions.get('window');
export default class CourseEnrollment extends Component {
  render() {
    return (
        <Modal
            isVisible={this.props.isModalVisible}
            onBackButtonPress={this.props.toggleModal}
            onBackdropPress={this.props.toggleModal}
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}
            style={styles.Container}
        >
            <View style={styles.ContentContainer}>
                <View style={styles.ContextContainer}>
                    <TouchableOpacity onPress={this.props.toggleModal}>
                        <Image
                            source={X}
                        />
                    </TouchableOpacity>
                    <View style={styles.MarginTop10}>
                        <Text style={styles.Title}>
                            Course Title
                        </Text>
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
                            <Text style={styles.Description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </Text>
                            <TouchableOpacity style={styles.EnrollButton}>
                                <Text style={[styles.EnrollButtonText,{fontWeight: 'bold'}]}>
                                    $ 120
                                </Text>
                                <Text style={styles.EnrollButtonText}>
                                    Enroll
                                </Text>
                            </TouchableOpacity>
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
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ContentContainer: {
        height: height/2,
        width: '89%'
    },
    ContextContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    MarginTop10: {
        marginTop: 10
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ColorGrey: {
        color: 'grey'
    },
    EnrollButton: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    EnrollButtonText: {
        color: 'white'
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
})