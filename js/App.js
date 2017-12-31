import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

//Class Component
// class HomeScreen extends Component{
//     render(){
//
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     Home Screen using function
//                 </Text>
//                 <Text>{`Properties coming from parent using class component ${this.props.username}`}</Text>
//                 <Text>{'Properties coming from parent----->' + this.props.username}</Text>
//             </View>
//         );
//     }
// }

// Functional Component
function HomeScreen(props){

    return (
        <View style={styles.container}>
            <Text>
                Home Screen using function
            </Text>
            <Text>{`Properties coming from parent ${props.username}`}</Text>
            <Text>{'Properties coming from parent----->' + props.username}</Text>
            <Button />
        </View>
    );
}

// const HomeScreen = (props) =>
//     <View style={styles.container}>
//         <Text>
//             Home Screen using function
//         </Text>
//         <Text>{`Properties coming from parent ${props.username}`}</Text>
//         <Text>{'Properties coming from parent----->' + props.username}</Text>
//
//     </View>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default HomeScreen