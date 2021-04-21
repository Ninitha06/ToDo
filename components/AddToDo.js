import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddToDo({ addToList }) {
  const [text, setText] = useState("");

  const changeHandler = (text) => {
    return setText(text);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="new todo.."
        onChangeText={changeHandler}
      ></TextInput>
      <Button title="Add Todo" color="coral" onPress={() => addToList(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "#bbb",
    marginBottom: 15,
    marginTop : 30,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderBottomWidth: 2,
  },
});
