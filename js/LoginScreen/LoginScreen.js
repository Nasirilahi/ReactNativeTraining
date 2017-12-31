import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import styles from './LoginScreenStyles'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Login Screen
                </Text>
            </View>
        );
    }
}
