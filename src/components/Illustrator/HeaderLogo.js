import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import I18n from '../../i18n/i18n';
import { connect } from 'react-redux';

class HeaderLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.title}>
                <Image style={styles.logo} source={require('../../images/cpplogo.png')} />
                <Picker
                    selectedValue={this.props.language}
                    style={{ height: 30, width: 125 }}
                    onValueChange={(itemValue) => this.props.changeLanguage(itemValue)}>
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Français" value="fr" />
                </Picker>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{I18n.t('illustrator')}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        language: state.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (language) => dispatch({ type: 'CHANGE_LANGUAGE', payload: language })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo)

const styles = StyleSheet.create({
    title: {
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 150
    },
    language: {
        alignItems: 'center',
    }
})