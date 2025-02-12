import React,{ Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

// Components
import CoverAndProfile from '../../Components/CoverAndProfile/CoverAndProfile';
import ChatBox from '../../Components/ChatBox/Chat';

export default class Messages extends Component {
    render() {
        return (
            <>
                <CoverAndProfile check={this.props.check} />
                <ScrollView scrollEnabled={true}>
                    <View style={{flex: 1}}>
                        <ChatBox />
                    </View>
                </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    
});