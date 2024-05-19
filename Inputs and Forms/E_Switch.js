import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";

/*
Switch: serves as a valuable tool for integrating toggles into your app's user interface.

->its particularly well-suited for scenarios where you require users to make binary choices, such as
    enabling or disabling specific app features (like toggle between dark mode and light mode)
*/

const E_Switch = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log("isDarkMode", isDarkMode);
  const textColor = {
    color: isDarkMode ? "white" : "black",
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "black" : "white" },
      ]}
    >
      <StatusBar backgroundColor={isDarkMode ? "teal" : "black" }/>
      <TextInput
        style={[
          styles.input,
          textColor,
          { borderColor: isDarkMode ? "white" : "black" },
        ]}
        value={name}
        onChangeText={setName}
        placeholder="your full name"
        placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Text style={[styles.text, textColor]}>your name is: {name}</Text>
      <TextInput
        style={[
          styles.input,
          textColor,
          { borderColor: isDarkMode ? "white" : "black" },
        ]}
        placeholder="email@example.com"
        placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
      />
      <TextInput
        style={[
          styles.input,
          styles.multilineText,
          textColor,
          { borderColor: isDarkMode ? "white" : "black" },
        ]}
        placeholder="your message"
        placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
        multiline
      />
      {/*switch */}
      <View style={styles.switchContainer}>
        <Text style={[styles.text, textColor]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prevValue) => !prevValue)}
          //trackColor is used to set colors for the track in different states
          trackColor={{ false: "#767577", true: "lightblue" }}
          thumbColor="#f4f3f4"
        />
      </View>
    </SafeAreaView>
  );
};

export default E_Switch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top",
    //this line is added because multiline prop aligns the text on top of ios and in middle in android so
    //by adding this line text is at top inside both ios and android
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
});
