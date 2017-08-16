import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from '../styles';

const Label = ({text}) => {
    return(
        <View style={styles.labelContainer}>
            <Text>{text}</Text>
        </View>
    );
}

export default Label;