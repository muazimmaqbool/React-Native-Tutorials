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

const H_FormValidation = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    //function used for validation of form
    const validateForm=()=>{
        let errors={};
        if(!username) errors.username="Username is required";
        if(!password) errors.password="Password is required";

        setErrors(errors);
        //when form is valid
        return Object.keys(errors).length === 0;
    }
    /*
    ->Object.keys(errors):
      - Object.keys(obj) is a built-in JavaScript method that returns an array of all the keys (property names) in the given object.
         (i.e in this case: usename, password)
      - If length is 0, it means the errors object has no properties (i.e., no errors)
      - If there are no errors (errors object is empty), Object.keys(errors).length === 0 evaluates to true, meaning the form is valid.
      - If there are errors, it evaluates to false, meaning the form is invalid.
    */
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={styles.form}
        >
          <Image
            style={styles.image}
            source={require("../assets/login.png")}
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          {
            errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
          }
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {
            errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
          }
          <Button title="Login" onPress={validateForm} />
        </KeyboardAvoidingView>
      </View>
    );
  };

export default H_FormValidation


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
      marginBottom: 50,
    },
    errorText:{
        color:"red",
        marginBottom:10,
        marginTop:-20,
    }
  });
  