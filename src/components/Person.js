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
// PersonInfo.defaultProps = {
//     firstName: 'abc',
//     lastName: 'xyz',
// };

export default PersonInfo;