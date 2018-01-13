import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Platform
} from 'react-native';
import styles from './styles'
export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mobile</Text>
            </View>
        )
    }
}
