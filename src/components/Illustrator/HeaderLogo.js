import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class HeaderLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.title}>
            <Image style={styles.logo} source={require('../../images/cpplogo.png')}/>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Illustrator</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 150
    }
})