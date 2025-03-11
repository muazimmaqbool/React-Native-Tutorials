import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const F_LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry //now it becomes input field for password
            value={password}
            onChangeText={setPassword}
          />
          <Button
            title="Login"
            onPress={() => {
              console.log("username:", username);
              console.log("password:", password);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default F_LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "gray",
  },
  form: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 50, //this is specifically for android
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});
