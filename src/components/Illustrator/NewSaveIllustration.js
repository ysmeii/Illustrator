import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class NewSaveIllustration extends Component {
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
        };
    }

    render() {
        return (
            <View style={styles.illustratorContainer}>
                <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('NewIllustrator', { initialState: this.state.defaultState })}>
                    <Text>New Illustration</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('IllustrationSelection')}>
                    <Text>Saved Illustrations</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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
        marginTop: 10
    }
})
