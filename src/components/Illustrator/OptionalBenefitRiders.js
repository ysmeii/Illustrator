import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native';
import { connect } from 'react-redux';

class OptionalBenefitRiders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCondition() {
      if (this.props.planTypeSelected === 'term-insurance' && this.props.ageNearest !== '') {
          if (this.props.termPlan === '') {
              return 'none';
          }
          else if (this.props.termPlan === 'CPP_DEFERRED_ELITE_TERM') {
            return 'only-ctb';
          }
          else if ((this.props.termPlan === 'CPP_SIMPLIFIED_ELITE_TERM' || this.props.termPlan === 'CPP_PREFERRED_TERM' || this.props.termPlan === 'CPP_PREFERRED_ELITE_TERM') && 
          this.props.termPeriod !== '') {
              return 'both';
          }
          else {
              return 'only-ctb';
          }
      }
      else if (this.props.planTypeSelected === 'permanent-insurance' && this.props.ageNearest !== '') {
          if (this.props.permanentPlan === '') {
              return 'none';
          }
          else if (this.props.permanentPlan === 'CPP_GUARANTEED_ACCEPTANCE_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_LIFE') {
              return 'only-cash';
          }
          else if (this.props.permanentPlan === 'CPP_DEFERRED_ELITE_LIFE' || this.props.permanentPlan === 'CPP_DEFERRED_ELITE_LIFE_100') {
              return 'only-ctb';
          }
          else {
              return 'both';
          }
      }
      return 'none';
  }

  render() {
    if (this.renderCondition() === 'none') {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>Optional Benefit Riders</Text>
                <View style={styles.field}>
                    <Text>Hospital Cash</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.hospitalCash}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeHospitalCash(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Accidental Death</Text>
                    <TextInput 
                        underlineColorAndroid='transparent' 
                        placeholder="50000" 
                        style={styles.input}
                        onChangeText={(text) => this.props.changeAccidentalDeath(text)}
                        value={this.props.accidentalDeath}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>Child Term{"\n"}Benefit</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.childTermBenefit}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeChildTermBenefit(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
    else if (this.renderCondition() === 'both') {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>Optional Benefit Riders</Text>
                <View style={styles.field}>
                    <Text>Hospital Cash</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.hospitalCash}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeHospitalCash(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                            <Picker.Item label="$25 per day" value="TWENTYFIVE_DOLLARS_PER_DAY" />
                            <Picker.Item label="$50 per day" value="FIFTY_DOLLARS_PER_DAY" />
                            <Picker.Item label="$100 per day" value="ONE_HUNDRED_DOLLARS_PER_DAY" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Accidental Death</Text>
                    <TextInput 
                        underlineColorAndroid='transparent' 
                        placeholder="50000" 
                        style={styles.input}
                        onChangeText={(text) => this.props.changeAccidentalDeath(text)}
                        value={this.props.accidentalDeath}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>Child Term{"\n"}Benefit</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.childTermBenefit}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeChildTermBenefit(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                            <Picker.Item label="$5,000" value="FIVE_THOUSAND" />
                            <Picker.Item label="$10,000" value="TEN_THOUSAND" />
                            <Picker.Item label="$15,000" value="FIFTEEN_THOUSAND" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
    else if (this.renderCondition() === 'only-cash') {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>Optional Benefit Riders</Text>
                <View style={styles.field}>
                    <Text>Hospital Cash</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.hospitalCash}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeHospitalCash(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                            <Picker.Item label="$25 per day" value="TWENTYFIVE_DOLLARS_PER_DAY" />
                            <Picker.Item label="$50 per day" value="FIFTY_DOLLARS_PER_DAY" />
                            <Picker.Item label="$100 per day" value="ONE_HUNDRED_DOLLARS_PER_DAY" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Accidental Death</Text>
                    <TextInput 
                        underlineColorAndroid='transparent' 
                        placeholder="50000" 
                        style={styles.input}
                        onChangeText={(text) => this.props.changeAccidentalDeath(text)}
                        value={this.props.accidentalDeath}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>Child Term{"\n"}Benefit</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.childTermBenefit}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeChildTermBenefit(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
    else if (this.renderCondition() === 'only-ctb') {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.fieldTitles}>Optional Benefit Riders</Text>
                <View style={styles.field}>
                    <Text>Hospital Cash</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.hospitalCash}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeHospitalCash(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Accidental Death</Text>
                    <TextInput 
                        underlineColorAndroid='transparent' 
                        placeholder="50000" 
                        style={styles.input}
                        onChangeText={(text) => this.props.changeAccidentalDeath(text)}
                        value={this.props.accidentalDeath}>
                    </TextInput>
                </View>
                <View style={styles.field}>
                    <Text>Child Term{"\n"}Benefit</Text>
                    <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
                        <Picker
                            selectedValue={this.props.childTermBenefit}
                            style={{ height: 30, width: 250}}
                            onValueChange={(itemValue) => this.props.changeChildTermBenefit(itemValue)}>
                            <Picker.Item label="---------------" value="" />
                            <Picker.Item label="$5,000" value="FIVE_THOUSAND" />
                            <Picker.Item label="$10,000" value="TEN_THOUSAND" />
                            <Picker.Item label="$15,000" value="FIFTEEN_THOUSAND" />
                        </Picker>
                    </View>
                </View>
            </View>
        );
    }
  }
}

function mapStateToProps(state) {
    return {
        planTypeSelected: state.planTypeSelected,
        ageNearest: state.ageNearest,
        termPlan: state.termPlan,
        permanentPlan: state.permanentPlan,
        termPeriod: state.termPeriod,
        permanentPeriod: state.permanentPeriod,
        hospitalCash: state.hospitalCash,
        accidentalDeath: state.accidentalDeath,
        childTermBenefit: state.childTermBenefit,
        riders: state.riders
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeHospitalCash: (itemValue) => dispatch({ type: 'UPDATE_HOSPITAL_CASH', payload: itemValue }),
        changeAccidentalDeath: (text) => dispatch({ type: 'UPDATE_ACCIDENTAL_DEATH', payload: text }),
        changeChildTermBenefit: (itemValue) => dispatch({ type: 'UPDATE_CHILD_TERM_BENEFIT', payload: itemValue })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionalBenefitRiders)

const styles = StyleSheet.create({
    input: {
        height: 30,
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
        fontSize: 20
    }
});