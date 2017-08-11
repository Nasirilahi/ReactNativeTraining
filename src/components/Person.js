import React from 'react';
import {
  StyleSheet,
  Text,
  View,
TouchableOpacity,
} from 'react-native';

function PersonInfo({firstName, lastName, onPress}){
    //console.log('props', props);
    return(
        <View>
            <Text>First name : {firstName}</Text>
            {
                 <Text>Last name : {lastName}</Text>         
                }
             
              <TouchableOpacity 
                onPress={onPress}
                style={{padding:20,backgroundColor:'red'}}
            >
                <Text>Change me </Text>
            </TouchableOpacity>
        </View>
    );
}
PersonInfo.defaultProps = {
    lastName:'jhrkwjhk'
};

export default PersonInfo;