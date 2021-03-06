import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import { RNHTMLtoPDF } from 'react-native-html-to-pdf';

class ReviewSavePrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async createPDF() {


        try {
            let options = {
                html: '<h1>PDF TEST</h1>',
                fileName: 'test',
                directory: 'docs',
            };
    
            let file = await RNHTMLtoPDF.convert(options)
            console.log(file.filePath);
          } catch (err) {
            console.log(err)
          }
    }

    saveData() {
        if (this.props.coverageName) {
            let application = {
                modeOfPayment: this.props.modeOfPayment,
                coverageName: this.props.coverageName,
                coverageTerm: this.props.coverageTerm,
                faceAmount: this.props.faceAmount,
                basePremium: this.props.basePremium,
                totalPremium: this.props.totalPremium,
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                DOB: this.props.DOB,
                ageNearest: this.props.ageNearest,
                gender: this.props.gender,
                smoker: this.props.smoker,
                advisorName: this.props.advisorName,
                advisorPhoneNumber: this.props.advisorPhoneNumber,
                advisorEmail: this.props.advisorEmail,
                planTypeSelected: this.props.planTypeSelected,
                termPlan: this.props.termPlan,
                permanentPlan: this.props.permanentPlan,
                termPeriod: this.props.termPeriod,
                permanentPeriod: this.props.permanentPeriod,
                desiredFaceAmount: this.props.desiredFaceAmount,
                termRiderPlan1: this.props.termRiderPlan1,
                termRiderFaceAmount1: this.props.termRiderFaceAmount1,
                termRiderPlan2: this.props.termRiderPlan2,
                termRiderFaceAmount2: this.props.termRiderFaceAmount2,
                hospitalCash: this.props.hospitalCash,
                accidentalDeath: this.props.accidentalDeath,
                childTermBenefit: this.props.childTermBenefit,
                riders: this.props.riders,
                accidentalDeathPremium: this.props.accidentalDeathPremium,
                childTermBenefitPremium: this.props.childTermBenefitPremium,
                hospitalCashPremium: this.props.hospitalCashPremium,
                termRider1Premium: this.props.termRider1Premium,
                termRider2Premium: this.props.termRider2Premium,
                hospitalCashName: this.props.hospitalCashName,
                childTermBenefitName: this.props.childTermBenefitName
            }
            AsyncStorage.setItem('savetest1', JSON.stringify(application));
            alert('Application Saved');
        }
    }

    render() {
        return (
            <View style={styles.saveContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => this.createPDF()}>
                    <Image style={styles.icon} source={require('../../images/reviewIcon.png')} />
                    <Text>{I18n.t('review')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                    <Image style={styles.icon} source={require('../../images/printIcon.png')} />
                    <Text>{I18n.t('print')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton} onPress={() => this.saveData()}>
                    <Image style={styles.icon} source={require('../../images/saveIcon.png')} />
                    <Text>{I18n.t('save')}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        modeOfPayment: state.modeOfPayment,
        coverageName: state.coverageName,
        coverageTerm: state.coverageTerm,
        faceAmount: state.faceAmount,
        basePremium: state.basePremium,
        totalPremium: state.totalPremium,
        firstName: state.firstName,
        lastName: state.lastName,
        DOB: state.DOB,
        ageNearest: state.ageNearest,
        gender: state.gender,
        smoker: state.smoker,
        advisorName: state.advisorName,
        advisorPhoneNumber: state.advisorPhoneNumber,
        advisorEmail: state.advisorEmail,
        planTypeSelected: state.planTypeSelected,
        termPlan: state.termPlan,
        permanentPlan: state.permanentPlan,
        termPeriod: state.termPeriod,
        permanentPeriod: state.permanentPeriod,
        desiredFaceAmount: state.desiredFaceAmount,
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
        hospitalCashName: state.hospitalCashName,
        childTermBenefitName: state.childTermBenefitName,
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSavePrint)

const styles = StyleSheet.create({
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
        margin: 10,
        marginTop: 10
    }
});