import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

const C_StyleSheet = () => {
  //see previous code first
  /*StyleSheet API : it allows the user to define multiple styles at one place using "create" method
    its mostly used and preferred method*/
  return (
    //view is styled in App.js using inline Styling
    <View>
      {/*styled using StyleSheet */}
      <Text style={styles.titleText}>StyleSheet API Example</Text>
      <View style={styles.nestedView}>
        <Text>Inside Another View</Text>
      </View>
    </View>
  );
};
export default C_StyleSheet;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    color: "midnightblue",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    textAlign: "center",
  },
  nestedView: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    //alignItems:"center"
  },
});

/*Note: these styles can only be used within the same component, although we do have option to make the gloabl
        styles file and export the styles object and used it any where
          example: export const styles=StyleSheet.create({....})
 
  ->We can also use styles object without StyleSheet Api but then we don't get access to auto complete suggestion
    for styles properties
     example: const styles={
        nestedView:{
        backgroundColor:"white",
        padding:15,
        margin:10,
      },
      {..},...
     }

     ->but preferred is StyleSheet
*/
