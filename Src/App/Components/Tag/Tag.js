import React,{ Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tag extends Component {
    state={
        selected: false
    }
    handlePress = () => {
        this.setState({
            selected: !this.state.selected
        })
    }
    render() {
        let { TextValue } = this.props;
        let { selected } = this.state;
        return (
            <TouchableOpacity onPress={this.handlePress} style={selected?styles.SelectedContainer:styles.Container}>
                <Text style={selected?styles.SelectedText:styles.Text}>
                    {TextValue}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        borderColor: 'silver',
        borderWidth: 1.5,
        borderRadius: 17,
        padding: 5,
        paddingHorizontal: 17,
        marginBottom: 2
    },
    Text: {
        color: 'silver',
        fontWeight: 'bold'
    },
    SelectedContainer: {
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 1.5,
        borderRadius: 17,
        padding: 5,
        paddingHorizontal: 17,
        marginBottom: 2
    },
    SelectedText: {
        color: 'white',
        fontWeight: 'bold'
    },
});