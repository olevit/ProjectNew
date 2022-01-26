import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = props => {
    return (
        <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text style = {styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

    };
    const styles = StyleSheet.create({
     listItem: {
         paddingHorizontal: 20,
         paddingVertical: 5,
         marginVertical: 10,
         backgroundColor: '#6423AB',
         borderColor: "#BF2187",
         borderRadius: 30,
         borderWidth: 1,
     },
     text:{
        color: "#FA397F",
        fontSize: 20,
     },
    });

export default TaskItem;
