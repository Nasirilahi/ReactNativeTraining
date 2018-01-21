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
    constructor(props){
        super(props);
        this.state = {
            user:{
                firstName:this.props.firstName
            }
        };
        console.log('constructor_child');

    }
    // On time execute when component has been instantiated
    componentWillMount(){
        console.log('componentWillMount_child');
    }
    // execute just after render when component has been mount on dom tree
    componentDidMount() {
        console.log('componentDidMount_child');
    }
    componentWillReceiveProps(nextProps){
        this.setState({user: {firstName: nextProps.firstName}})
        console.log('componentWillReceiveProps_child',nextProps);
    }
    shouldComponentUpdate(nextProps){
        console.log('shouldComponentUpdate_child',nextProps);
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate_child');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate_child');
    }
    componentWillUnmount() {
        console.log('componentDidMount_child');
    }


    render(){
        console.log('render_child');
        return(
        <View style={{marginBottom:50,}}>
            <Text>First name : {this.state.user.firstName}</Text>

        </View>
        );
    }
}
ES6ClassComponent.defaultComponent = {
    firstName: 'asjddak'
};
export default ES6ClassComponent;