import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HeaderLogo from './HeaderLogo';
import NewSaveIllustration from './NewSaveIllustration';
import ReviewSavePrint from './ReviewSavePrint';
import InsuredInformation from './InsuredInformation';
import BasePlan from './BasePlan';
import TermRiders from './TermRiders';
import OptionalBenefitRiders from './OptionalBenefitRiders';
import Calculator from './Calculator';
import Update from './Update';

const initialState = {
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


// rider1: {
//     riderType: '',
//     option: '',
//     faceAmount: ''
// }, 
// rider2: {
//     riderType: '',
//     option: '',
//     faceAmount: ''
// }, 
// hospitalCash: {
//     riderType: '',
//     option: ''
// }, 
// childTermBenefit: {
//     riderType: '',
//     option: ''
// }, 
// accDeath: {
//     riderType: '',
//     faceAmount: ''
// }

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_BASE_PREMIUM':
            return {...state, basePremium: action.payload / 100}
        case 'UPDATE_TOTAL_PREMIUM':
            return {...state, totalPremium: action.payload / 100}
        case 'CHANGE_MODE_OF_PAYMENT':
            return {...state, modeOfPayment: action.payload}
        case 'CHANGE_FIRST_NAME':
            return {...state, firstName: action.payload}
        case 'CHANGE_LAST_NAME':
            return {...state, lastName: action.payload}
        case 'CHANGE_DOB':
            return {...state, 
                DOB: action.payload,
                planTypeSelected: 'term-insurance',
                termPlan: '',
                permanentPlan: '',
                termPeriod: '',
                permanentPeriod: '',
                desiredFaceAmount: '',
                faceAmount: '',
                termRiderPlan1: '',
                termRiderFaceAmount1: '',
                termRiderPlan2: '',
                termRiderFaceAmount2: '',
                hospitalCash: '',
                accidentalDeath: '',
                childTermBenefit: ''}
        case 'CHANGE_AGE_NEAREST':
            return {...state, 
                ageNearest: action.payload,
                planTypeSelected: 'term-insurance',
                termPlan: '',
                permanentPlan: '',
                termPeriod: '',
                permanentPeriod: '',
                desiredFaceAmount: '',
                faceAmount: '',
                termRiderPlan1: '',
                termRiderFaceAmount1: '',
                termRiderPlan2: '',
                termRiderFaceAmount2: '',
                hospitalCash: '',
                accidentalDeath: '',
                childTermBenefit: ''}
        case 'CHANGE_GENDER':
            return {...state, gender: action.payload}
        case 'CHANGE_SMOKER':
            return {...state, smoker: action.payload}
        case 'CHANGE_ADVISOR_NAME':
            return {...state, advisorName: action.payload}
        case 'CHANGE_ADVISOR_NUMBER':
            return {...state, advisorPhoneNumber: action.payload}
        case 'CHANGE_ADVISOR_EMAIL':
            return {...state, advisorEmail: action.payload}
        case 'UPDATE_PLAN_TYPE':
            if (action.payload === 'term-insurance') {
                return {...state, 
                    planTypeSelected: action.payload, 
                    permanentPlan: '', 
                    permanentPeriod: '',
                    desiredFaceAmount: '',
                    faceAmount: '',
                    termRiderPlan1: '',
                    termRiderFaceAmount1: '',
                    termRiderPlan2: '',
                    termRiderFaceAmount2: '',
                    hospitalCash: '',
                    accidentalDeath: '',
                    childTermBenefit: ''}
            }
            else {
                return {...state, 
                    planTypeSelected: action.payload, 
                    termPlan: '', 
                    termPeriod:  '',
                    desiredFaceAmount: '',
                    faceAmount: '',
                    termRiderPlan1: '',
                    termRiderFaceAmount1: '',
                    termRiderPlan2: '',
                    termRiderFaceAmount2: '',
                    hospitalCash: '',
                    accidentalDeath: '',
                    childTermBenefit: ''}
            }
        case 'UPDATE_TERM_PLAN':
            if (action.payload === 'CPP_DEFERRED_ELITE_TERM') {
                return {...state, termPlan: action.payload, coverageName: 'CPP Deferred Elite'}
            }
            else if (action.payload === 'CPP_SIMPLIFIED_ELITE_TERM') {
                return {...state, termPlan: action.payload, coverageName: 'CPP Simplified Elite'}
            }
            else if (action.payload === 'CPP_PREFERRED_TERM') {
                return {...state, termPlan: action.payload, coverageName: 'CPP Preferred'}
            }
            else if (action.payload === 'CPP_PREFERRED_ELITE_TERM') {
                return {...state, termPlan: action.payload, coverageName: 'CPP Preferred Elite'}
            }
            return {...state, termPlan: '', coverageName: ''}
        case 'UPDATE_TERM_PERIOD':
            if (action.payload === 'LEVEL_TEN') {
                return {...state, termPeriod: action.payload, coverageTerm: '10 Year Term'}
            }
            if (action.payload === 'LEVEL_TWENTY') {
                return {...state, termPeriod: action.payload, coverageTerm: '20 Year Term'}
            }
            if (action.payload === 'LEVEL_TWENTYFIVE') {
                return {...state, termPeriod: action.payload, coverageTerm: '25 Year Term'}
            }
            if (action.payload === 'DECREASING_TWENTYFIVE') {
                return {...state, termPeriod: action.payload, coverageTerm: 'Decreasing 25 Year Term'}
            }
            return {...state, termPeriod: '', coverageTerm: ''}
        case 'UPDATE_PERMANENT_PLAN':
            if (action.payload === 'CPP_GUARANTEED_ACCEPTANCE_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Guaranteed Acceptance Life'}
            }
            else if (action.payload === 'CPP_DEFERRED_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Life'}
            }
            else if (action.payload === 'CPP_DEFERRED_ELITE_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Elite Life'}
            }
            else if (action.payload === 'CPP_DEFERRED_ELITE_LIFE_100') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Elite Life T100'}
            }
            else if (action.payload === 'CPP_SIMPLIFIED_ELITE_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Simplified Elite Life'}
            }
            else if (action.payload === 'CPP_SIMPLIFIED_ELITE_LIFE_100') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Simplified Elite Life T100'}
            }
            else if (action.payload === 'CPP_PREFERRED_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Life'}
            }
            else if (action.payload === 'CPP_PREFERRED_LIFE_100') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Preferred T100'}
            }
            else if (action.payload === 'CPP_PREFERRED_ELITE_LIFE') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Elite Life'}
            }
            else if (action.payload === 'CPP_PREFERRED_ELITE_LIFE_100') {
                return {...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Elite T100'}
            }
            return {...state, permanentPlan: action.payload, coverageName: ''}
        case 'UPDATE_PERMANENT_PERIOD':
            return {...state, permanentPeriod: action.payload}
        case 'UPDATE_DESIRED_FACE_AMOUNT':
            return {...state, 
                desiredFaceAmount: action.payload,
                faceAmount: action.payload}
        case 'UPDATE_TERM_RIDER_PLAN_1':
            return {...state, 
                termRiderPlan1: action.payload}
        case 'UPDATE_TERM_RIDER_PLAN_2':
            return {...state, 
                termRiderPlan2: action.payload}
        case 'UPDATE_TERM_RIDER_FACE_AMOUNT_1':
            return {...state, 
                termRiderFaceAmount1: action.payload}
        case 'UPDATE_TERM_RIDER_FACE_AMOUNT_2':
            return {...state, 
                termRiderFaceAmount2: action.payload}
        case 'UPDATE_RIDER1_PREMIUM':
            return {...state,
                termRider1Premium: action.payload / 100}
        case 'UPDATE_RIDER2_PREMIUM':
            return {...state,
                termRider2Premium: action.payload / 100}
        case 'UPDATE_HOSPITAL_CASH':
            if (action.payload === 'TWENTYFIVE_DOLLARS_PER_DAY') {
                if (action.payload !== '') {
                    return {...state, 
                    hospitalCash: action.payload,
                    hospitalCashName: '$25 per day',
                    riders: {...state.riders, hospitalCash: {riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload}}}
                }
            }
            else if (action.payload === 'FIFTY_DOLLARS_PER_DAY') {
                if (action.payload !== '') {
                    return {...state, 
                    hospitalCash: action.payload,
                    hospitalCashName: '$50 per day',
                    riders: {...state.riders, hospitalCash: {riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload}}}
                }
            }
            else if (action.payload === 'ONE_HUNDRED_DOLLARS_PER_DAY') {
                if (action.payload !== '') {
                    return {...state, 
                    hospitalCash: action.payload,
                    hospitalCashName: '$100 per day',
                    riders: {...state.riders, hospitalCash: {riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload}}}
                }
            }
            return {...state, hospitalCash: action.payload}
        case 'UPDATE_HOSPITAL_CASH_PREMIUM':
            return {...state,
            hospitalCashPremium: action.payload / 100}
        case 'UPDATE_ACCIDENTAL_DEATH':
            if (action.payload !== '') {
                return {...state, 
                accidentalDeath: action.payload,
                riders: {...state.riders, accDeath: {riderType: 'ACCIDENTAL_DEATH_BENEFIT', faceAmount: action.payload}}}
            }
            return {...state, accidentalDeath: action.payload}
        case 'UPDATE_ACCIDENTAL_DEATH_PREMIUM':
            return {...state,
                accidentalDeathPremium: action.payload / 100}
        case 'UPDATE_CHILD_TERM_BENEFIT':
            if (action.payload === 'FIVE_THOUSAND') {
                if (action.payload !== '') {
                    return {...state, 
                    childTermBenefit: action.payload,
                    childTermBenefitName: '5000',
                    riders: {...state.riders, childTermBenefit: {riderType: 'CHILD_TERM_BENEFIT', option: action.payload}}}
                }
            }
            else if (action.payload === 'TEN_THOUSAND') {
                if (action.payload !== '') {
                    return {...state, 
                    childTermBenefit: action.payload,
                    childTermBenefitName: '10000',
                    riders: {...state.riders, childTermBenefit: {riderType: 'CHILD_TERM_BENEFIT', option: action.payload}}}
                }
            }
            else if (action.payload === 'FIFTEEN_THOUSAND') {
                if (action.payload !== '') {
                    return {...state, 
                    childTermBenefit: action.payload,
                    childTermBenefitName: '15000',
                    riders: {...state.riders, childTermBenefit: {riderType: 'CHILD_TERM_BENEFIT', option: action.payload}}}
                }
            }
            return {...state, childTermBenefit: action.payload}
        case 'UPDATE_CHILD_TERM_BENEFIT_PREMIUM':
            return {...state,
                childTermBenefitPremium: action.payload / 100}
    }
    return state
}

const store = createStore(reducer)

export default class NewIllustrator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static navigationOptions = {
      header: null
  };

  render() {
    return (
        <Provider store={store}>
            <ScrollView contentContainerStyle={styles.container}>
                <HeaderLogo />
                <NewSaveIllustration navigation={this.props.navigation}/>
                <ReviewSavePrint />
                <Calculator />
                <InsuredInformation />
                <BasePlan />
                <TermRiders />
                <OptionalBenefitRiders />
            </ScrollView>
        </Provider>
    );
  }
}

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