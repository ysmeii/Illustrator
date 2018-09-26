import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class NewSaveIllustration extends Component {
    constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.illustratorContainer}>
            <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('NewIllustrator')}>
                <Text>New Illustration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.illustratorButton} onPress={() => this.props.navigation.navigate('IllustrationSelection')}>
                <Text>Saved Illustrations</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    illustratorContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    illustratorButton: {
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
})
