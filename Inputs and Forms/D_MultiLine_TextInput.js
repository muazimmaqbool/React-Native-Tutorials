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
-> MutliLine prop is used to make the textInput accept multiple lines of input
*/
const D_MultiLine_TextInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="your full name"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Text style={styles.text}>your name is: {name}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email@example.com"
      />
      <Text  style={styles.text}>Your email is: {email} </Text>
        {/* Multiline text input: */}
        <TextInput style={[styles.input,styles.multilineText]} placeholder="your message" multiline/>
    </SafeAreaView>
  );
};

export default D_MultiLine_TextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    padding:20
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    padding: 10,
    textTransform:"capitalize"
  },
  multilineText:{
    minHeight:100, //important to add minHeight otherwise it will appear as a simple text field
    textAlignVertical:"top" , 
    //this line is added because multiline prop aligns the text on top of ios and in middle in android so
    //by adding this line text is at top inside both ios and android
  }
});
