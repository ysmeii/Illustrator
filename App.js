import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import I18n from 'react-native-i18n';

import NewIllustrator from './src/components/Illustrator/NewIllustrator';
import IllustrationSelection from './src/components/Illustrator/IllustrationSelection';
import BackwardsCalculator from './src/components/Illustrator/BackwardsCalculator';

const initialState = {
  modeOfPayment: 'monthly-payment',
  calculatorType: 'premiums',
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
  rider1PlanName: '',
  termRiderPlan2: '',
  termRiderFaceAmount2: '',
  rider2PlanName: '',
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
  childTermBenefitName: '',
  language: 'en',
  monthlyPremium: '',
  targetPremium: {
    monthlyPremiumsCents: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      console.log("updating data", action.payload);
      return {
        ...state,
        modeOfPayment: action.payload.modeOfPayment,
        coverageName: action.payload.coverageName,
        coverageTerm: action.payload.coverageTerm,
        faceAmount: action.payload.faceAmount,
        basePremium: action.payload.basePremium,
        totalPremium: action.payload.totalPremium,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        DOB: action.payload.DOB,
        ageNearest: action.payload.ageNearest,
        gender: action.payload.gender,
        smoker: action.payload.smoker,
        advisorName: action.payload.advisorName,
        advisorPhoneNumber: action.payload.advisorPhoneNumber,
        advisorEmail: action.payload.advisorEmail,
        planTypeSelected: action.payload.planTypeSelected,
        termPlan: action.payload.termPlan,
        permanentPlan: action.payload.permanentPlan,
        termPeriod: action.payload.termPeriod,
        permanentPeriod: action.payload.permanentPeriod,
        desiredFaceAmount: action.payload.desiredFaceAmount,
        termRiderPlan1: action.payload.termRiderPlan1,
        termRiderFaceAmount1: action.payload.termRiderFaceAmount1,
        termRiderPlan2: action.payload.termRiderPlan2,
        termRiderFaceAmount2: action.payload.termRiderFaceAmount2,
        hospitalCash: action.payload.hospitalCash,
        accidentalDeath: action.payload.accidentalDeath,
        childTermBenefit: action.payload.childTermBenefit,
        riders: action.payload.riders,
        accidentalDeathPremium: action.payload.accidentalDeathPremium,
        childTermBenefitPremium: action.payload.childTermBenefitPremium,
        hospitalCashPremium: action.payload.hospitalCashPremium,
        termRider1Premium: action.payload.termRider1Premium,
        termRider2Premium: action.payload.termRider2Premium,
        hospitalCashName: action.payload.hospitalCashName,
        childTermBenefitName: action.payload.childTermBenefitName
      }
    case 'CHANGE_CALCULATOR_TYPE':
      return { ...state, calculatorType: action.payload, faceAmount: '0.00', desiredFaceAmount: '' }
    case 'UPDATE_BASE_PREMIUM':
      return { ...state, basePremium: action.payload / 100 }
    case 'UPDATE_TOTAL_PREMIUM':
      return { ...state, totalPremium: action.payload / 100 }
    case 'CHANGE_MODE_OF_PAYMENT':
      return { ...state, modeOfPayment: action.payload }
    case 'CHANGE_FIRST_NAME':
      return { ...state, firstName: action.payload }
    case 'CHANGE_LAST_NAME':
      return { ...state, lastName: action.payload }
    case 'CHANGE_DOB':
      return {
        ...state,
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
        childTermBenefit: ''
      }
    case 'CHANGE_AGE_NEAREST':
      return {
        ...state,
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
        childTermBenefit: ''
      }
    case 'CHANGE_GENDER':
      return { ...state, gender: action.payload }
    case 'CHANGE_SMOKER':
      return { ...state, smoker: action.payload }
    case 'CHANGE_ADVISOR_NAME':
      return { ...state, advisorName: action.payload }
    case 'CHANGE_ADVISOR_NUMBER':
      return { ...state, advisorPhoneNumber: action.payload }
    case 'CHANGE_ADVISOR_EMAIL':
      return { ...state, advisorEmail: action.payload }
    case 'UPDATE_PLAN_TYPE':
      if (action.payload === 'term-insurance') {
        return {
          ...state,
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
          childTermBenefit: ''
        }
      }
      else {
        return {
          ...state,
          planTypeSelected: action.payload,
          termPlan: '',
          termPeriod: '',
          desiredFaceAmount: '',
          faceAmount: '',
          termRiderPlan1: '',
          termRiderFaceAmount1: '',
          termRiderPlan2: '',
          termRiderFaceAmount2: '',
          hospitalCash: '',
          accidentalDeath: '',
          childTermBenefit: ''
        }
      }
    case 'UPDATE_TERM_PLAN':
      if (action.payload === 'CPP_DEFERRED_ELITE_TERM') {
        return { ...state, termPlan: action.payload, coverageName: 'CPP Deferred Elite' }
      }
      else if (action.payload === 'CPP_SIMPLIFIED_ELITE_TERM') {
        return { ...state, termPlan: action.payload, coverageName: 'CPP Simplified Elite' }
      }
      else if (action.payload === 'CPP_PREFERRED_TERM') {
        return { ...state, termPlan: action.payload, coverageName: 'CPP Preferred' }
      }
      else if (action.payload === 'CPP_PREFERRED_ELITE_TERM') {
        return { ...state, termPlan: action.payload, coverageName: 'CPP Preferred Elite' }
      }
      return { ...state, termPlan: '', coverageName: '' }
    case 'UPDATE_TERM_PERIOD':
      if (action.payload === 'LEVEL_TEN') {
        return { ...state, termPeriod: action.payload, coverageTerm: '10 Year Term' }
      }
      if (action.payload === 'LEVEL_TWENTY') {
        return { ...state, termPeriod: action.payload, coverageTerm: '20 Year Term' }
      }
      if (action.payload === 'LEVEL_TWENTYFIVE') {
        return { ...state, termPeriod: action.payload, coverageTerm: '25 Year Term' }
      }
      if (action.payload === 'DECREASING_TWENTYFIVE') {
        return { ...state, termPeriod: action.payload, coverageTerm: 'Decreasing 25 Year Term' }
      }
      return { ...state, termPeriod: '', coverageTerm: '' }
    case 'UPDATE_PERMANENT_PLAN':
      if (action.payload === 'CPP_GUARANTEED_ACCEPTANCE_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Guaranteed Acceptance Life' }
      }
      else if (action.payload === 'CPP_DEFERRED_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Life' }
      }
      else if (action.payload === 'CPP_DEFERRED_ELITE_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Elite Life' }
      }
      else if (action.payload === 'CPP_DEFERRED_ELITE_LIFE_100') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Deferred Elite Life T100' }
      }
      else if (action.payload === 'CPP_SIMPLIFIED_ELITE_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Simplified Elite Life' }
      }
      else if (action.payload === 'CPP_SIMPLIFIED_ELITE_LIFE_100') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Simplified Elite Life T100' }
      }
      else if (action.payload === 'CPP_PREFERRED_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Life' }
      }
      else if (action.payload === 'CPP_PREFERRED_LIFE_100') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Preferred T100' }
      }
      else if (action.payload === 'CPP_PREFERRED_ELITE_LIFE') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Elite Life' }
      }
      else if (action.payload === 'CPP_PREFERRED_ELITE_LIFE_100') {
        return { ...state, permanentPlan: action.payload, coverageName: 'CPP Preferred Elite T100' }
      }
      return { ...state, permanentPlan: action.payload, coverageName: '' }
    case 'UPDATE_PERMANENT_PERIOD':
      return { ...state, permanentPeriod: action.payload }
    case 'UPDATE_DESIRED_FACE_AMOUNT':
      if (state.calculatorType === 'premiums') {
        return {
          ...state,
          desiredFaceAmount: action.payload,
          faceAmount: action.payload
        }
      }
      else if (state.calculatorType === 'faceAmount') {
        return {
          ...state,
          targetPremium: { ...state.targetPremium, monthlyPremiumsCents: action.payload },
          basePremium: (action.payload / 100).toFixed(2)
        }
      }
    case 'UPDATE_FACE_AMOUNT':
      return {
        ...state,
        desiredFaceAmount: (action.payload).toFixed(2),
        faceAmount: (action.payload).toFixed(2)
      }
    case 'UPDATE_TERM_RIDER_PLAN_1':
      if (action.payload === 'LEVEL_TEN') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan1: action.payload,
            rider1PlanName: '10 Year Term Rider',
            riders: { ...state.riders, rider1: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'LEVEL_TWENTY') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan1: action.payload,
            rider1PlanName: '20 Year Term Rider',
            riders: { ...state.riders, rider1: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'LEVEL_TWENTYFIVE') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan1: action.payload,
            rider1PlanName: '25 Year Term Rider',
            riders: { ...state.riders, rider1: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'DECREASING_TWENTYFIVE') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan1: action.payload,
            rider1PlanName: 'Decreasing 25 Year Term Rider',
            riders: { ...state.riders, rider1: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      return { ...state, termRiderPlan1: action.payload, rider1PlanName: '' }
    case 'UPDATE_TERM_RIDER_PLAN_2':
      if (action.payload === 'LEVEL_TEN') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan2: action.payload,
            rider2PlanName: '10 Year Term Rider',
            riders: { ...state.riders, rider2: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'LEVEL_TWENTY') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan2: action.payload,
            rider2PlanName: '20 Year Term Rider',
            riders: { ...state.riders, rider2: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'LEVEL_TWENTYFIVE') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan2: action.payload,
            rider2PlanName: '25 Year Term Rider',
            riders: { ...state.riders, rider2: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'DECREASING_TWENTYFIVE') {
        if (action.payload !== '') {
          return {
            ...state,
            termRiderPlan2: action.payload,
            rider2PlanName: 'Decreasing 25 Year Term',
            riders: { ...state.riders, rider2: { riderType: 'TERM', option: action.payload } }
          }
        }
      }
      return { ...state, termRiderPlan2: action.payload, rider2PlanName: '' }
    case 'UPDATE_TERM_RIDER_FACE_AMOUNT_1':
      if (action.payload !== '') {
        return {
          ...state,
          termRiderFaceAmount1: action.payload,
          riders: { ...state.riders, rider1: { ...state.riders.rider1, faceAmount: action.payload } }
        }
      }
      return { ...state, termRiderFaceAmount1: action.payload }
    case 'UPDATE_TERM_RIDER_FACE_AMOUNT_2':
      if (action.payload !== '') {
        return {
          ...state,
          termRiderFaceAmount2: action.payload,
          riders: { ...state.riders, rider2: { ...state.riders.rider2, faceAmount: action.payload } }
        }
      }
      return { ...state, termRiderFaceAmount2: action.payload }
    case 'UPDATE_RIDER1_PREMIUM':
      return {
        ...state,
        termRider1Premium: action.payload / 100
      }
    case 'UPDATE_RIDER2_PREMIUM':
      return {
        ...state,
        termRider2Premium: action.payload / 100
      }
    case 'UPDATE_HOSPITAL_CASH':
      if (action.payload === 'TWENTYFIVE_DOLLARS_PER_DAY') {
        if (action.payload !== '') {
          return {
            ...state,
            hospitalCash: action.payload,
            hospitalCashName: '$25 per day',
            riders: { ...state.riders, hospitalCash: { riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'FIFTY_DOLLARS_PER_DAY') {
        if (action.payload !== '') {
          return {
            ...state,
            hospitalCash: action.payload,
            hospitalCashName: '$50 per day',
            riders: { ...state.riders, hospitalCash: { riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'ONE_HUNDRED_DOLLARS_PER_DAY') {
        if (action.payload !== '') {
          return {
            ...state,
            hospitalCash: action.payload,
            hospitalCashName: '$100 per day',
            riders: { ...state.riders, hospitalCash: { riderType: 'HOSPITAL_CASH_BENEFIT', option: action.payload } }
          }
        }
      }
      return { ...state, hospitalCash: action.payload }
    case 'UPDATE_HOSPITAL_CASH_PREMIUM':
      return {
        ...state,
        hospitalCashPremium: action.payload / 100
      }
    case 'UPDATE_ACCIDENTAL_DEATH':
      if (action.payload !== '') {
        return {
          ...state,
          accidentalDeath: action.payload,
          riders: { ...state.riders, accDeath: { riderType: 'ACCIDENTAL_DEATH_BENEFIT', faceAmount: action.payload } }
        }
      }
      return { ...state, accidentalDeath: action.payload }
    case 'UPDATE_ACCIDENTAL_DEATH_PREMIUM':
      return {
        ...state,
        accidentalDeathPremium: action.payload / 100
      }
    case 'UPDATE_CHILD_TERM_BENEFIT':
      if (action.payload === 'FIVE_THOUSAND') {
        if (action.payload !== '') {
          return {
            ...state,
            childTermBenefit: action.payload,
            childTermBenefitName: '5000',
            riders: { ...state.riders, childTermBenefit: { riderType: 'CHILD_TERM_BENEFIT', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'TEN_THOUSAND') {
        if (action.payload !== '') {
          return {
            ...state,
            childTermBenefit: action.payload,
            childTermBenefitName: '10000',
            riders: { ...state.riders, childTermBenefit: { riderType: 'CHILD_TERM_BENEFIT', option: action.payload } }
          }
        }
      }
      else if (action.payload === 'FIFTEEN_THOUSAND') {
        if (action.payload !== '') {
          return {
            ...state,
            childTermBenefit: action.payload,
            childTermBenefitName: '15000',
            riders: { ...state.riders, childTermBenefit: { riderType: 'CHILD_TERM_BENEFIT', option: action.payload } }
          }
        }
      }
      return { ...state, childTermBenefit: action.payload }
    case 'UPDATE_CHILD_TERM_BENEFIT_PREMIUM':
      return {
        ...state,
        childTermBenefitPremium: action.payload / 100
      }
    case 'CHANGE_LANGUAGE':
      if (action.payload === 'en') {
        I18n.locale = action.payload
        return {
          ...state, language: 'en'
        }
      }
      else if (action.payload === 'fr') {
        I18n.locale = action.payload
        return {
          ...state, language: 'fr'
        }
      }
  }
  return state
}

const store = createStore(reducer)

const AppStackNavigator = createStackNavigator({
  NewIllustrator: NewIllustrator,
  IllustrationSelection: IllustrationSelection,
  BackwardsCalculator: BackwardsCalculator
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e74c3c'
  }
});
