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
  TextInput props allow you to customize the behavior and appearance of textinput component.
  like, placeholder, secureTextEntry, keyboardType,

  ?these two props are by default :
  1)autoCorrect (which corrects the text) 2)autoCapitalize (which capitalizes the text)
    to make them off do this : autoCorrect={false} , autoCapitalize="none"

  secureTextEntry: masks the type text (used for entering password)
  keyboardType: allows you to specify the type of the keyboard that appears when the user interacts with the text input
  example if user needs to enter phone number then you can use keyboardType="numeric"
*/

const C_TextInput_props = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.text}>My Name Is {name}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email@example.com"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} secureTextEntry placeholder="password" />
      <TextInput style={styles.input} placeholder="phone number" keyboardType="numeric"/>
    </SafeAreaView>
  );
};

export default C_TextInput_props;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 25,
    padding: 10,
  },
});
