import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/i18n';

class InsuredInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>{I18n.t('insuredInformation')}</Text>
                <View style={styles.field}>
                    <Text>{I18n.t('firstName')}</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        onChangeText={(text) => { this.props.changeFirstName(text) }}
                        value={this.props.firstName}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('lastName')}</Text>
                    <TextInput underlineColorAndroid='transparent'
                        style={styles.input}
                        onChangeText={(text) => { this.props.changeLastName(text) }}
                        value={this.props.lastName}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('DOB')}h</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder='DD/MM/YYYY'
                        onChangeText={(text) => { this.props.changeDOB(text) }}
                        value={this.props.DOB}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('ageNearest')}</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        onChangeText={(text) => { this.props.changeAgeNearest(text) }}
                        value={this.props.ageNearest}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('gender')}</Text>
                    <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.gender}
                            style={{ height: 30, width: 250 }}
                            onValueChange={(itemValue) => this.props.changeGender(itemValue)}>
                            <Picker.Item label="Select an option" value="" />
                            <Picker.Item label="Male" value="MALE" />
                            <Picker.Item label="Female" value="FEMALE" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('smoker')}</Text>
                    <View style={{ backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.smoker}
                            style={{ height: 30, width: 250 }}
                            onValueChange={(itemValue) => this.props.changeSmoker(itemValue)}>
                            <Picker.Item label="Select an option" value="" />
                            <Picker.Item label="Yes" value="SMOKER" />
                            <Picker.Item label="No" value="NONSMOKER" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('advisorName')}</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        onChangeText={(text) => { this.props.changeAdvisorName(text) }}
                        value={this.props.advisorName}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('advisorPhoneNumber')}</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder='416-555-1212'
                        onChangeText={(text) => { this.props.changeAdvisorPhoneNumber(text) }}
                        value={this.props.advisorPhoneNumber}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>{I18n.t('advisorEmail')}</Text>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placeholder='email@example.com'
                        onChangeText={(text) => { this.props.changeAdvisorEmail(text) }}
                        value={this.props.advisorEmail}>
                    </TextInput>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        DOB: state.DOB,
        ageNearest: state.ageNearest,
        gender: state.gender,
        smoker: state.smoker,
        advisorName: state.advisorName,
        advisorPhoneNumber: state.advisorPhoneNumber,
        advisorEmail: state.advisorEmail,
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFirstName: (text) => dispatch({ type: 'CHANGE_FIRST_NAME', payload: text }),
        changeLastName: (text) => dispatch({ type: 'CHANGE_LAST_NAME', payload: text }),
        changeDOB: (text) => dispatch({ type: 'CHANGE_DOB', payload: text }),
        changeAgeNearest: (text) => dispatch({ type: 'CHANGE_AGE_NEAREST', payload: text }),
        changeGender: (itemValue) => dispatch({ type: 'CHANGE_GENDER', payload: itemValue }),
        changeSmoker: (itemValue) => dispatch({ type: 'CHANGE_SMOKER', payload: itemValue }),
        changeAdvisorName: (text) => dispatch({ type: 'CHANGE_ADVISOR_NAME', payload: text }),
        changeAdvisorPhoneNumber: (text) => dispatch({ type: 'CHANGE_ADVISOR_NUMBER', payload: text }),
        changeAdvisorEmail: (text) => dispatch({ type: 'CHANGE_ADVISOR_EMAIL', payload: text })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsuredInformation)

const styles = StyleSheet.create({
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
    input: {
        height: 30,
        width: 250,
        backgroundColor: '#ecf0f1',
        paddingLeft: 8,
        marginBottom: 10
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'stretch'
    },
    inputDOB: {
        height: 30,
        width: 60,
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginBottom: 10
    },
    DOB: {
        flex: 1,
        flexDirection: 'row',
        width: 250,
        height: 30,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 25
    },
    fieldTitles: {
        margin: 10,
        fontSize: 20
    }
})