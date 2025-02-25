import { View, Text, StyleSheet } from "react-native";
import React from "react";
/*
->First see previous code and notes

->Flex directon:establishes the main axis, which determines how the flex items are placed in container
  ->by default main axis is top to bottom but we can change its direction by changing flex-direction
  ->Flex direction values: 
            flexDirection:"column" //default value no change sets main axis from top to bottom
            flexDirection:"column-reverse", //sets flex items in reverse order i.e bottom to top
            flexDirection:"row" //sets items form left to right
            flexDirection:"row-reverse", //sets items from right to left in reverse order   
  ->flex-direction is applied in APP.js
*/

const B_FlexDirection = ({ children, styleprop }) => {
    return (
        <View style={[styles.box, styleprop]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
export default B_FlexDirection;
