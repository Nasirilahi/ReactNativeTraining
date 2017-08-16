import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from '../styles';

const TextInputContianer = ({value,onChangeText, type}) => {
    return(
        <View style={styles.textInputContainer}>
             <TextInput
                style={styles.textInput}
                onChangeText={(text) => onChangeText(text,type)}
                value={value}
             />
        </View>
    );
};

export default TextInputContianer;