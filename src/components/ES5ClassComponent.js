import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var ES5ClassComponent = React.createClass({
    getInitialState(){
        return{
             user:{
                name:'xyz'
            }
        };
    },
    getDefaultProps(){
        return{
            
        }
    }
    onPress(){
        this.setState({user:{name :'abc'}});
    },
    render(){
        return(
             <View>
                  <Text>I am {this.state.user.name.toUpperCase()} from state in ES5Class</Text>
                  <TouchableOpacity 
                    onPress={this.onPress}
                    style={{padding:20,backgroundColor:'grey'}}
                  >
                        <Text>Change me </Text>
                    </TouchableOpacity>
            </View>
        )
    }
});

export default ES5ClassComponent;