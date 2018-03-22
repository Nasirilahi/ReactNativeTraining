import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    FlatList
} from 'react-native';

const TodoList = ({ todos }) => {
    if (!todos) return null;
    return (
        <View>
            <FlatList
                data={todos}
                renderItem={({item}) => {
                    return(
                        <View style={styles.listRow}>
                            <View style={{flexDirection: 'row'}}>
                                <Text>{`Title: `}</Text>
                                <Text style={styles.listItem}>{item.title}</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.id}
            />
            {/*todos.map(todo =>
                <Text key={todo.id}>
                    {todo.title}
                </Text>
            )*/}
        </View>
    );
};

class ListContainer extends PureComponent {
    state = {};

    async componentDidMount() {
        const todos = await fetch(
            `https://jsonplaceholder.typicode.com/todos`
        ).then(r => r.json());

        this.setState({ todos });
    }
    render() {
        return (
            <View>
                {/* <h1> SIMPLE FORM </h1>
                 <EnhancedForm /> */}

                <TodoList todos={this.state.todos} />
            </View>
        );
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

export default ListContainer;
