import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class ES6ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            user:{
                name:'abc'
            }
        };
        //this.onPress = this.onPress.bind(this);
    }
    onPress(){
        this.setState({user:{name :'xyz'}});
    }
    render(){
        return(
        <View style={{marginBottom:50,}}>
            <Text>I am {this.state.user.name.toUpperCase()} from state in ES6Class</Text>
            <TouchableOpacity 
                onPress={this.onPress}
                style={{padding:20,backgroundColor:'red'}}
            >
                <Text>Change me </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

export default ES6ClassComponent;