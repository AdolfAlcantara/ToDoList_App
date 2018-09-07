import React from "react";
import { StyleSheet, Text, View,FlatList} from 'react-native';
import {Icon} from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog-input';

// const AddTodoButton = ({ onPress }) => (
//     <Fab
//         direction="up"
//         containerStyle={{}}
//         style={{ backgroundColor: '#1d5dc4'}}
//         position="bottomRight"
//         onPress={onPress}
//     >
//         <Icon name="add" />
//     </Fab>
// );

export default class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            todolist:[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ],
            TodoCreator: false,
        };
    }

    sendInput=(inputText)=>{
        let newData=[];
        newData.push({key:inputText});
        this.state.todolist.map(todo =>(newData.push(todo)));
        this.setState({todolist:newData})
        this.setState({TodoCreator:false});
    }
    

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
                {/* <Dialog.Container visible={this.state.TodoCreator}>
                        <Dialog.Title>Create New ToDo</Dialog.Title> */}
                    <DialogInput 
                        isDialogVisible={this.state.TodoCreator}
                        title={"Ingresar nuevo ToDo"}
                        submitInput={ (inputText) => {this.sendInput(inputText)} }
                        closeDialog={ () => {this.setState({TodoCreator:false})}}>
                    </DialogInput>
                    {/* <Dialog.Button label="Cancel" onPress={()=>{this.setState({TodoCreator:false})}} />
                    <Dialog.Button label="Create" onPress={()=>{this.setState}}/>
                </Dialog.Container> */}
                <FlatList
                    data={this.state.todolist}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}
                                                {/* <Icon name={"trash-o"} size={20} type={"font-awesome"}/> */}
                                            </Text>}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={()=>{this.setState({TodoCreator:true})}}/>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

    // 