import React,{ Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// Components
import ProfileImage from '../../Components/CircleProfileImg/ProfileImage';
import Input from '../../Components/LabeledInput/Input';
import Tag from '../../Components/Tag/Tag';

export default class AccountInfo extends Component {
    render() {
        let list = ["Entertainer", "Celebrity", "Teacher", "Health Consultant", "Financial Advisor", "Legel", "Body Trainer", "Programmer", "Beauty", "Artist", "Relationship", "Inspiration"];
        return (
            <View style={styles.Container}>
                <ProfileImage />
                <View>
                    <View style={styles.MarginTop10}>
                        <Input label="Name" placeholder="Write here" />
                    </View>
                    <View style={styles.MarginTop10}>
                        <Input label="Best title for you" placeholder="English actress, model etc..." />
                    </View>
                    <View>
                        <Text style={styles.DescriptionTitle}>
                            Best Describe yourself
                        </Text>
                        <Text style={styles.FontSize13}>
                            Pick best 3 to describe yourself and what categories you like to provide.
                        </Text>
                    </View>
                    <View style={styles.TagContainer}>
                        {
                            list.map((value,index)=>{
                                return (
                                    <View style={{marginBottom: 7}} key={index}>
                                        <Tag TextValue={value} />
                                    </View>
                                )
                            })
                        }
                    </View>
                    <TouchableOpacity onPress={this.props.handleNext} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Next
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
        marginTop: 10,
        marginBottom: 5,
    },
    FontSize13: {
        fontSize: 13
    },
    TagContainer: {
        marginTop: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    Button: {
        flex: 1,
        marginTop: 7,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 5
    },
    ButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    MarginTop10: {
        marginTop: 10
    }
});