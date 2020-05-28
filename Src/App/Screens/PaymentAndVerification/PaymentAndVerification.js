import React,{ Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

// Components
import Input from '../../Components/LabeledInput/Input';
// Images
import { Electronics, CircleTickGreen } from '../../Images/Images';

export default class PaymentAndVerification extends Component {
    state={
        upload: false
    }
    render() {
        return (
            <View style={styles.Container}>
                <View>
                    <Text style={styles.DescriptionTitle}>
                        How you wanna get paid
                    </Text>
                    <Text style={styles.FontSize13}>
                        you can change it after the registration also.
                    </Text>
                </View>
                <View style={styles.MarginTop5}>
                    <Input label="Paypal" placeholder="Enter Paypal email" />
                    <Input label="Bitcoin" placeholder="Enter Bitcoin address" />
                </View>
                <View style={styles.MarginTop5}>
                    <Text style={styles.FontBold}>
                        Verify yourself
                    </Text>
                    <Text>
                        Verify is very important, it can prevent someone to use celebrity names to fake their fans.
                    </Text>
                </View>
                <View style={styles.MarginTop5}>
                    <Text>
                        To verify please send us a selfie video and say
                    </Text>
                </View>
                <View style={styles.MarginTop5}>
                    <Text style={styles.FontBold}>
                        Hi I am "Emma Watson" and I am using Livedcast,
                    </Text>
                </View>
                <View style={styles.MarginTop5}>
                    <Text>
                        at the end show us following face expression
                    </Text>
                </View>
                <View style={styles.MarginTop5}>
                    <Text style={styles.FontBold}>
                        Show me a happy smile
                    </Text>
                </View>
                <View style={styles.MovieContainer}>
                    {this.state.upload?
                    <View style={styles.AlignItemsCenter}>
                        <Image
                            source={CircleTickGreen}
                        />
                        <Text style={styles.MovieSuccessText}>
                            Upload Success
                        </Text>
                    </View>
                    :<TouchableOpacity style={styles.AlignItemsCenter}>
                        <Image
                            source={Electronics}
                        />
                        <Text style={styles.MovieText}>
                            Record Video
                        </Text>
                    </TouchableOpacity>
                    }
                </View>
                <View style={styles.MarginTop5}>
                    <TouchableOpacity onPress={()=>this.setState({upload: true})} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Go to my account
                        </Text>
                    </TouchableOpacity>
                </View>
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
    MarginTop5: {
        marginTop: 5
    },
    FontBold: {
        fontWeight: 'bold'
    },
    MovieContainer: {
        marginTop: 35,
        alignItems: 'center'
    },
    MovieText: {
        color: '#F5B6A5',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 3
    },
    MovieSuccessText: {
        color: '#4CAF50',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 3
    },
    Button: {
        flex: 1,
        marginTop: 20,
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
    AlignItemsCenter: {
        alignItems: 'center'
    }
});