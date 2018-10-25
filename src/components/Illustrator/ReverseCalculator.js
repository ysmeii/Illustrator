import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';

class ReverseCalculator extends Component {

    fetchApiData = () => {
        fetch('https://qa.consumerapi.cppdev.ca/quotes/reverse', {
            method: 'POST',
            headers: {
                "x-api-key": 'b1aae0c9-4a13-461a-b9fd-811bab8957f9',
                "Accept": 'application/json',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                "ageNearest": 63,
                "gender": "FEMALE",
                "smokerStatus": "SMOKER",
                "plan": "CPP_DEFERRED_ELITE_TERM",
                "term": "LEVEL_TEN",
                "targetPremium": {
                    "annualPremiumsCents": 300100
                }
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('Face Amount', responseJson.faceAmount);
                // if (this.props.riders.accDeath) {
                //     if (this.props.riders.accDeath.riderType && this.props.riders.accDeath.faceAmount === '50000') {
                //         this.props.passPlanBasePremium(responseJson.basePremiums.monthlyPremiumsCents);
                //         this.props.passTotalPremium(responseJson.totalPremiums.monthlyPremiumsCents);
                //     }
                // }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        this.fetchApiData();
        console.log("PROPS", this.props)
        return (
            <View style={styles.formContainer}>
                <View style={styles.field}>
                    <Text style={{ alignSelf: 'center' }}>{I18n.t('modeOfPayment')}</Text>
                    <View style={{ backgroundColor: '#ecf0f1', marginTop: 10, marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.modeOfPayment}
                            style={{ height: 40, width: 207 }}
                            onValueChange={(itemValue) => this.props.changeModeOfPayment(itemValue)}>
                            <Picker.Item label={I18n.t('monthly')} value="monthly-payment" />
                            <Picker.Item label={I18n.t('annual')} value="annual-payment" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text style={styles.titleCoverage}>{I18n.t('coverage')}</Text>
                    <Text style={styles.titleFaceAmount}>{I18n.t('faceAmount')}</Text>
                    <Text style={styles.titlePremiums}>{I18n.t('premiums')}</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.titleCoverage}>{this.props.coverageName} {this.props.coverageTerm}</Text>
                    <Text style={styles.titleFaceAmount}>${this.props.faceAmount}</Text>
                    <Text style={styles.titlePremiums}>${this.props.basePremium}</Text>
                </View>
                <View style={styles.field}>
                    {this.props.termRiderFaceAmount1 !== '' && this.props.termRider1Premium !== '' ? <Text style={styles.titleCoverage}>{this.props.coverageName} {this.props.rider1PlanName}</Text> : null}
                    {this.props.termRiderFaceAmount1 !== '' && this.props.termRider1Premium !== '' ? <Text style={styles.titleFaceAmount}>${this.props.termRiderFaceAmount1}</Text> : null}
                    {this.props.termRiderFaceAmount1 !== '' && this.props.termRider1Premium !== '' ? <Text style={styles.titlePremiums}>${this.props.termRider1Premium}</Text> : null}
                </View>
                <View style={styles.field}>
                    {this.props.termRiderFaceAmount2 !== '' && this.props.termRider2Premium !== '' ? <Text style={styles.titleCoverage}>{this.props.coverageName} {this.props.rider2PlanName}</Text> : null}
                    {this.props.termRiderFaceAmount2 !== '' && this.props.termRider2Premium !== '' ? <Text style={styles.titleFaceAmount}>${this.props.termRiderFaceAmount2}</Text> : null}
                    {this.props.termRiderFaceAmount2 !== '' && this.props.termRider2Premium !== '' ? <Text style={styles.titlePremiums}>${this.props.termRider2Premium}</Text> : null}
                </View>
                <View style={styles.field}>
                    {this.props.accidentalDeath !== '' && this.props.accidentalDeathPremium !== '' ? <Text style={styles.titleCoverage}>Accidental Death</Text> : null}
                    {this.props.accidentalDeath !== '' && this.props.accidentalDeathPremium !== '' ? <Text style={styles.titleFaceAmount}>${this.props.accidentalDeath}</Text> : null}
                    {this.props.accidentalDeath !== '' && this.props.accidentalDeathPremium !== '' ? <Text style={styles.titlePremiums}>${this.props.accidentalDeathPremium}</Text> : null}
                </View>
                <View style={styles.field}>
                    {this.props.childTermBenefit !== '' && this.props.childTermBenefitPremium !== '' ? <Text style={styles.titleCoverage}>Child Term Benefit</Text> : null}
                    {this.props.childTermBenefit !== '' && this.props.childTermBenefitPremium !== '' ? <Text style={styles.titleFaceAmount}>${this.props.childTermBenefitName}</Text> : null}
                    {this.props.childTermBenefit !== '' && this.props.childTermBenefitPremium !== '' ? <Text style={styles.titlePremiums}>${this.props.childTermBenefitPremium}</Text> : null}
                </View>
                <View style={styles.field}>
                    {this.props.hospitalCash !== '' && this.props.hospitalCashPremium !== '' ? <Text style={styles.titleCoverage}>Hospital Cash</Text> : null}
                    {this.props.hospitalCash !== '' && this.props.hospitalCashPremium !== '' ? <Text style={styles.titleFaceAmount}>{this.props.hospitalCashName}</Text> : null}
                    {this.props.hospitalCash !== '' && this.props.hospitalCashPremium !== '' ? <Text style={styles.titlePremiums}>${this.props.hospitalCashPremium}</Text> : null}
                </View>
                <View style={styles.field}>
                    <Text style={styles.titleCoverageBottom}>{I18n.t('totalPremiums')}</Text>
                    <Text style={styles.totalPremiumBottom}>${this.props.totalPremium}</Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        modeOfPayment: state.modeOfPayment,
        faceAmount: state.faceAmount,
        basePremium: state.basePremium,
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
        termRiderPlan1: state.termRiderPlan1,
        termRiderFaceAmount1: state.termRiderFaceAmount1,
        termRiderPlan2: state.termRiderPlan2,
        termRiderFaceAmount2: state.termRiderFaceAmount2,
        hospitalCash: state.hospitalCash,
        accidentalDeath: state.accidentalDeath,
        childTermBenefit: state.childTermBenefit,
        riders: state.riders,
        accidentalDeathPremium: state.accidentalDeathPremium,
        childTermBenefitPremium: state.childTermBenefitPremium,
        hospitalCashPremium: state.hospitalCashPremium,
        termRider1Premium: state.termRider1Premium,
        termRider2Premium: state.termRider2Premium,
        coverageName: state.coverageName,
        coverageTerm: state.coverageTerm,
        childTermBenefitName: state.childTermBenefitName,
        hospitalCashName: state.hospitalCashName,
        rider1PlanName: state.rider1PlanName,
        rider2PlanName: state.rider2PlanName,
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeModeOfPayment: (itemValue) => dispatch({ type: 'CHANGE_MODE_OF_PAYMENT', payload: itemValue }),
        passPlanBasePremium: (premium) => dispatch({ type: 'UPDATE_BASE_PREMIUM', payload: premium }),
        passRider1Premium: (premium) => dispatch({ type: 'UPDATE_RIDER1_PREMIUM', payload: premium }),
        passRider2Premium: (premium) => dispatch({ type: 'UPDATE_RIDER2_PREMIUM', payload: premium }),
        passAccidentalDeathPremium: (premium) => dispatch({ type: 'UPDATE_ACCIDENTAL_DEATH_PREMIUM', payload: premium }),
        passChildTermBenefitPremium: (premium) => dispatch({ type: 'UPDATE_CHILD_TERM_BENEFIT_PREMIUM', payload: premium }),
        passHospitalCashPremium: (premium) => dispatch({ type: 'UPDATE_HOSPITAL_CASH_PREMIUM', payload: premium }),
        passTotalPremium: (premium) => dispatch({ type: 'UPDATE_TOTAL_PREMIUM', payload: premium })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReverseCalculator)

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 0,
        margin: 0,
        width: '95%'
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'stretch',
    },
    titleCoverage: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9',
        marginBottom: 5,
        width: 200,
        paddingTop: 3,
        paddingBottom: 3
    },
    titleCoverageBottom: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9',
        marginTop: 3,
        marginBottom: 10,
        width: 200,
        paddingTop: 3,
        paddingBottom: 3
    },
    titleFaceAmount: {
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: '#2980b9',
        marginBottom: 5,
        width: 80,
        paddingTop: 3,
        paddingBottom: 3
    },
    titlePremiums: {
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#2980b9',
        marginBottom: 5,
        width: 80,
        paddingTop: 3,
        paddingBottom: 3
    },
    totalPremium: {
        textAlign: 'center',
        backgroundColor: '#2980b9',
        marginBottom: 5,
        width: 165,
        paddingTop: 3,
        paddingBottom: 3
    },
    totalPremiumBottom: {
        textAlign: 'center',
        backgroundColor: '#2980b9',
        marginBottom: 10,
        width: 164,
        paddingTop: 3,
        paddingBottom: 3,
        marginTop: 3
    }
});