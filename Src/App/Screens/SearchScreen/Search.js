import React,{ Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

// Components
import Search from '../../Components/FilterSearch/Search';
import Trending from '../../Components/Trending/Trending';
// Modals
import { FilterModal } from '../../Components/Modals/index';

export default class SearchScreen extends Component {
    state={
        isFilterModal: false,
        onlineOnly: true,
        gender: 0
    }
    handlePressItem = () => {
        this.props.navigation.navigate('About');
    }
    handlePressFilter = () => {
        this.setState({
            isFilterModal: !this.state.isFilterModal
        })
    }
    togglOnlineOnly = () => {
        this.setState({
            onlineOnly: !this.state.onlineOnly
        })
    }
    onPressTag = (gender) => {
        this.setState({
            gender: gender
        })
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.Container}>
                        <Search onPressFilter={this.handlePressFilter} />
                        <View style={styles.MarginTop5}>
                            <Trending onPressItem={this.handlePressItem} />
                        </View>
                    </View>
                </ScrollView>
                <FilterModal togglOnlineOnly={this.togglOnlineOnly} onPressTag={this.onPressTag} {...this.state} isModalVisible={this.state.isFilterModal} toggleModal={this.handlePressFilter} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        marginBottom: 110
    },
    MarginTop5: {
        marginTop: 5
    }
});