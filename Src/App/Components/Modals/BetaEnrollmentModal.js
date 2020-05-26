import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
// Images
import { X, Rectangle } from '../../Images/Images';
// Icons
import { FAIcon, MCIcon } from '../../Icons/Icons';

export default class Influencer extends Component {
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
                        <Text style={styles.EnrollmentTitle}>
                            Beta Test Enrollment
                        </Text>
                    </View>
                    <View style={styles.MarginTop10}>
                        <View style={styles.InputSection}>
                            <FAIcon style={styles.InputIcon} name="user" size={20} color="#000"/>
                            <TextInput
                                style={styles.Input}
                                placeholder="Full name"
                            />
                        </View>
                    </View>
                    <ImageBackground source={Rectangle} style={[styles.RectangleContainer,{marginTop: -10}]}>
                        <View style={styles.PaddingHorizontal22}>
                            <View>
                                <Text style={styles.FontSize12}>
                                    Social media&nbsp;
                                    <Text style={styles.FontSize10WithGrey}>
                                        (one per line)
                                    </Text>
                                </Text>
                            </View>
                            <View>
                                <TextInput
                                    placeholder="Write here..."
                                    multiline={true}
                                    maxLength={3}
                                    returnKeyType="none"
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={Rectangle} style={[styles.RectangleContainer,{marginTop: -40}]}>
                        <View style={styles.PaddingHorizontal22}>
                            <View>
                                <Text style={styles.FontSize12}>
                                    About yourself and cource you will provide
                                </Text>
                            </View>
                            <View>
                                <TextInput
                                    placeholder="Write here..."
                                    multiline={true}
                                    maxLength={3}
                                    returnKeyType="none"
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.ContactTitleContainer}>
                        <View>
                            <Text>
                                How we contact you?
                            </Text>
                        </View>
                    </View>
                    <View style={styles.MarginTop10}>
                        <View style={styles.InputSection}>
                            <MCIcon style={styles.InputIcon} name="email" size={20} color="#000"/>
                            <TextInput
                                style={styles.Input}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.toggleModal} style={styles.SubmitButton}>
                    <Text style={styles.SubmitButtonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
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
        width: '89%'
    },
    ContextContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: 20,
    },
    SubmitButton: {
        marginTop: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    MarginTop10: {
        marginTop: 7,
        paddingHorizontal: 10
    },
    EnrollmentTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    InputSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2,
        marginTop: 10
    },
    InputIcon: {
        padding: 10,
        paddingLeft: 4
    },
    Input: {
        flex: 1,
        padding: 8,
        paddingLeft: 0
    },
    RectangleContainer: {
        height: 170,
        width: '100%',
        paddingVertical: 35
    },
    FontSize12: {
        fontSize: 12.7
    },
    PaddingHorizontal22: {
        paddingHorizontal: 22
    },
    FontSize10WithGrey: {
        color: 'grey',
        fontSize: 10
    },
    ContactTitleContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: -20
    }
})