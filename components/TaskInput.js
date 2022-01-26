import React, { useState } from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const TaskInput = props => {
    const[ enteredTask, setEnteredTask ] = useState('');

    const taskInputHandler = text => {
        setEnteredTask(text);
    }
    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask('');
    }
    return (
        <Modal  visible ={props.visible} animationType="slide">
            <View style={styles.container}>
                <TextInput
                    placeholder='Enter task'
                    style={styles.input}
                    onChangeText = {taskInputHandler}
                    value = { enteredTask }
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress ={props.onCancel}>
                        <Text style={styles.textCancel}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress= {addTaskHandler}>
                         <Text style={styles.textAdd}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25003D',
    },
    input: {
        width: "80%",
        borderColor: "#BF2187",
        borderRadius: 30,
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        color: '#F8C2B8',
        fontSize: 20,
        backgroundColor: '#6423AB',
    },
    buttonContainer:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:'space-around',
        width: "80%"
    },
    button: {
        width: '45%',
        backgroundColor: '#6423AB',
        borderColor: "#BF2187",
        borderRadius: 30,
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAdd: {
        color: '#F8C2B8',
        fontSize: 20,
    },
    textCancel: {
        color: '#FA397F',
        fontSize: 20,
    },
});

export default TaskInput;