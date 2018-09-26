import React, { Component } from 'react';
import { Alert, AppRegistry, Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class NewIllustrator extends Component {
  constructor(props) {
    super(props);
  }

  handlePressButton = () => {
    Alert.alert("Hello!");
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handlePressButton}
        >
          <Text> New Illustration </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handlePressButton}
        >
          <Text> Saved Illustrations </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    padding: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    height: 30,
    margin: 10
  },
  buttonContainer: {
    flex: 1
  }
});
