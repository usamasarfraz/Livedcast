import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
// Images
import { X, Electronics } from '../../Images/Images';

const { height } = Dimensions.get('window');
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
                    <View style={styles.MarginTop30}>
                        <Image
                            source={Electronics}
                        />
                    </View>
                    <View style={styles.MarginTop10}>
                        <Text style={styles.Font18BoldAlignCenter}>
                            Hey there,
                        </Text>
                        <Text style={styles.Font18BoldAlignCenter}>
                            You are next in line
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.toggleModal} style={styles.JoinButton}>
                    <Text style={styles.JoinButtonText}>
                        Okay
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
        // height: height/2,
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
    JoinButton: {
        marginTop: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    JoinButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    MarginTop10: {
        marginTop: 10
    },
    MarginTop30: {
        marginTop: 30
    },
    ColorGrey: {
        color: 'grey'
    },
    Font18BoldAlignCenter: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})