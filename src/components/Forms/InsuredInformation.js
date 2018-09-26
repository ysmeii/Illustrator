import React, { Component } from 'react';
import { Alert, AppRegistry, Image, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class InsuredInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.names}>
          <Text style={styles.text}> First Name </Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  names: {

  },
  input: {
    height: 40,
    width: 100,
    backgroundColor: 'blue'
  }
});
