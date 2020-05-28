import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';
export default class SimpleSelect extends Component {
    state={
        value: 5
    }
    render() {
        let { label, options } = this.props;
        return (
            <View style={styles.SelectSection}>
                <Text style={{color: 'silver'}}>
                    {label}
                </Text>
                <Picker
                selectedValue={this.state.value}
                style={{height: 30, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({value: itemValue})
                }>
                    {
                        options.map((data,index)=>{
                            return (
                                <Picker.Item key={index} label={data.label} value={data.value} />
                            )
                        })
                    }
                </Picker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SelectSection: {
        // flex: 1,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginTop: 10
    },
});