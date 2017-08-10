import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var ES5ClassComponent = React.createClass({
    render(){
        return(
             <View>
                 <Text>I am ES5 Class component</Text>
            </View>
        )
    }
});

export default ES5ClassComponent;