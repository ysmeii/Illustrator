import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';

class BasePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (this.props.calculatorType === 'premiums') {
            if (this.props.planTypeSelected === 'term-insurance') {
                return (
                    <View style={styles.formContainer}>
                        <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                        <View style={styles.field}>
                            <Text>{I18n.t('planType')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.planTypeSelected}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                    <Picker.Item label={I18n.t('termInsurance')} value="term-insurance" />
                                    <Picker.Item label={I18n.t('permanentInsurance')} value="permanent-insurance" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('plan')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termPlan}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changeTermPlan(itemValue)}>
                                    <Picker.Item label={I18n.t('selectOption')} value="" />
                                    <Picker.Item label="CPP Deferred Elite Term" value="CPP_DEFERRED_ELITE_TERM" />
                                    <Picker.Item label="CPP Simplified Elite Term" value="CPP_SIMPLIFIED_ELITE_TERM" />
                                    <Picker.Item label="CPP Preferred Term" value="CPP_PREFERRED_TERM" />
                                    <Picker.Item label="CPP Preferred Elite Term" value="CPP_PREFERRED_ELITE_TERM" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('term')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termPeriod}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changeTermPeriod(itemValue)}>
                                    <Picker.Item label={I18n.t('selectOption')} value="" />
                                    <Picker.Item label="10 Year Term" value="LEVEL_TEN" />
                                    <Picker.Item label="20 Year Term" value="LEVEL_TWENTY" />
                                    <Picker.Item label="25 Year Term" value="LEVEL_TWENTYFIVE" />
                                    <Picker.Item label="Decreasing 25 Year Term" value="DECREASING_TWENTYFIVE" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('desiredFaceAmount')}</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                placeholder='1000000'
                                onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                value={this.props.desiredFaceAmount}>
                            </TextInput>
                        </View>
                    </View>
                );
            }
            else if (this.props.calculatorType === 'premiums') {
                if (this.props.permanentPlan === 'CPP_GUARANTEED_ACCEPTANCE_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_ELITE_LIFE_100'
                    || this.props.permanentPlan === 'CPP_SIMPLIFIED_ELITE_LIFE_100' || this.props.permanentPlan === 'CPP_PREFERRED_LIFE_100' || this.props.permanentPlan === 'CPP_PREFERRED_ELITE_LIFE_100') {
                    return (
                        <View style={styles.formContainer}>
                            <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                            <View style={styles.field}>
                                <Text>{I18n.t('planType')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.planTypeSelected}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                        <Picker.Item label={I18n.t('termInsurance')} value="term-insurance" />
                                        <Picker.Item label={I18n.t('permanentInsurance')} value="permanent-insurance" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('plan')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPlan}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPlan(itemValue)}>
                                        <Picker.Item label={I18n.t('selectOption')} value="" />
                                        <Picker.Item label="CPP Guaranteed Acceptance Life" value="CPP_GUARANTEED_ACCEPTANCE_LIFE" />
                                        <Picker.Item label="CPP Deferred Life" value="CPP_DEFERRED_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite Life" value="CPP_DEFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite T100" value="CPP_DEFERRED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Simplified Elite Life" value="CPP_SIMPLIFIED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Simplified Elite T100" value="CPP_SIMPLIFIED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Life" value="CPP_PREFERRED_LIFE" />
                                        <Picker.Item label="CPP Preferred T100" value="CPP_PREFERRED_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Elite Life" value="CPP_PREFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Preferred Elite T100" value="CPP_PREFERRED_ELITE_LIFE_100" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('paymentPeriod')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPeriod}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPeriod(itemValue)}>
                                        <Picker.Item label="Pay to Age 100" value="LIFE_PAY" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('desiredFaceAmount')}</Text>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={styles.input}
                                    placeholder='1000000'
                                    onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                    value={this.props.desiredFaceAmount}>
                                </TextInput>
                            </View>
                        </View>
                    );
                }
                else {
                    return (
                        <View style={styles.formContainer}>
                            <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                            <View style={styles.field}>
                                <Text>{I18n.t('planType')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.planTypeSelected}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                        <Picker.Item label="Term Insurance" value="term-insurance" />
                                        <Picker.Item label="Permanent Insurance" value="permanent-insurance" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('plan')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPlan}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPlan(itemValue)}>
                                        <Picker.Item label="Select an option" value="" />
                                        <Picker.Item label="CPP Guaranteed Acceptance Life" value="CPP_GUARANTEED_ACCEPTANCE_LIFE" />
                                        <Picker.Item label="CPP Deferred Life" value="CPP_DEFERRED_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite Life" value="CPP_DEFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite T100" value="CPP_DEFERRED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Simplified Elite Life" value="CPP_SIMPLIFIED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Simplified Elite T100" value="CPP_SIMPLIFIED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Life" value="CPP_PREFERRED_LIFE" />
                                        <Picker.Item label="CPP Preferred T100" value="CPP_PREFERRED_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Elite Life" value="CPP_PREFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Preferred Elite T100" value="CPP_PREFERRED_ELITE_LIFE_100" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('paymentPeriod')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPeriod}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPeriod(itemValue)}>
                                        <Picker.Item label={I18n.t('selectOption')} value="" />
                                        <Picker.Item label="Pay to Age 100" value="LIFE_PAY" />
                                        <Picker.Item label="20 Pay" value="TWENTY_PAY" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('desiredFaceAmount')}</Text>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={styles.input}
                                    placeholder='1000000'
                                    onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                    value={this.props.desiredFaceAmount}>
                                </TextInput>
                            </View>
                        </View>
                    );
                }
            }
        }
        else if (this.props.calculatorType === 'faceAmount') {
            if (this.props.planTypeSelected === 'term-insurance') {
                return (
                    <View style={styles.formContainer}>
                        <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                        <View style={styles.field}>
                            <Text>{I18n.t('planType')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.planTypeSelected}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                    <Picker.Item label={I18n.t('termInsurance')} value="term-insurance" />
                                    <Picker.Item label={I18n.t('permanentInsurance')} value="permanent-insurance" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('plan')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termPlan}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changeTermPlan(itemValue)}>
                                    <Picker.Item label={I18n.t('selectOption')} value="" />
                                    <Picker.Item label="CPP Deferred Elite Term" value="CPP_DEFERRED_ELITE_TERM" />
                                    <Picker.Item label="CPP Simplified Elite Term" value="CPP_SIMPLIFIED_ELITE_TERM" />
                                    <Picker.Item label="CPP Preferred Term" value="CPP_PREFERRED_TERM" />
                                    <Picker.Item label="CPP Preferred Elite Term" value="CPP_PREFERRED_ELITE_TERM" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('term')}</Text>
                            <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                <Picker
                                    selectedValue={this.props.termPeriod}
                                    style={{ height: 40, width: 250 }}
                                    onValueChange={(itemValue) => this.props.changeTermPeriod(itemValue)}>
                                    <Picker.Item label={I18n.t('selectOption')} value="" />
                                    <Picker.Item label="10 Year Term" value="LEVEL_TEN" />
                                    <Picker.Item label="20 Year Term" value="LEVEL_TWENTY" />
                                    <Picker.Item label="25 Year Term" value="LEVEL_TWENTYFIVE" />
                                    <Picker.Item label="Decreasing 25 Year Term" value="DECREASING_TWENTYFIVE" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.field}>
                            <Text>{I18n.t('monthlyPremiums')}</Text>
                            <TextInput
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                placeholder='1000000'
                                onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                value={this.props.targetPremium.monthlyPremiumsCents}>
                            </TextInput>
                        </View>
                    </View>
                );
            }
            else if (this.props.calculatorType === 'faceAmount') {
                if (this.props.permanentPlan === 'CPP_GUARANTEED_ACCEPTANCE_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_ELITE_LIFE_100'
                    || this.props.permanentPlan === 'CPP_SIMPLIFIED_ELITE_LIFE_100' || this.props.permanentPlan === 'CPP_PREFERRED_LIFE_100' || this.props.permanentPlan === 'CPP_PREFERRED_ELITE_LIFE_100') {
                    return (
                        <View style={styles.formContainer}>
                            <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                            <View style={styles.field}>
                                <Text>{I18n.t('planType')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.planTypeSelected}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                        <Picker.Item label={I18n.t('termInsurance')} value="term-insurance" />
                                        <Picker.Item label={I18n.t('permanentInsurance')} value="permanent-insurance" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('plan')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPlan}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPlan(itemValue)}>
                                        <Picker.Item label={I18n.t('selectOption')} value="" />
                                        <Picker.Item label="CPP Guaranteed Acceptance Life" value="CPP_GUARANTEED_ACCEPTANCE_LIFE" />
                                        <Picker.Item label="CPP Deferred Life" value="CPP_DEFERRED_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite Life" value="CPP_DEFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite T100" value="CPP_DEFERRED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Simplified Elite Life" value="CPP_SIMPLIFIED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Simplified Elite T100" value="CPP_SIMPLIFIED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Life" value="CPP_PREFERRED_LIFE" />
                                        <Picker.Item label="CPP Preferred T100" value="CPP_PREFERRED_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Elite Life" value="CPP_PREFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Preferred Elite T100" value="CPP_PREFERRED_ELITE_LIFE_100" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('paymentPeriod')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPeriod}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPeriod(itemValue)}>
                                        <Picker.Item label="Pay to Age 100" value="LIFE_PAY" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('monthlyPremiums')}</Text>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={styles.input}
                                    placeholder='1000000'
                                    onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                    value={this.props.targetPremium.monthlyPremiumsCents}>
                                </TextInput>
                            </View>
                        </View>
                    );
                }
                else {
                    return (
                        <View style={styles.formContainer}>
                            <Text style={styles.fieldTitles}>{I18n.t('basePlan')}</Text>
                            <View style={styles.field}>
                                <Text>{I18n.t('planType')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.planTypeSelected}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePlanTypeSelected(itemValue)}>
                                        <Picker.Item label="Term Insurance" value="term-insurance" />
                                        <Picker.Item label="Permanent Insurance" value="permanent-insurance" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('plan')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPlan}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPlan(itemValue)}>
                                        <Picker.Item label="Select an option" value="" />
                                        <Picker.Item label="CPP Guaranteed Acceptance Life" value="CPP_GUARANTEED_ACCEPTANCE_LIFE" />
                                        <Picker.Item label="CPP Deferred Life" value="CPP_DEFERRED_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite Life" value="CPP_DEFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Deferred Elite T100" value="CPP_DEFERRED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Simplified Elite Life" value="CPP_SIMPLIFIED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Simplified Elite T100" value="CPP_SIMPLIFIED_ELITE_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Life" value="CPP_PREFERRED_LIFE" />
                                        <Picker.Item label="CPP Preferred T100" value="CPP_PREFERRED_LIFE_100" />
                                        <Picker.Item label="CPP Preferred Elite Life" value="CPP_PREFERRED_ELITE_LIFE" />
                                        <Picker.Item label="CPP Preferred Elite T100" value="CPP_PREFERRED_ELITE_LIFE_100" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('paymentPeriod')}</Text>
                                <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                                    <Picker
                                        selectedValue={this.props.permanentPeriod}
                                        style={{ height: 40, width: 250 }}
                                        onValueChange={(itemValue) => this.props.changePermanentPeriod(itemValue)}>
                                        <Picker.Item label={I18n.t('selectOption')} value="" />
                                        <Picker.Item label="Pay to Age 100" value="LIFE_PAY" />
                                        <Picker.Item label="20 Pay" value="TWENTY_PAY" />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.field}>
                                <Text>{I18n.t('monthlyPremiums')}</Text>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={styles.input}
                                    placeholder='1000000'
                                    onChangeText={(text) => this.props.changeDesiredFaceAmount(text)}
                                    value={this.props.targetPremium.monthlyPremiumsCents}>
                                </TextInput>
                            </View>
                        </View>
                    );
                }
            }
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
        desiredFaceAmount: state.desiredFaceAmount,
        language: state.language,
        calculatorType: state.calculatorType,
        targetPremium: state.targetPremium
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePlanTypeSelected: (itemValue) => dispatch({ type: 'UPDATE_PLAN_TYPE', payload: itemValue }),
        changeTermPlan: (itemValue) => dispatch({ type: 'UPDATE_TERM_PLAN', payload: itemValue }),
        changePermanentPlan: (itemValue) => dispatch({ type: 'UPDATE_PERMANENT_PLAN', payload: itemValue }),
        changeTermPeriod: (itemValue) => dispatch({ type: 'UPDATE_TERM_PERIOD', payload: itemValue }),
        changePermanentPeriod: (itemValue) => dispatch({ type: 'UPDATE_PERMANENT_PERIOD', payload: itemValue }),
        changeDesiredFaceAmount: (text) => dispatch({ type: 'UPDATE_DESIRED_FACE_AMOUNT', payload: text })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePlan)

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