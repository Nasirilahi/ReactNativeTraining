
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
Dimensions
} from 'react-native';
let {width, height} = Dimensions.get('window')
console.log('width, height', width, height)
class Main extends Component {
    render() {
        // let mainContainer = {flexDirection: 'row', backgroundColor: 'red'}

        return (
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <Text style={{color: 'blue', fontSize:30, fontWeight:'normal', fontFamily: 'Georgia-Bold'}}>sdkjfcnsdkjfcsd fkjhb</Text>
                </View>
            </View>
        );
    }
}




export default class reactnativeTraining extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Main />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
       flex:1,
        flexDirection : 'row',
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer:{
        backgroundColor: 'white'
    },
    bottomContainer:{
        flex:1,
        backgroundColor:'red',
    }
})

//flexDirection : column -> primary axis -> x axis and secondryaxis -> y -> axis
// flexDirection : row -> primary axis -> y axis and secondryaxis -> x -> axis
// alignItems -> primary axis
// justifyContent -> secondry axis


// 3 views with equal size

// 3 views with 60%, 30% and 10%


