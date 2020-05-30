import React,{ Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChartPad } from '../../Images/Images';
const screenWidth = Dimensions.get("window").width;
export default class PaymentHistory extends Component {
    render() {
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                data: [20, 22, 22, 20, 22, 22],
                color: (opacity = 1) => `grey`,
                strokeWidth: 2
              }
            ],
        };
        const chartConfig = {
            backgroundGradientFrom: "silver",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "grey",
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `black`,
            strokeWidth: 2,
            propsForDots: {
                r: "6",
                strokeWidth: "4",
                stroke: "#F5B6A5"
            }
        };
        return (
            <View style={styles.Container}>
                <ImageBackground source={ChartPad} style={styles.image}>
                    <LineChart
                    style={{marginLeft: -50}}
                    withShadow={false}
                    withOuterLines={false}
                    withInnerLines={false}
                    withHorizontalLabels={false}
                    fromZero={false}
                    verticalLabelRotation={110}
                    data={data}
                    width={screenWidth+60}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                    />
                </ImageBackground>
                <View style={styles.ContentContainer}>
                    <Text style={styles.Heading}>
                        Earned
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TitleText}>
                            Today
                        </Text>
                        <Text style={styles.ValueText}>
                            $250
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TitleText}>
                            Yesterday
                        </Text>
                        <Text style={styles.ValueText}>
                            $350
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TitleText}>
                            Last Week
                        </Text>
                        <Text style={styles.ValueText}>
                            $1250
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TitleText}>
                            Last Month
                        </Text>
                        <Text style={styles.ValueText}>
                            $2555
                        </Text>
                    </View>
                </View>
                <View style={styles.ContentContainer}>
                    <Text style={styles.Heading}>
                        Current Account
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TitleText}>
                            Current Balance
                        </Text>
                        <Text style={styles.ValueText}>
                            $1250
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingTop: 20,
    },
    image: {
        marginLeft: 10,
        resizeMode: "cover",
        alignSelf: 'center',
        width: '97%',
        height: 220,
    },
    ContentContainer: {
        marginTop: 25,
        paddingHorizontal: 20
    },
    Heading: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    TitleText: {
        color: 'silver',
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'
    },
    ValueText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F5B6A5',
        textAlign: 'right'
    }
});