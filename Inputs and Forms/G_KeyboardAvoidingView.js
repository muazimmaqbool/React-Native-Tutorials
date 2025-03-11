import {
  Button,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";

/*
the problem is that when we add the image inside View with styles form and then in IOS device when we 
click on the input fields to enter text the keyboard overlays the input field and making text input behind
 the keyboard and this behavior is not seen android
 and to avoid this in IOS: we have KeyboardAvoidingView
 replace the outer most view/coomponent of the content with this component
*/

const G_KeyboardAvoidingView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.form}
      >
        <Image
          style={styles.image}
          source={require("../assets/adaptive-icon.png")}
        />
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
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => {}} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default G_KeyboardAvoidingView;

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
    shadowColor: "purple",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 100, //this is specifically for android
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 350,
    alignSelf: "center",
    marginBottom: 50,
  },
});
