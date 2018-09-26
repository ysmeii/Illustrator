import React, { Component } from 'react';
import { View, Text, TextInput, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements'

class SelectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.formContainer}>
            <Text style={styles.fieldTitles}>Saved Illustrations</Text>
            <View style={styles.field}>
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />
                <Text style={styles.titleCoverage}>CPP Deferred Plan</Text>
                <Text style={styles.titleCoverage}>Jane Does</Text>
                <Text style={styles.titleCoverage}>September 26, 2018</Text>
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
        advisorEmail: state.advisorEmail
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionList)

const styles = StyleSheet.create({
    fieldTitles: {
        margin: 10, 
        fontSize: 20
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        padding: 0,
        margin: 0,
        width: '95%',
        marginTop: 10
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
        width: 50, 
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
})