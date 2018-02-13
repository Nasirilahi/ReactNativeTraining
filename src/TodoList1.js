import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    FlatList
} from 'react-native';

export default class Todolist extends Component {
    state = {
        isLoading: true,
    };

    async componentDidMount() {
        this.setState({ isLoading: true });
        const todos = await fetch(
            `https://jsonplaceholder.typicode.com/todos`
        ).then(r => r.json());

        this.setState({ todos, isLoading: false });
    }
    _keyExtractor = (item, index) => item.id;
    renderRow = ({item}) => {
        return(
            <View style={styles.listRow}>
                <View style={{flexDirection: 'row'}}>
                    <Text>{`Title: `}</Text>
                    <Text style={styles.listItem}>{item.title}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>{`Status: ${item.completed}`}</Text>

                </View>
            </View>
        )
    }
    render() {
        const { isLoading, todos } = this.state;
        if (isLoading) {
            return   <View style={[styles.container,{alignItems: 'center', justifyContent: 'center'}]}><ActivityIndicator size="large" color="#0000ff" isLoading={isLoading} /></View>
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={todos}
                        renderItem={this.renderRow}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listRow:{
        marginHorizontal:20,
        marginVertical:10,
        padding:5,
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5
    },
    listItem:{
        color: '#0090F1',
        fontSize:16,
        overflow: 'hidden',
        fontFamily: 'verdana',
        textAlign: 'left'
    }
});