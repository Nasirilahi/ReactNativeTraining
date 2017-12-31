import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import styles from './HomeScreenStyles'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home Screen
                </Text>
            </View>
    );
    }
}
