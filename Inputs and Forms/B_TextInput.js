import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

/*
TextInput: component for user input in React Native,
           it allows users to enter text and other data into your app.
           example: <TextInput />
*/

const B_TextInput = () => {
    const [name, setName] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName}/>
      <Text style={styles.text}>My Name is {name}</Text>
    </SafeAreaView>
  );
};

export default B_TextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input:{
    height:40,
    margin:12,
    padding:10,
    borderWidth:1,
  },
  text:{
    fontSize:30,
    padding:10,
  }
});
