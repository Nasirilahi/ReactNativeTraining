import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PersonInfo from './Person';

class ES6ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            user:{
                firstName:'abc'
            }
        };
        //this.onPress = this.onPress.bind(this);
    }
    onPress = () =>{
        this.setState({user:{firstName :'xyz'}});
    }
    render(){
        console.log(this.props);
        return(
        <View style={{marginBottom:50,}}>
         
            <PersonInfo firstName={this.state.user.firstName} onPress={this.onPress} /> 
        </View>
        );
    }
}
ES6ClassComponent.defaultComponent = {
    firstName: 'asjddak'
};
export default ES6ClassComponent;