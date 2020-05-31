import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Components
import CoverAndProfile from '../../Components/CoverAndProfile/CoverAndProfile';
import Course from '../../Components/CoursePad/Course';
// Modals
import { CourceEnrollmentModal, AddCourseModal } from '../../Components/Modals/index';

export default class Courses extends Component {
    state={
        isCourceModal: false,
        isAddCourseModal: false,
        isPreviewCourseModal: false,
    }
    toggleAddCourseModal = () => {
        if(this.state.isAddCourseModal){
            this.toggleCourceModal();
        }
        this.setState({isAddCourseModal: !this.state.isAddCourseModal});
    }
    toggleCourceModal = () => {
        this.setState({
            isCourceModal: !this.state.isCourceModal
        })
    }
    render() {
        let coursesList = [{title: "$ 120\n Enroll"},{title: "Full"},{title: "Cancel \n& Refund"}];
        return (
            <ScrollView style={styles.Container}>
                <CoverAndProfile />
                <View>
                    {
                        coursesList.map((data,index)=>{
                            return (
                                <Course key={index} buttonTitle={data.title} />
                            )
                        })
                    }
                    <TouchableOpacity onPress={this.toggleAddCourseModal} style={styles.Button}>
                        <Text style={styles.ButtonText}>
                            Add New
                        </Text>
                    </TouchableOpacity>
                </View>
                <AddCourseModal isModalVisible={this.state.isAddCourseModal} toggleModal={this.toggleAddCourseModal} />
                <CourceEnrollmentModal isModalVisible={this.state.isCourceModal} toggleModal={this.toggleCourceModal} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        flex: 1,
        marginBottom: 10,
        marginHorizontal: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    ButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
});