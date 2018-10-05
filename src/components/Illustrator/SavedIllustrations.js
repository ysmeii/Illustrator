import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import HeaderLogo from './HeaderLogo';
import NewSaveIllustration from './NewSaveIllustration';
import ReviewSavePrint from './ReviewSavePrint';
import InsuredInformation from './InsuredInformation';
import BasePlan from './BasePlan';
import TermRiders from './TermRiders';
import OptionalBenefitRiders from './OptionalBenefitRiders';
import Calculator from './Calculator';

class SavedIllustrations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultState: {
                modeOfPayment: 'monthly-payment',
                coverageName: 'n/a',
                coverageTerm: '',
                faceAmount: '0.00',
                basePremium: '0.00',
                totalPremium: '0.00',
                firstName: '',
                lastName: '',
                DOB: '',
                ageNearest: '',
                gender: '',
                smoker: '',
                advisorName: '',
                advisorPhoneNumber: '',
                advisorEmail: '',
                planTypeSelected: 'term-insurance',
                termPlan: '',
                permanentPlan: '',
                termPeriod: '',
                permanentPeriod: '',
                desiredFaceAmount: '',
                termRiderPlan1: '',
                termRiderFaceAmount1: '',
                termRiderPlan2: '',
                termRiderFaceAmount2: '',
                hospitalCash: '',
                accidentalDeath: '',
                childTermBenefit: '',
                riders: {},
                accidentalDeathPremium: '',
                childTermBenefitPremium: '',
                hospitalCashPremium: '',
                termRider1Premium: '',
                termRider2Premium: '',
                hospitalCashName: '',
                childTermBenefitName: ''
            }
        }
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.passData(this.props.navigation.getParam('initialState', this.state.defaultState));
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <HeaderLogo />
                <NewSaveIllustration navigation={this.props.navigation} />
                <ReviewSavePrint />
                <Calculator />
                <InsuredInformation />
                <BasePlan />
                <TermRiders />
                <OptionalBenefitRiders />
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        planTypeSelected: state.planTypeSelected,
        termPlan: state.termPlan,
        permanentPlan: state.permanentPlan,
        termPeriod: state.termPeriod,
        permanentPeriod: state.permanentPeriod,
        desiredFaceAmount: state.desiredFaceAmount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        passData: (itemValue) => dispatch({ type: 'UPDATE_DATA', payload: itemValue })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedIllustrations)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#3498db',
        alignItems: 'center',
    },
    saveContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        height: 85,
        width: 85
    },
    saveButton: {
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: 120,
        padding: 10,
        margin: 10
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '95%'
    },
    input: {
        height: 50,
        width: 200,
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginBottom: 10,

    },
    inputDOB: {
        height: 50,
        width: 60,
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginBottom: 10
    },
    DOB: {
        flex: 1,
        flexDirection: 'row',
        width: 200,
        height: 50,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 25
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
    },
    fieldTitles: {
        marginBottom: 10,
        fontSize: 20
    }
});