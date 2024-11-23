import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'

import { Logo } from '../../components/Logo'
import { Indicator } from '../../components/Indicator'

import { styles } from './styles'
import { Todo } from '../../components/Todos/Todo'
import { EmptyTodos } from '../../components/EmptyTodos'

type Todo = {
  text: string;
  isChecked: boolean;
}

export function Home() {

  const [description, setDescription] = useState('');  
  const [isFocused, setIsFocused] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleCheck(todo: Todo) {
    const updatedTodos = todos.map(item => {
      if (item === todo) {
        return {
          ...item,
          isChecked: !item.isChecked,
        }
      }
      return item;
    });

    setTodos(updatedTodos);
  }

  function handleAddTodo() {
    if(description) {
      const newTodo: Todo = {
        text: description,
        isChecked: false,
      }
  
      setTodos([...todos, newTodo]);
      setDescription('');
    }
  }

  function handleDelete(todo: Todo) {
    const updatedTodos = todos.filter(item => item !== todo);
    setTodos(updatedTodos);
  }

  function getDoneTodos() {
    return todos.filter(todo => todo.isChecked).length;
  }

  function getCreatedTodos() {
    return todos.length;
  }

  return (
    <>
      <View style={styles.container}>
        <Logo />
        
        <View style={styles.form}>
          <TextInput
            style={isFocused ? styles.inputFocus : styles.input}
            placeholderTextColor={'#808080'}
            placeholder='Adicione uma nova tarefa'
            value={description}
            onChangeText={setDescription}
          />
          <TouchableOpacity 
            style={styles.button}
            onPress={handleAddTodo}
          >
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.indicators}>
          <Indicator type='created' quantity={getCreatedTodos()} />
          <Indicator type='done' quantity={getDoneTodos()} />
        </View>

        <FlatList
          style={styles.todos}
          data={todos}
          keyExtractor={(item, index) => String(index)}
          ListEmptyComponent={() => <EmptyTodos />}
          renderItem={({item}) => (
            <Todo
              text={item.text}
              checked={item.isChecked}
              onChange={() => handleCheck(item)}
              onDelete={() => handleDelete(item)}
            />
          )}
        />
      </View>
    </>
  )
}