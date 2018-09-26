import React, { Component } from 'react';
import { Alert, AppRegistry, Image, StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

export default class PreviewPrintSaveApply extends Component {
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
          onPress={this.onPress}
        >
          <Image style={styles.buttonPicture} source={require('../../images/reviewIcon.png')}/>
          <Text>Review</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Image style={styles.buttonPicture} source={require('../../images/printIcon.png')}/>
            <Text>Print</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
            >
              <Image style={styles.buttonPicture} source={require('../../images/saveIcon.png')}/>
              <Text>Save</Text>
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
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -380
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    flex: 1
  },
  buttonPicture: {
    alignItems: 'center',
    height: 75,
    width: 75
  }
});
