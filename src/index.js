import React from 'react';
import {
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import PersonInfo from './components/Person';
import ClassComponent from './components/ClassComponent';
import ES5ClassComponent from './components/ES5ClassComponent';
// moment
export default class index extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            user:{
                firstName:this.props.firstName,
                time: '',
            }
        };
        console.log('constructor_parent');

    }
    // On time execute when component has been instantiated
    componentWillMount(){
        setTimeout(()=> {
            this.setState({time: this.state.time + 1 })
        },1000)
        console.log('componentWillMount_parent');
    }
    // execute just after render when component has been mount on dom tree
    componentDidMount() {
        console.log('componentDidMount_parent');
    }
    componentWillReceiveProps(nextProps){
        // this.setState({user: {firstName: nextProps.firstName}})
        console.log('componentWillReceiveProps_parent',nextProps);
    }
    shouldComponentUpdate(nextProps){
        console.log('shouldComponentUpdate_parent',nextProps);
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate_parent');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate_parent');
    }
    componentWillUnmount() {
        console.log('componentDidMount_parent');
    }

    state = {
        firstName: 'abc'
    }
    onPress = () =>{
        this.setState({firstName :'xyz'});
    }
render(){
    console.log('render_parent');
    return(
        <View style={styles.container}>
            <ClassComponent firstName={this.state.firstName}  />
            <TouchableOpacity
                onPress={this.onPress}
                style={{padding:20,backgroundColor:'red'}}
            >
                <Text>Change me </Text>
            </TouchableOpacity>
            {/*<ES5ClassComponent />*/}
            {/*<PersonInfo firstName={'asdbasd'}  />*/}
        </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems:'center',
    justifyContent:'center',
  },
});
