import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,r
} from 'react-native';

export default class ProfileScreen extends Component{
    constructor(){
        super();
        this.state = {
            user:{
                firstName:''
            },
            text:'',
        };
    }
   
    render(){
        return(
            <View style={{flex:1,}}>
                 <View>
                     <Text>{'First Name:'}</Text>
                     <TextInput
                     style={{height:50,borderColor:'grey', borderWidth:1}}
                     value={this.state.user.firstName}
                     onChangeText={(text)=>this.setState({user:{firstName:text}})}
                     />
                 </View>
            </View>
        );
    }
}