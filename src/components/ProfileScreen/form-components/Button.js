import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';

const Button = ({text, onSubmit}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmit}>
                <Text>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;