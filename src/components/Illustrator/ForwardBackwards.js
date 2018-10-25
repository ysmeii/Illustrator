import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import I18n from '../../i18n/i18n';
import { connect } from 'react-redux';

class ForwardBackwards extends Component {
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
                language: 'en'
            }
        };
    }

    render() {
        return (
            <View style={styles.illustratorContainer}>
                <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('NewIllustrator')}>
                    <Text style={{color: 'black'}}>Fowards Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('BackwardsCalculator')}>
                    <Text style={{color: 'black'}}>Backwards Calculator</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForwardBackwards)

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
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: 160
    }
})
