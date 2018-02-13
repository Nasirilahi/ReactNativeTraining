import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const withSpinner = Comp => ({ isLoading, children, ...props }) => {
    if (isLoading) {
        return <View style={styles.container}><ActivityIndicator size="large" color="#0090F1" isLoading={isLoading} /></View>
    } else {
        return (
            <Comp {...props}>
                {children}
            </Comp>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withSpinner;
