import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
// Images
import { X } from '../../Images/Images';
// Escrow Tabs
import Escrow from '../../Components/Navigation/EscrowTabNavigation/EscrowNavigation';
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
                    <View style={styles.MarginTop10}>
                        <Text style={styles.Title}>
                            Escrow
                        </Text>
                    </View>
                    <View style={styles.MarginTop10}>
                        <Text style={styles.DescriptionText}>
                            Livedcast provide escrow service for our influencers.
                        </Text>
                        <Text style={styles.DescriptionText}>
                            You can deposite or withdraw your money anytime
                        </Text>
                    </View>
                    <View style={[styles.MarginTop10,{width: '100%'}]}>
                        <Escrow />
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.toggleModal} style={styles.JoinButton}>
                    <Text style={styles.JoinButtonText}>
                        Confirm
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
        paddingHorizontal: 20
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
        marginTop: 7
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    DescriptionText: {
        fontSize: 10,
        color: 'grey',
        textAlign: 'center'
    }
})