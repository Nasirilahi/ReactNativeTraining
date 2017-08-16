import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import FormContainer from './FormContainer';
import Button from './form-components/Button';

export default class ProfileScreen extends Component{
    constructor(){
        super();
        this.state = {
            user:{
                firstName:{
                    value:'',
                    isRequired:true,
                },
                lastName:{
                    value:'',
                    isRequired:false,
                }
            },
        };
    }

    onChangeText = (text, type) => {
        const { user } = this.state;
        user[type].value = text;
        //this.setState({user}, console.log('state', this.state));
        //this.setState({user:{[type] :text }}, console.log('state', this.state));
    }

    onSubmit = () => {
        const { user } = this.state;
        if((user.firstName.isRequired && user.firstName.value)){
            // call api to submit user data
        }
        else{
            //display related information
        }
    }

    render(){
        return(
            <View style={styles.container}>
                 <FormContainer 
                    user={this.state.user}
                    onChangeText={this.onChangeText} 
                 />
                 <Button text={'Submit'} onSubmit={this.onSubmit} />
            </View>
        );
    }
}