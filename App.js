import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "Cook", key: "1" },
    { text: "Learn new things", key: "2" },
    { text: "take classes", key: "3" },
  ]);

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const addToList = (text) => {
    if (text.length > 3) {
      setToDos((prevToDos) => {
        return [...prevToDos, { text: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be atleast 3 chars long", [
        { text: "Ok", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDo addToList={addToList} />
          <View style={styles.list}>
            <FlatList
              data={toDos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 10,
    flex : 1
  },
  list: {
    marginTop: 20,
    flex : 1
  },
});
