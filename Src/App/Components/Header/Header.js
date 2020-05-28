import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// Images
import { Country, Polygon } from '../../Images/Images';

const HeaderRight = () => {
    return (
        <>
            <TouchableOpacity style={{marginRight: 20}} onPress={()=>alert('test')}>
                <Text style={styles.TutorialText}>
                    Tutorial
                </Text>
            </TouchableOpacity>
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
        </>
    )
}

const HeaderTitle = () => {
    return (
        <View style={styles.CenterItemContainer}>
            <Text style={styles.AppNameText}>
                Livedcast
            </Text>
            <Text style={styles.BaseLineText}>
                Face to face interact with people you admire
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    JustifyCenter: {
        justifyContent: 'center'
    },
    TutorialText: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 6
    },
    LanguageText: {
        fontSize: 9,
        marginHorizontal: 2,
        fontWeight: 'bold'
    },
    CenterItemContainer: {
        alignItems: 'center'
    },
    AppNameText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    BaseLineText: {
        fontSize: 6,
        fontWeight: 'bold'
    },
    FlexDirectionContainer: {
        flexDirection: 'row',
        marginRight: 10
    },
});

export default { headerRight: HeaderRight,headerTitle: HeaderTitle,headerTitleAlign: 'center' }