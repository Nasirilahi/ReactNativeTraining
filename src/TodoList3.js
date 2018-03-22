import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { compose } from "recompose";
const withCondition = (
    condition,
    OtherComponent = () => null
) => WrappedComponent => props =>
    condition(props) ? <OtherComponent /> : <WrappedComponent {...props} />;

const withConditionalRendering = compose(
    // first it loads
    withCondition(
        props => {
            console.log(props.isLoading);
            return props.isLoading;
        },
        () => <View><Text>Loading... </Text></View>
    ),
    // it would be null till it loads
    withCondition(props => props.todos === undefined),
    // it could be empty
    withCondition(
        props => props.todos.length === 0,
        () => <View><Text>You have no Todos</Text></View>
    )
);

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
        </View>
    );
};

const EnhancedTodoList = withConditionalRendering(TodoList);



export default class Todolist3 extends Component {
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
        return(
            <View style={styles.container}>
                <EnhancedTodoList
                    isLoading={isLoading}
                    todos={todos}
                />
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