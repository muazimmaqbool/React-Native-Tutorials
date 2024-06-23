import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";

/*
useWindowDimensions hook:
->useWindowDimensions automatically updates all of its values when screen size or font scale changes.
 You can get your application window's width and height like so:

 its basically used to get the dimensions of the window/screen
*/

const I_UseWindowDimensions = () => {
    const{height,width,scale,fontScale}=useWindowDimensions()
  return (
    <View>
      <Text style={styles.header}>Window Dimension Data</Text>
      <Text style={styles.text}>Height: {height}</Text>
      <Text style={styles.text}>Width: {width}</Text>
      <Text style={styles.text}>Font scale: {fontScale}</Text>
      <Text style={styles.text}>Pixel ratio: {scale}</Text>
    </View>
  );
};

export default I_UseWindowDimensions;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 12,
    color: "white",
  },
  text:{
    color:"white",
    fontFamily:"sans-serif",
    fontStyle:"italic",
    fontSize:15
  }
});
