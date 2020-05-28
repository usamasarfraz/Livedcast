import React,{ Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class LabeledInput extends Component {
    render() {
        let { label, placeholder } = this.props;
        return (
            <View style={styles.InputSection}>
                <Text style={{color: 'silver'}}>
                    {label}
                </Text>
                <TextInput
                    style={styles.Input}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    InputSection: {
        // flex: 1,
        paddingHorizontal: 7,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginTop: 5
    },
    Input: {
        // flex: 1,
        padding: 3,
        paddingLeft: 0
    },
});