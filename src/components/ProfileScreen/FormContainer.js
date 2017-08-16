import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import RowContainer from './form-components/RowContainer';
import Label from './form-components/Label';
import TextInputContianer from './form-components/TextInputContianer';

function FormContainer({user,onChangeText}){
    return(
        <View>
           <RowContainer>
               <Label text={'First Name:'} />
               <TextInputContianer value={user.firstName.value} onChangeText={onChangeText} type={'firstName'}/>
           </RowContainer>
           <RowContainer>
               <Label text={'Last Name:'} />
               <TextInputContianer value={user.lastName.value} onChangeText={onChangeText} type={'firstName'} />
           </RowContainer>
        </View>
    );
}

export default FormContainer;