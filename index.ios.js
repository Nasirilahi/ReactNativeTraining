/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Todolist3 from './src/TodoList3'
import ListContainer from './src/TodoList1.1'
export default class reactnativeTraining extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todolist3 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
        backgroundColor: 'white',
    }
});

AppRegistry.registerComponent('reactnativeTraining', () => reactnativeTraining);
