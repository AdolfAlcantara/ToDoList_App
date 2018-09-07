import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class Selected extends React.Component{
    static navigationOptions={
        title:"Reactnative Todo",
        headerStyle: {
            backgroundColor: '#1d5dc4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text>Checked</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        alignSelf: "auto",
        flex:1,
    }
})