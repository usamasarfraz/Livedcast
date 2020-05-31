import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Switch
} from 'react-native';
import Modal from 'react-native-modal';
import { Rating } from 'react-native-ratings';
// Images
import { X } from '../../Images/Images';

export default class FilterModal extends Component {
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
        >
            <View style={styles.ContentContainer}>
                <View style={styles.ContextContainer}>
                    <TouchableOpacity onPress={this.props.toggleModal}>
                        <Image
                            source={X}
                        />
                    </TouchableOpacity>
                    <View style={styles.FlexRowMarginTop10}>
                        <View style={styles.Flex1JustifyCenter}>
                            <Text style={styles.TitleText}>
                                Online Only
                            </Text>
                        </View>
                        <View style={[styles.Flex1JustifyCenter,{alignItems: 'flex-end'}]}>
                            <Switch
                                trackColor={{ false: "silver", true: "#F5B6A5" }}
                                thumbColor={this.props.onlineOnly ? "white" : "#F5B6A5"}
                                style={{borderColor: '#F5B6A5',borderWidth: 3}}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.props.togglOnlineOnly}
                                value={this.props.onlineOnly}
                            />
                        </View>
                    </View>
                    <View style={styles.FlexRowMarginTop10}>
                        <View>
                            <Text style={styles.TitleText}>
                                Gender
                            </Text>
                        </View>
                        <View style={[styles.Flex1JustifyCenter,{alignItems: 'flex-end',flexDirection: 'row'}]}>
                            <TouchableOpacity onPress={()=>this.props.onPressTag(0)} style={this.props.gender === 0?styles.SelectedButtonTag:styles.ButtonTag}>
                                <Text style={this.props.gender === 0?styles.SelectedButtonTagText:styles.ButtonTagText}>
                                    Male
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.onPressTag(1)} style={this.props.gender === 1?styles.SelectedButtonTag:styles.ButtonTag}>
                                <Text style={this.props.gender === 1?styles.SelectedButtonTagText:styles.ButtonTagText}>
                                    Female
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.onPressTag(2)} style={this.props.gender === 2?styles.SelectedButtonTag:styles.ButtonTag}>
                                <Text style={this.props.gender === 2?styles.SelectedButtonTagText:styles.ButtonTagText}>
                                    Both
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.FlexRowMarginTop10}>
                        <View style={styles.Flex1JustifyCenter}>
                            <Text style={styles.TitleText}>
                                Rating
                            </Text>
                        </View>
                        <View style={styles.Flex1JustifyCenter}>
                            <Rating
                                startingValue={5}
                                ratingCount={5}
                                imageSize={18}
                            />
                        </View>
                    </View>
                    <View style={styles.FlexRowMarginTop10}>
                        <View>
                            <Text style={styles.TitleText}>
                                Pricing
                            </Text>
                        </View>
                        <View style={[styles.Flex1JustifyCenter,{alignItems: 'flex-end',flexDirection: 'row'}]}>
                            <TouchableOpacity style={styles.ButtonTag}>
                                <Text style={styles.ButtonTagText}>
                                    Min
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonTag}>
                                <Text style={styles.ButtonTagText}>
                                    Max
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.toggleModal} style={styles.Button}>
                    <Text style={styles.ButtonText}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    ContentContainer: {
        width: '89%',
        alignSelf: 'center'
    },
    ContextContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    FlexRowMarginTop10: {
        flexDirection: 'row',
        marginTop: 10
    },
    Button: {
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
    Flex1JustifyCenter: {
        flex: 1,
        justifyContent: 'center'
    },
    TitleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ButtonTag: {
        alignItems: 'center',
        marginLeft: 5,
        flex: 1,
        padding: 3,
        borderColor: '#F5B6A5',
        borderWidth: 1,
        borderRadius: 14,
        overflow: 'hidden'
    },
    ButtonTagText: {
        color: '#F5B6A5'
    },
    SelectedButtonTag: {
        alignItems: 'center',
        marginLeft: 5,
        flex: 1,
        padding: 3,
        borderColor: '#F5B6A5',
        backgroundColor: '#F5B6A5',
        borderWidth: 1,
        borderRadius: 14,
        overflow: 'hidden'
    },
    SelectedButtonTagText: {
        color: 'white'
    }
});