import React,{ Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Animated, Easing, Dimensions, TextInput, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
// Images
import { Background, Group, Facebook, Google, Chat, Country, Polygon } from '../../Images/Images';
// Icons
import { MCIcon } from '../../Icons/Icons';
// Modals
import { InfluencerModal, BetaEnrollmentModal, EnrollmentSuccessModal } from '../../Components/Modals/index';
const { height, width } = Dimensions.get('window');

export default class Login extends Component {
    state={
        yValue: new Animated.Value(height),
        xLeftValue: new Animated.Value(0),
        xRightValue: new Animated.Value(width),
        show: false,
        isInfluencerModalVisible: false,
        isEnrollmentModalVisible: false,
        isEnrollmentSuccessModalVisible: false
    };
    componentDidMount = () => {
        // For Android
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
        // For Ios
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);

        this.animate(140);
    };
    componentWillUnmount = () => {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    };
    animate = (Value) => {
        Animated.parallel([
            Animated.timing(this.state.yValue,{
                toValue: Value,
                duration: 700,
                easing: Easing.elastic(1),
                useNativeDriver: true
            }).start(),
            Animated.timing(this.state.xLeftValue,{
                toValue: 20,
                duration: 700,
                easing: Easing.elastic(1),
                useNativeDriver: true
            }).start(),
            Animated.timing(this.state.xRightValue,{
                toValue: width-110,
                duration: 700,
                easing: Easing.elastic(1),
                useNativeDriver: true
            }).start()
        ])
    };
    keyboardDidShow = (event) => {
        Animated.timing(this.state.yValue, {
            duration: event.duration,
            toValue: event.endCoordinates.height-130,
            useNativeDriver: true
        }).start();
    };
    keyboardDidHide = (event) => {
        Animated.timing(this.state.yValue, {
            duration: event.duration,
            toValue: 140,
            useNativeDriver: true
        }).start();
    };
    handleLogin = () => {
        // this.props.navigation.navigate('Drawer');
    }
    toggleInfluencerModal = () => {
        if(this.state.isInfluencerModalVisible){
            this.toggleEnrollmentModal();
        }
        this.setState({isInfluencerModalVisible: !this.state.isInfluencerModalVisible});
    };
    toggleEnrollmentModal = () => {
        if(this.state.isEnrollmentModalVisible){
            this.toggleEnrollmentSuccessModal();
        }
        this.setState({isEnrollmentModalVisible: !this.state.isEnrollmentModalVisible});
    }
    toggleEnrollmentSuccessModal = () => {
        this.setState({isEnrollmentSuccessModalVisible: !this.state.isEnrollmentSuccessModalVisible},()=>{
            if(!this.state.isEnrollmentSuccessModalVisible){
                this.props.navigation.navigate('Register');
            }
        });
    }
    render(){
        return (
            <View style={styles.Container}>
                <View style={styles.TutorialAndLanguageContainer}>
                    <Animated.View style={{translateX: this.state.xLeftValue}}>
                        <TouchableOpacity onPress={()=>alert('test')}>
                            <Text style={styles.TutorialText}>
                                Tutorial
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={{translateX: this.state.xRightValue}}>
                        <TouchableOpacity style={styles.FlexDirectionContainer}>
                            <View>
                                <Image
                                    source={Country}
                                />
                            </View>
                            <View style={styles.JustifyCenter}>
                                <Text style={styles.LanguageText}>
                                    English
                                </Text>
                            </View>
                            <View style={styles.JustifyCenter}>
                                <Image
                                    source={Polygon}
                                />
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={Background} style={styles.image}>
                    <Animated.View style={[styles.LoginView,{translateY: this.state.yValue}]}>
                        <View style={styles.CenterItemContainer}>
                            <Text style={styles.AppNameText}>
                                Livedcast
                            </Text>
                            <Text style={styles.BaseLineText}>
                                Face to face interact with people you admire
                            </Text>
                        </View>
                        <View style={styles.CenterItemContainer}> 
                            <Text style={styles.LoginMessage}>
                                Log back into your account
                            </Text>
                        </View>
                        <View style={styles.InputSection}>
                            <MCIcon style={styles.InputIcon} name="email" size={20} color="#000"/>
                            <TextInput
                                style={styles.Input}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.InputSection}>
                            <MCIcon style={styles.InputIcon} name="lock" size={20} color="#000"/>
                            <TextInput
                                style={styles.Input}
                                placeholder="Password"
                                autoCompleteType="off"
                                autoCorrect={false}
                                contextMenuHidden={true}
                                secureTextEntry={this.state.show?false:true}
                            />
                            <TouchableOpacity onPress={()=>{this.setState({show: !this.state.show})}}>
                                <Text>
                                    {this.state.show?"Hide":"Show"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.LoginButton} onPress={this.handleLogin}>
                            <Text style={styles.LoginButtonText}>
                                Log In
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.ForgotPasswordContainer}>
                            <TouchableOpacity>
                                <Text style={styles.ForgotPasswordText}>
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <ImageBackground source={Group} style={styles.SocialIconsMainContainer}>
                            <Text style={styles.SocialIconsTitle}>
                                Login using
                            </Text>
                            <View style={styles.FlexDirectionContainer}>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={Facebook}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={Google}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={Chat}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={styles.CenterItemContainer}>
                            <Text style={styles.InfluencerText}>
                                You want to register as influencer?
                            </Text>
                            <TouchableOpacity onPress={this.toggleInfluencerModal}>
                                <Text>
                                    Click Here
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </ImageBackground>
                </TouchableWithoutFeedback>
                <InfluencerModal isModalVisible={this.state.isInfluencerModalVisible} toggleModal={this.toggleInfluencerModal} />
                <BetaEnrollmentModal isModalVisible={this.state.isEnrollmentModalVisible} toggleModal={this.toggleEnrollmentModal} />
                <EnrollmentSuccessModal isModalVisible={this.state.isEnrollmentSuccessModalVisible} toggleModal={this.toggleEnrollmentSuccessModal} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
    TutorialAndLanguageContainer: {
        marginTop: 60,
        zIndex: 10,
        flexDirection: 'row'
    },
    TutorialText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    JustifyCenter: {
        justifyContent: 'center'
    },
    LanguageText: {
        fontSize: 9,
        marginHorizontal: 2,
        fontWeight: 'bold'
    },
    image: {
        height: height,
        width: '100%',
        resizeMode: "cover",
        position: 'absolute',
        alignItems: 'center'
    },
    LoginView: {
        width: '85%',
        backgroundColor: 'white',
        position: 'absolute',
        paddingHorizontal: 10
    },
    CenterItemContainer: {
        alignItems: 'center'
    },
    AppNameText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    BaseLineText: {
        fontSize: 8,
        fontWeight: 'bold'
    },
    LoginMessage: {
        marginTop: 10,
        fontSize: 16,
    },
    InputSection: {
        flex: 1,
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
    LoginButton: {
        flex: 1,
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    LoginButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    ForgotPasswordContainer: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
    },
    ForgotPasswordText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    SocialIconsMainContainer: {
        height: 115,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SocialIconsTitle: {
        marginTop: 5,
        fontSize: 13,
    },
    FlexDirectionContainer: {
        flexDirection: 'row'
    },
    InfluencerText: {
        color: 'grey',
        marginTop: 5,
        marginBottom: 2
    },
});