import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function PersonInfo(props){
    //console.log('props', props);
    return(
        <View>
            <Text>First name : {props.firstName}</Text>
             <Text>Last name : {props.lastName}</Text>
        </View>
    );
}

export default PersonInfo;