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

const I_FormSubmission = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //used to store and show errors
  const [errors, setErrors] = useState({});

  //function used for validation of form
  const validateForm = () => {
    let errors = {};
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);
    return Object.keys(errors).length === 0; // means no errors if length === 0
  };

  //function used for submission
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted data:", username,":", password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        style={styles.form}
      >
        <Image style={styles.image} source={require("../assets/login.png")} />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default I_FormSubmission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "gray",
  },
  form: {
    backgroundColor: "pink",
    padding: 20,  
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 10, //this is specifically for android
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
    width: 300,
    height: 250,
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
