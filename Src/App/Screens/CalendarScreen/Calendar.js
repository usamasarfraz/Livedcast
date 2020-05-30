import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: '2020-05-13',
    };
  }

  onDayPress = (day) => {
    this.setState({selected: day.dateString});
  };

  render() {
    return (
        <View style={styles.Container}>
            <View style={styles.CalendarContainer}>
                <Calendar
                theme={{
                    selectedDayBackgroundColor: '#F5B6A5',
                    selectedDayTextColor: 'black',
                    todayTextColor: 'silver',
                    dayTextColor: 'silver',
                    arrowColor: '#F5B6A5',
                    textSectionTitleColor: 'black',
                    textDayHeaderFontWeight: 'bold',
                    monthTextColor: '#F5B6A5',
                    textMonthFontWeight: 'bold'
                }}
                renderArrow={(direction) =>
                    direction == 'left' ? (
                    <FontAwesome5Icon name="arrow-left" size={20} color="#F5B6A5" />
                    ) : (
                    <FontAwesome5Icon name="arrow-right" size={20} color="#F5B6A5" />
                    )
                }
                style={styles.calendar}
                hideExtraDays
                onDayPress={this.onDayPress}
                markedDates={{
                    [this.state.selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'orange',
                    },
                }}
                />
            </View>
            <Text style={[styles.Font20Bold,{color: '#F5B6A5'}]}>
                13 May 2020
            </Text>
            <Text style={styles.Font20Bold}>
                20 Students
            </Text>
            <Text style={styles.Font20Bold}>
                at 18:00 HKG
            </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    CalendarContainer: {
        marginVertical: 25,
        padding: 5,
        width: '87%',
        backgroundColor: 'white',
        borderRadius: 10
    },
    calendar: {
        marginBottom: 10,
    },
    image: {
        height: 350
    },
    Font20Bold: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
