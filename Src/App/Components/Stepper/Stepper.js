import React,{ Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class Stepper extends Component {
    renderSpecific = () => {
        switch (this.props.index) {
            case 1:
            return (
                <View style={styles.Container}>
                    <Text style={styles.ActiveText}>{this.props.titleList[0]}</Text>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height2} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                    <Text style={styles.NonActiveText}>{this.props.titleList[1]}</Text>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height2} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                </View>
            )
            case 2:
            return (
                <View style={styles.Container}>
                    {[1,2,3,4,5].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height2Dark} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                    <Text style={styles.ActiveText}>{this.props.titleList[1]}</Text>
                    {[1,2,3,4,5,6,7].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height2} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                    <Text style={styles.NonActiveText}>{this.props.titleList[2]}</Text>
                </View>
            )
            case 3:
            return (
                <View style={styles.Container}>
                    {[1,2,3,4,5].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height2Dark} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                    <Text style={styles.ActiveText}>{this.props.titleList[2]}</Text>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22].map((value,index)=>{
                        return (
                            <>
                                <View style={styles.Height0} />
                                <View style={styles.Height0} />
                            </>
                        )
                    })
                    }
                </View>
            )
            default:
            return null;
        }
    }
    render() {
        return (
            <>
                {this.renderSpecific()}
            </>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row'
    },
    ActiveText: {
        alignSelf:'center',
        paddingHorizontal:5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    NonActiveText: {
        alignSelf:'center',
        color: 'silver',
        paddingHorizontal:5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    Height2: {
        backgroundColor: 'silver',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    Height2Dark: {
        backgroundColor: 'black',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    Height0: {
        height: 0,
        flex: 1,
        alignSelf: 'center'
    }
})