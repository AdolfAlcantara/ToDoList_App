import React from "react";
import {Header} from "react-navigation";
import {View} from "react-native";

export default class CustomHeader{
    return(
        <View style={{height:56, marginTop: 0}}>
            <Header centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }} />
        </View>
    )
}
