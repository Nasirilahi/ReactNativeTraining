import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from '../styles';

const RowContainer = (props) => {
    return(
        <View style={styles.rowContainer}>
            {
                props.children
            }
        </View>
    );
};


export default RowContainer;