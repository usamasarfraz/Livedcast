import React,{ Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
// Stepper
import Stepper from '../../Components/Stepper/Stepper';
// Screens
import AccountInfo from '../AccountInfoScreen/AccountInfo';
import ServiceInfo from '../ServiceInfoScreen/ServiceInfo';
import PaymentAndVerification from '../PaymentAndVerification/PaymentAndVerification';
// Modal
import CourceEnrollmentModal from '../../Components/Modals/CourceEnrollmentModal';

export default class Register extends Component {
    state={
        isCourceModal: false,
        position: 1
    }
    toggleCourceModal = () => {
        this.setState({
            isCourceModal: !this.state.isCourceModal
        })
    }
    handleNext = () => {
        this.setState({
            position: this.state.position+1
        })
    }
    renderView = () => {
        switch (this.state.position) {
            case 1:
            return (
                <AccountInfo {...this.props} handleNext={this.handleNext} />
            )
            case 2:
            return (
                <ServiceInfo {...this.props} handleNext={this.handleNext} toggleCourceModal={this.toggleCourceModal} />
            )
            case 3:
            return (
                <PaymentAndVerification {...this.props} />
            )
            default:
            return null;
        }
    }
    render() {
        let list = ["1.Account info","2.Service info","3.Payment & Verification"];
        return (
            <ScrollView>
                <View style={{marginTop: 7}}>
                    <Stepper index={this.state.position} titleList={list} />
                </View>
                {
                    this.renderView()
                }
                <CourceEnrollmentModal isModalVisible={this.state.isCourceModal} toggleModal={this.toggleCourceModal} />
            </ScrollView>
        )
    }
}