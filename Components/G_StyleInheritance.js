import { StyleSheet, Text, View } from "react-native";
import React from "react";

const G_StyleInheritance = () => {
  /*
    ->Style Inheritance: React Native Styling Inheritance is limited as compared to styling Inheritance in CSS
    
    NOTE: Styling Inheritance from View to Text/others didn't work 
    NOTE: Styling Inheritance from Text to Text works
    (see notebook for proper understanding)

  */
  return (
    <View>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance- 
          {/*This Text is nested inside Text */}
          <Text style={styles.boldText}>
             Bold Text
            </Text>
        </Text>
      </View>
    </View>
  );
};

export default G_StyleInheritance;

const styles = StyleSheet.create({
  darkMode: {
    padding: 25,
    backgroundColor: "black",
    //color: "white",
    //-> color:"white" will not apply on text which is inside view on which darkModeText style object is used
    //so to change color of text apply seperate styling to text
  },
  //applied to text which is inside View, works fine
  darkModeText: {
    fontSize:20,
    color: "white",
  },
  //applied to text which is nested inside another text work fine, it supports both styling of
  //darkModeText and boldText styling objects
  boldText: {
    fontWeight: "bold",
    //this will have color of white as its parent text has color white
  },
});
