import React,{ Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
// Images
import { ChatPad, Person } from '../../Images/Images';
// Icons
import { MCIcon } from '../../Icons/Icons';

export default class Chat extends Component {
    render() {
        let chatList = [
            {id: 2,image: Person, msg: 'Hi, you there?', date: '23:00'},
            {id: 2,image: Person, msg: 'I am fine what about you?', date: '23:00'},
            {id: 1,image: Person, msg: 'Cool!', date: '23:00'},
            {id: 1,image: Person, msg: 'Welcome Guys hope you like it', date: '23:00'},
            {id: 2,image: Person, msg: 'I am fine what about you?', date: '23:00'},
            {id: 2,image: Person, msg: 'Me too', date: '23:00'}
        ]
        return (
            <ImageBackground source={ChatPad} style={styles.Container}>
                <View style={{flex: 1}}>
                    <ScrollView nestedScrollEnabled={true} style={styles.ChatContainer}>
                        {
                            chatList.map((data,index)=>{
                                return (
                                    <View key={index} style={data.id === 2?styles.ChatList:styles.MyChatList}>
                                        {data.id === 2?
                                        <View>
                                            <Image source={data.image} style={styles.ChatImage} />
                                        </View>:null
                                        }
                                        <View style={{flexDirection: 'row'}}>
                                            {data.id === 2?
                                            <View style={styles.ChatMessage}>
                                                <Text style={styles.ChatMessageText}>
                                                    {data.msg}
                                                </Text>
                                                <Text style={styles.ChatDateText}>
                                                    {data.date}
                                                </Text>
                                            </View>
                                            :<View style={styles.MyChatMessage}>
                                                <Text style={styles.ChatDateText}>
                                                    {data.date}
                                                </Text>
                                                <Text style={styles.MyChatMessageText}>
                                                    {data.msg}
                                                </Text>
                                            </View>
                                            }
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <View>
                        <View style={styles.InputContainer}>
                            <View style={{flex: 5}}>
                                <TextInput placeholderTextColor="white" placeholder="Type here..." style={styles.MessageInput} />
                            </View>
                            <TouchableOpacity style={styles.SendMsgButton}>
                                <MCIcon name="arrow-right" size={25} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 420,
        marginTop: -22
    },
    ChatContainer: {
        marginHorizontal: 40,
        marginTop: 35
    },
    ChatList: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    MyChatList: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    ChatImage: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderColor: 'white',
        borderWidth: 1.5
    },
    ChatMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%',
    },
    MyChatMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%',
        justifyContent: 'flex-end'
    },
    ChatMessageText: {
        marginLeft: 5,
        fontSize: 12,
        color: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
        maxWidth: '79%',
        flexWrap: 'wrap'
    },
    ChatDateText: {
        marginLeft: 5,
        fontSize: 10,
        color: 'grey',
    },
    MyChatMessageText: {
        marginLeft: 5,
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F5B6A5',
        borderRadius: 10,
        maxWidth: '79%',
        flexWrap: 'wrap'
    },
    InputContainer: {
        marginTop: 0.7,
        flexDirection: 'row',
        backgroundColor: 'black',
        marginHorizontal: 40,
        marginBottom: 35,
        borderRadius: 10
    },
    MessageInput: {
        color: 'white',
        padding: 7
    },
    SendMsgButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});