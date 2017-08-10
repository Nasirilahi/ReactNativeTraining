import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import FunctionalComponent from './components/FunctionalComponent';
// import ES6ClassComponent from './components/ES6ClassComponent';
// import ES5ClassComponent from './components/ES5ClassComponent';

export default function(){
return(
     <View style={styles.container}>
          <Text>Functional Component</Text>
          {/*<FunctionalComponent />
          <ES6ClassComponent />
          <ES5ClassComponent />*/}
      </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
