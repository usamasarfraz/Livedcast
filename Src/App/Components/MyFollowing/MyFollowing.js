import React,{ Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// Components
import Card from '../FollowingCard/Card';

export default class MyFollowing extends Component {
    renderRowHorizental = ({item}) => {
        return (
            <Card onPress={this.props.onPressItem} {...this.props} />
        )
    }
    render() {
        return (
            <View>
                <View style={styles.HeadingContainer}>
                    <Text style={styles.FollowingText}>
                        My Following
                    </Text>
                    <Text style={styles.AllText}>
                        All
                    </Text>
                </View>
                <View style={styles.ListContainer}>
                    <FlatList
                        data={[1,2,3,4,5]}
                        horizontal={true}
                        renderItem={this.renderRowHorizental}
                        keyExtractor={(item,index)=> index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        
    },
    HeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    FollowingText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    AllText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'silver'
    },
    ListContainer: {
        marginTop: 10
    }
});