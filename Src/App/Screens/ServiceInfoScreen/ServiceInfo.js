import React,{ Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';

// Components
import Select from '../../Components/Select/Select';
import Input from '../../Components/LabeledInput/Input';

// Images
import { CourcePad } from '../../Images/Images';

export default class ServiceInfo extends Component {
    render() {
        let AmountOptions = [{ label: "$ 5", value: "5" },{ label: "$ 10", value: "10" }];
        let PerOptions = [{ label: "1 minute", value: "1" },{ label: "10 minute", value: "10" }];
        let Schedule1Options = [{ label: "Everyday", value: "everyday" }];
        let Schedule2Options = [{ label: "18:00(KHT)", value: "18:00" }];
        let DurationOptions = [{ label: "1 hour", value: "1" }];
        let MaxPeopleptions = [{ label: "12 person", value: "12" }];
        return (
            <View style={styles.Container}>
                <View>
                    <Text style={styles.DescriptionTitle}>
                        1 on 1 price
                    </Text>
                    <Text style={styles.FontSize13}>
                        Enter the amount that you would like to charge in a livedcast.
                    </Text>
                </View>
                <Select label="Amount" options={AmountOptions} />
                <Select label="per" options={PerOptions} />
                <View>
                    <Text style={styles.DescriptionTitle}>
                        Create your cource
                    </Text>
                    <Text style={styles.FontSize13}>
                        you can also create the cource after registration.
                    </Text>
                </View>
                <ImageBackground source={CourcePad} style={styles.image}>
                    <Text style={styles.DescriptionTitle}>
                        Cource 1
                    </Text>
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
                            <View style={{flex: 1,marginRight: 5}}>
                                <TouchableOpacity onPress={this.props.toggleCourceModal} style={styles.OutlineButton}>
                                    <Text style={styles.OutlineButtonText}>
                                        Preview
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1,marginLeft: 5}}>
                                <TouchableOpacity style={styles.OutlineButton}>
                                    <Text style={styles.OutlineButtonText}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.AddCourceButton}>
                    <Text style={styles.AddCourceButtonText}>
                        Add one more cource
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.handleNext} style={styles.Button}>
                    <Text style={styles.ButtonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 25
    },
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