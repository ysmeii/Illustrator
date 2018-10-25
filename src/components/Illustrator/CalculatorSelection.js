import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';

class CalculatorSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>{I18n.t('calculator')}</Text>
                <View style={styles.field}>
                    <Text>{I18n.t('SOLVE_FOR')}</Text>
                    <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.calculatorType}
                            style={{ height: 40, width: 250 }}
                            onValueChange={(itemValue) => this.props.changeCalculatorType(itemValue)}>
                            <Picker.Item label={I18n.t('premiums')} value="premiums" />
                            <Picker.Item label={I18n.t('faceAmount')} value="faceAmount" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('modeOfPayment')}</Text>
                    <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.modeOfPayment}
                            style={{ height: 40, width: 250 }}
                            onValueChange={(itemValue) => this.props.changeModeOfPayment(itemValue)}>
                            <Picker.Item label={I18n.t('monthly')} value="monthly-payment" />
                            <Picker.Item label={I18n.t('annual')} value="annual-payment" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        modeOfPayment: state.modeOfPayment,
        calculatorType: state.calculatorType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeModeOfPayment: (itemValue) => dispatch({ type: 'CHANGE_MODE_OF_PAYMENT', payload: itemValue }),
        changeCalculatorType: (itemValue) => dispatch({ type: 'CHANGE_CALCULATOR_TYPE', payload: itemValue})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorSelection)

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        backgroundColor: '#ecf0f1',
        paddingLeft: 8,
        marginBottom: 10,

    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 0,
        marginTop: 10,
        width: '95%'
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'stretch'
    },
    fieldTitles: {
        margin: 10,
        fontSize: 23
    }
});