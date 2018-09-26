import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Update extends Component {
  fetchApiData = () => {
    if (this.props.planTypeSelected === 'term-insurance') {
        fetch('https://staging.consumerapi.cppdev.ca/quotes', {
        method: 'POST',
        headers: {
          "x-api-key": 'b1aae0c9-4a13-461a-b9fd-811bab8957f9',
          "Accept": 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "ageNearest": this.props.ageNearest,
            "gender": this.props.gender,
            "smokerStatus": this.props.smoker,
            "plan": this.props.termPlan,
            "term": this.props.termPeriod,
            "faceAmount": this.props.faceAmount,
            "riders": this.props.riders
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
            if (this.props.modeOfPayment === 'monthly-payment') {
                this.props.passPlanBasePremium(responseJson.basePremiums.monthlyPremiumsCents);
                if (this.props.riders.rider1) {
                    this.props.passRider1Premium(responseJson.riderPremiums.rider1.monthlyPremiumsCents);
                }
                if (this.props.riders.rider2) {
                    this.props.passRider2Premium(responseJson.riderPremiums.rider2.monthlyPremiumsCents);
                }
                if (this.props.riders.accDeath) {
                    this.props.passAccidentalDeathPremium(responseJson.riderPremiums.accDeath.monthlyPremiumsCents);
                }
                if (this.props.riders.hospitalCash) {
                    this.props.passHospitalCashPremium(responseJson.riderPremiums.hospitalCash.monthlyPremiumsCents);
                }
                if (this.props.riders.childTermBenefit) {
                    this.props.passChildTermBenefitPremium(responseJson.riderPremiums.childTermBenefit.monthlyPremiumsCents);
                }
                this.props.passTotalPremium(responseJson.totalPremiums.monthlyPremiumsCents);
            }
            else if (this.props.modeOfPayment === 'annual-payment') {
                this.props.passPlanBasePremium(responseJson.basePremiums.annualPremiumsCents);
                if (this.props.riders.rider1) {
                    this.props.passRider1Premium(responseJson.riderPremiums.rider1.annualPremiumsCents);
                }
                if (this.props.riders.rider2) {
                    this.props.passRider2Premium(responseJson.riderPremiums.rider2.annualPremiumsCents);
                }
                if (this.props.riders.accDeath) {
                    this.props.passAccidentalDeathPremium(responseJson.riderPremiums.accDeath.annualPremiumsCents);
                }
                if (this.props.riders.hospitalCash) {
                    this.props.passHospitalCashPremium(responseJson.riderPremiums.hospitalCash.annualPremiumsCents);
                }
                if (this.props.riders.childTermBenefit) {
                    this.props.passChildTermBenefitPremium(responseJson.riderPremiums.childTermBenefit.annualPremiumsCents);
                }
                this.props.passTotalPremium(responseJson.totalPremiums.annualPremiumsCents);
            }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else if (this.props.planTypeSelected === 'permanent-insurance') {
        fetch('https://staging.consumerapi.cppdev.ca/quotes', {
        method: 'POST',
        headers: {
          "x-api-key": 'b1aae0c9-4a13-461a-b9fd-811bab8957f9',
          "Accept": 'application/json',
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            "ageNearest": this.props.ageNearest,
            "gender": this.props.gender,
            "smokerStatus": this.props.smoker,
            "plan": this.props.permanentPlan,
            "premiumPayingPeriod": this.props.permanentPeriod,
            "faceAmount": this.props.faceAmount,
            "riders": this.props.riders
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
            if (this.props.modeOfPayment === 'monthly-payment') {
                this.props.passPlanBasePremium(responseJson.basePremiums.monthlyPremiumsCents);
                if (this.props.riders.rider1) {
                    this.props.passRider1Premium(responseJson.riderPremiums.rider1.monthlyPremiumsCents);
                }
                if (this.props.riders.rider2) {
                    this.props.passRider2Premium(responseJson.riderPremiums.rider2.monthlyPremiumsCents);
                }
                if (this.props.riders.accDeath) {
                    this.props.passAccidentalDeathPremium(responseJson.riderPremiums.accDeath.monthlyPremiumsCents);
                }
                if (this.props.riders.hospitalCash) {
                    this.props.passHospitalCashPremium(responseJson.riderPremiums.hospitalCash.monthlyPremiumsCents);
                }
                if (this.props.riders.childTermBenefit) {
                    this.props.passChildTermBenefitPremium(responseJson.riderPremiums.childTermBenefit.monthlyPremiumsCents);
                }
                this.props.passTotalPremium(responseJson.totalPremiums.monthlyPremiumsCents);
            }
            else if (this.props.modeOfPayment === 'annual-payment') {
                this.props.passPlanBasePremium(responseJson.basePremiums.annualPremiumsCents);
                if (this.props.riders.rider1) {
                    this.props.passRider1Premium(responseJson.riderPremiums.rider1.annualPremiumsCents);
                }
                if (this.props.riders.rider2) {
                    this.props.passRider2Premium(responseJson.riderPremiums.rider2.annualPremiumsCents);
                }
                if (this.props.riders.accDeath) {
                    this.props.passAccidentalDeathPremium(responseJson.riderPremiums.accDeath.annualPremiumsCents);
                }
                if (this.props.riders.hospitalCash) {
                    this.props.passHospitalCashPremium(responseJson.riderPremiums.hospitalCash.annualPremiumsCents);
                }
                if (this.props.riders.childTermBenefit) {
                    this.props.passChildTermBenefitPremium(responseJson.riderPremiums.childTermBenefit.annualPremiumsCents);
                }
                this.props.passTotalPremium(responseJson.totalPremiums.annualPremiumsCents);
            }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {
    return (
        <View style={styles.illustratorContainer}>
            <TouchableOpacity onPress={() => this.fetchApiData()} style={styles.illustratorButton}>
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        modeOfPayment: state.modeOfPayment,
        coverage: state.coverage,
        faceAmount: state.faceAmount,
        premiums: state.premiums,
        totalPremium: state.totalPremium,
        DOB: state.DOB,
        ageNearest: state.ageNearest,
        gender: state.gender,
        smoker: state.smoker,
        planTypeSelected: state.planTypeSelected,
        termPlan: state.termPlan,
        permanentPlan: state.permanentPlan,
        termPeriod: state.termPeriod,
        permanentPeriod: state.permanentPeriod,
        riders: state.riders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        passPlanBasePremium: (premium) => dispatch({ type: 'UPDATE_BASE_PREMIUM', payload: premium}),
        passRider1Premium: (premium) => dispatch({ type: 'UPDATE_RIDER1_PREMIUM', payload: premium}),
        passRider2Premium: (premium) => dispatch({ type: 'UPDATE_RIDER2_PREMIUM', payload: premium}),
        passAccidentalDeathPremium: (premium) => dispatch({ type: 'UPDATE_ACCIDENTAL_DEATH_PREMIUM', payload: premium}),
        passChildTermBenefitPremium: (premium) => dispatch({ type: 'UPDATE_CHILD_TERM_BENEFIT_PREMIUM', payload: premium}),
        passHospitalCashPremium: (premium) => dispatch({ type: 'UPDATE_HOSPITAL_CASH_PREMIUM', payload: premium}),
        passTotalPremium: (premium) => dispatch({ type: 'UPDATE_TOTAL_PREMIUM', payload: premium})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)

const styles = StyleSheet.create({
    illustratorContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    illustratorButton: {
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})