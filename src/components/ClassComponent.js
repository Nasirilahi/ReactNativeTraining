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
        console.log('constructor');

    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',nextProps);
    }
    shouldComponentUpdate(nextProps){
        console.log('shouldComponentUpdate',nextProps);
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentDidMount');
    }
    onPress = () =>{
        this.setState({user:{firstName :'xyz'}});
    }
    render(){
        console.log('render');
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