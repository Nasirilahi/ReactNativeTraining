import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import PersonInfo from './components/Person';
import ClassComponent from './components/ClassComponent';
import ES5ClassComponent from './components/ES5ClassComponent';

export default function(){
return(
     <View style={styles.container}>
          <ClassComponent />
          {/*<ES5ClassComponent />*/}
          {/*<PersonInfo firstName={'asdbasd'}  />*/}
      </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems:'center',
    justifyContent:'center',
  },
});
