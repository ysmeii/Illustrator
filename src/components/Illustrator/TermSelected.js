import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Picker } from 'react-native';

export default class TermSelected extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={styles.field}>
        <Text>Plan</Text>
        <View style={{backgroundColor: '#ecf0f1', marginBottom: 10 }}>
        <Picker
            selectedValue={this.state.pickerSelection}
            style={{ height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) => this.setState({pickerSelection: itemValue})}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="CPP Guaranteed Acceptance Life" value="cppgal" />
            <Picker.Item label="CPP Deferred Life" value="cppdl" />
            <Picker.Item label="CPP Deferred Elite Life" value="cppdel" />
            <Picker.Item label="CPP Deferred Elite T100" value="cppsel" />
            <Picker.Item label="CPP Simplified Elite Life" value="cppset" />
            <Picker.Item label="CPP Simplified Elite T100" value="cppset100" />
            <Picker.Item label="CPP Preferred Life" value="cpppl" />
            <Picker.Item label="CPP Preferred T100" value="cpppt100" />
            <Picker.Item label="CPP Preferred Elite Life" value="cpppel" />
            <Picker.Item label="CPP Preferred Elite T100" value="cpppet100" />
        </Picker>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#3498db',
        alignItems: 'center',
        //position: 'absolute',
        padding: 20
    },
    title: {
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 150
    },
    illustratorContainer: {
        flex: 1,
        flexDirection: 'row'
    },
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
        margin: 10
    },
    illustratorButton: {
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    formContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '95%'
    },
    input: {
        height: 50,
        width: 200,
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginBottom: 10,

    },
    inputDOB: {
        height: 50,
        width: 60,
        backgroundColor: '#ecf0f1',
        padding: 10,
        marginBottom: 10
    },
    DOB: {
        flex: 1,
        flexDirection: 'row',
        width: 200,
        height: 50,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginLeft: 25
    },
    field: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '95%',
        alignItems: 'center',
    },
    fieldTitles: {
        marginBottom: 10, 
        fontSize: 20
    }
});
