import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import NewIllustrator from './src/components/Illustrator/NewIllustrator';
import IllustrationSelection from './src/components/Illustrator/IllustrationSelection';

const AppStackNavigator = createStackNavigator({
  NewIllustrator: NewIllustrator,
  IllustrationSelection: IllustrationSelection
})

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e74c3c'
  }
});
