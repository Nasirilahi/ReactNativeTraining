import { StyleSheet,Dimensions } from 'react-native';
const { width, height, } = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        padding:20,
        alignItems:'center',
    },
    rowContainer:{
        width: width-20,
        flexDirection:'row',
        padding:5,
        alignItems:'center',
    },
    labelContainer:{
        flex:0.4,
        justifyContent:'center',
    },
    textInputContainer:{
        flex:0.6,
        marginLeft:10,
        justifyContent:'center',
        borderColor:'grey',
        borderWidth:1
    },
    textInput:{
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    },
    buttonContainer:{
        position:'absolute',
        bottom:20,
        width: width-20,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
        backgroundColor:'orange',
        borderRadius:10,
    },
});

export default styles;
