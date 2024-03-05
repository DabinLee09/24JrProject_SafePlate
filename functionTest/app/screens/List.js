import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { FIREBASE_DB } from "../../firebaseConfig";
import Ionicons from '@expo/vector-icons/Ionicons'
import Entypo from '@expo/vector-icons/Entypo'


// export interface Todo {
//     title: string;
//     done: boolean;
//     id: string;
// }


export default function List({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");


  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, "todos");

    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {  
        const todosArr = [];
        snapshot.docs.forEach((doc) => {
          console.log('doc.data()', doc.data());
          todosArr.push({ 
            id: doc.id, 
            ...doc.data(),
         } );
        });
        setTodos(todosArr);
      },
    })

    return () => subscriber();
  }, []);



  const addTodo = async () => {
    // console.log("addTodo");
    const doc = await addDoc(collection(FIREBASE_DB, "todos"), {
      title: todo,
      done: false,
    });
    setTodo("");
  };


  const renderTodo = (item) => {
    const ref = doc(FIREBASE_DB, `todos/${item.id}`);

    const toggleDone = async() => {
        updateDoc(ref, {done: !item.done});
    }
    const deleteItem = async() => {
        deleteDoc(ref);
    }

    return (
        <View style={styles.todoContainer}>
            <TouchableOpacity onPress={() => toggleDone()} style={styles.todo} >
                {item.done && <Ionicons name='checkmark-circle'size={24} color="green" />}
                {!item.done && <Entypo name='circle' size={24} color="black" />}
            <Text style={styles.todoText} >{item.title}</Text>
            </TouchableOpacity>
            <Ionicons name='trash-bin-outline' size={24} color="red" onPress={() => deleteItem()} />
        </View>
    )
  } 

  return (
    // <View>
    //   <Button
    //     onPress={() => navigation.navigate("Details")}
    //     title="Open Details" 
    //     />
    //   <Button
    //     onPress={() => addTodo()}
    //     title="add Todo"
    //   />
    // </View>
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button
          onPress={() => addTodo()}
          title="add Todo"
          disabled={todo === ""}
        />
      </View>
      { todos.length > 0 && (
        <View>
            <FlatList 
                data={todos}
                renderItem={({ item }) => renderTodo(item)}
                keyExtractor={(item) => item.id }        
            />
        </View>
      )}
      {/* <View>
        {
            todos.map(todo => (
                <Text key={todo.id}>{todo.title}</Text>
            )) 
        }
      </View> */}
    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'pink',
    padding: 10,
    marginVertical: 4,

  },
  todoText: {
    flex: 1,
    paddingHorizontal:4,
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
