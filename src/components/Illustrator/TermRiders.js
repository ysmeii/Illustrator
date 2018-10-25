import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';

class TermRiders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    enableTermRiders() {
        if (this.props.planTypeSelected === 'term-insurance') {
            if (this.props.termPeriod !== '' && this.props.termPeriod !== 'LEVEL_TEN') {
                return 'true';
            }
        }
        else if (this.props.planTypeSelected === 'permanent-insurance') {
            if (this.props.permanentPlan === "CPP_GUARANTEED_ACCEPTANCE_LIFE" || this.props.permanentPlan === 'CPP_DEFERRED_LIFE') {
                return 'false';
            }
            else if (this.props.permanentPlan === "CPP_DEFERRED_ELITE_LIFE_100" || this.props.permanentPlan === "CPP_SIMPLIFIED_ELITE_LIFE_100" ||
                this.props.permanentPlan === "CPP_PREFERRED_LIFE_100" || this.props.permanentPlan === "CPP_PREFERRED_ELITE_LIFE_100") {
                return 'true';
            }
            else if (this.props.permanentPeriod === "LIFE_PAY" && this.props.permanentPeriod !== "") {
                return 'true';
            }
            else {
                return 'false';
            }
        }
    }

    render() {
        if (this.enableTermRiders() === 'true' && this.props.calculatorType === 'premiums') {
            return (
                <View style={styles.formContainer}>
                    <Text style={styles.fieldTitles}>{I18n.t('termRiders')}</Text>
                    <View style={styles.field}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Term</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termRiderPlan1}
                                    style={{ height: 40, width: 220 }}
                                    onValueChange={(itemValue) => this.props.changeTermRiderPlan1(itemValue)}>
                                    <Picker.Item label="---------------" value="" />
                                    <Picker.Item label="10 Year Term" value="LEVEL_TEN" />
                                    <Picker.Item label="20 Year Term" value="LEVEL_TWENTY" />
                                    <Picker.Item label="25 Year Term" value="LEVEL_TWENTYFIVE" />
                                    <Picker.Item label="Decreasing 25 Year Term" value="DECREASING_TWENTYFIVE" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Desired Face Amount</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                onChangeText={(text) => this.props.changeTermRiderFaceAmount1(text)}
                                value={this.props.termRiderFaceAmount1}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.field}>
                        <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                            <Picker
                                selectedValue={this.props.termRiderPlan2}
                                style={{ height: 40, width: 220 }}
                                onValueChange={(itemValue) => this.props.changeTermRiderPlan2(itemValue)}>
                                <Picker.Item label="---------------" value="" />
                                <Picker.Item label="10 Year Term" value="LEVEL_TEN" />
                                <Picker.Item label="20 Year Term" value="LEVEL_TWENTY" />
                                <Picker.Item label="25 Year Term" value="LEVEL_TWENTYFIVE" />
                                <Picker.Item label="Decreasing 25 Year Term" value="DECREASING_TWENTYFIVE" />
                            </Picker>
                        </View>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => this.props.changeTermRiderFaceAmount2(text)}
                            value={this.props.termRiderFaceAmount2}>
                        </TextInput>
                    </View>
                </View>
            );
        }
        else if (this.props.calculatorType === 'premiums') {
            return (
                <View style={styles.formContainer}>
                    <Text style={styles.fieldTitles}>{I18n.t('termRiders')}</Text>
                    <View style={styles.field}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Term</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termRiderPlan1}
                                    style={{ height: 40, width: 220 }}
                                    onValueChange={(itemValue) => this.props.changeTermRiderPlan1(itemValue)}>
                                    <Picker.Item label="---------------" value="" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Desired Face Amount</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                onChangeText={(text) => this.props.changeTermRiderFaceAmount1(text)}
                                value={this.props.termRiderFaceAmount1}>
                            </TextInput>
                        </View>

                    </View>
                    <View style={styles.field}>
                        <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                            <Picker
                                selectedValue={this.props.termRiderPlan2}
                                style={{ height: 40, width: 220 }}
                                onValueChange={(itemValue) => this.props.changeTermRiderPlan2(itemValue)}>
                                <Picker.Item label="---------------" value="" />
                            </Picker>
                        </View>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => this.props.changeTermRiderFaceAmount2(text)}
                            value={this.props.termRiderFaceAmount2}>
                        </TextInput>
                    </View>
                </View>
            );
        }
        else {
            return (
                <View style={styles.formContainer}>
                    <Text style={styles.fieldTitles}>{I18n.t('termRiders')}</Text>
                    <View style={styles.field}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Term</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termRiderPlan1}
                                    style={{ height: 40, width: 220 }}
                                    onValueChange={(itemValue) => this.props.changeTermRiderPlan1(itemValue)}>
                                    <Picker.Item label="---------------" value="" />
                                </Picker>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginBottom: 4 }}>Monthly Premiums</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                onChangeText={(text) => this.props.changeTermRiderFaceAmount1(text)}
                                value={this.props.termRiderFaceAmount1}>
                            </TextInput>
                        </View>

                    </View>
                    <View style={styles.field}>
                        <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                            <Picker
                                selectedValue={this.props.termRiderPlan2}
                                style={{ height: 40, width: 220 }}
                                onValueChange={(itemValue) => this.props.changeTermRiderPlan2(itemValue)}>
                                <Picker.Item label="---------------" value="" />
                            </Picker>
                        </View>
                        <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.input}
                            onChangeText={(text) => this.props.changeTermRiderFaceAmount2(text)}
                            value={this.props.termRiderFaceAmount2}>
                        </TextInput>
                    </View>
                </View>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        planTypeSelected: state.planTypeSelected,
        termPlan: state.termPlan,
        permanentPlan: state.permanentPlan,
        termPeriod: state.termPeriod,
        permanentPeriod: state.permanentPeriod,
        termRiderPlan1: state.termRiderPlan1,
        termRiderFaceAmount1: state.termRiderFaceAmount1,
        termRiderPlan2: state.termRiderPlan2,
        termRiderFaceAmount2: state.termRiderFaceAmount2,
        language: state.language,
        calculatorType: state.calculatorType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTermRiderPlan1: (itemValue) => dispatch({ type: 'UPDATE_TERM_RIDER_PLAN_1', payload: itemValue }),
        changeTermRiderPlan2: (itemValue) => dispatch({ type: 'UPDATE_TERM_RIDER_PLAN_2', payload: itemValue }),
        changeTermRiderFaceAmount1: (text) => dispatch({ type: 'UPDATE_TERM_RIDER_FACE_AMOUNT_1', payload: text }),
        changeTermRiderFaceAmount2: (text) => dispatch({ type: 'UPDATE_TERM_RIDER_FACE_AMOUNT_2', payload: text })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermRiders)

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 140,
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
        marginBottom: 10,
        width: '95%'
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'stretch',
    },
    fieldTitles: {
        margin: 10,
        fontSize: 23,
        textAlign: 'center',
    }
});