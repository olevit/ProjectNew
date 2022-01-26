import React, { useState } from'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [ tasks, setTasks ] = useState([]);
  const [ addMode, setAddMode ] = useState(false);

  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [ ...currentTasks,
    {id: Math.random().toString(), value: taskTitle }
    ])
    setAddMode(false);
  };
  const removeTaskHandler = taskId => {
    setTasks(currentTasks => {
        return currentTasks.filter(task => task.id !== taskId);
    });
  };
  const cancelTaskHandler = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setAddMode(true)}>
            <Text style = {styles.textButton}>Add new task</Text>
        </TouchableOpacity>
        <TaskInput
            visible = { addMode }
            onAddTask = { addTaskHandler }
            onCancel = { cancelTaskHandler }/>
        <FlatList style= {styles.list}
            keyExtractor={(item, index) => item.id}
            data = {tasks}
            renderItem = {itemData => (
                <TaskItem
                id = {itemData.item.id}
                onDelete = { removeTaskHandler }
                title = {itemData.item.value}/>
            )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25003D',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#6423AB',
    borderColor: "#BF2187",
    borderRadius: 30,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    marginBottom: 10
  },
  textButton: {
      color: '#F8C2B8',
      fontSize: 20,
  },
  list: {
    width: "80%",
  },
});
