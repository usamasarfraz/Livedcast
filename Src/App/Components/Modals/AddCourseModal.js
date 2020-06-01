import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
// Images
import { CourcePad } from '../../Images/Images';
// Components
import Select from '../Select/Select';
import Input from '../LabeledInput/Input';

export default class AddCourse extends Component {
  render() {
    let Schedule1Options = [{ label: "Everyday", value: "everyday" }];
    let Schedule2Options = [{ label: "18:00(KHT)", value: "18:00" }];
    let DurationOptions = [{ label: "1 hour", value: "1" }];
    let MaxPeopleptions = [{ label: "12 person", value: "12" }];
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
            <ImageBackground source={CourcePad} style={styles.image}>
                <Text style={styles.DescriptionTitle}>Cource 1</Text>
                <View>
                    <View style={styles.MarginTop5}>
                        <Input label="Cource Title" placeholder="Title here" />
                    </View>
                    <View style={styles.MarginTop5}>
                        <Input label="description" placeholder="Loream inspect" />
                    </View>
                    <View style={styles.MarginTop5}>
                        <View style={styles.TwoSelectContainer}>
                        <View style={{flex: 1}}>
                            <Select label="Schedule" options={Schedule1Options} />
                        </View>
                        <View style={{flex: 1}}>
                            <Select label="" options={Schedule2Options} />
                        </View>
                        </View>
                    </View>
                    <Select label="Duration" options={DurationOptions} />
                    <Select label="Max people" options={MaxPeopleptions} />
                    <View style={styles.MarginTop5}>
                        <Input label="Price per person" placeholder="$ 120" />
                    </View>
                    <View style={styles.TwoButtonContainer}>
                        <View style={{flex: 1, marginRight: 5}}>
                            <TouchableOpacity
                                onPress={this.props.toggleModal}
                                style={styles.OutlineButton}>
                                <Text style={styles.OutlineButtonText}>Preview</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, marginLeft: 5}}>
                            <TouchableOpacity
                                onPress={this.props.toggleModal}
                                style={styles.OutlineButton}>
                                <Text style={styles.OutlineButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    DescriptionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 7
    },
    FontSize13: {
        marginTop: 2,
        fontSize: 13
    },
    image: {
        height: 540,
        resizeMode: "cover",
        padding: 30
    },
    MarginTop5: {
        marginTop: 5
    },
    TwoSelectContainer: {
        flexDirection: 'row'
    },
    TwoButtonContainer: {
        flexDirection: 'row',
        marginTop: 12
    },
    OutlineButton: {
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden'
    },
    OutlineButtonText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    AddCourceButton: {
        flex: 1,
        marginTop: -12,
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    AddCourceButtonText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    Button: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    ButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
});