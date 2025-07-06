import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

//see previous code first
/*StyleSheet API : it allows the user to define multiple styles at one place using "create" method
  its mostly used and preferred method*/
const C_StyleSheet = () => {
  return (
    //view is styled in App.js using inline Styling
    <View style={styles.container}>
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
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  titleText: {
    fontSize: 20,
    color: "blue",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    textAlign: "center",
    borderRadius:20,
  },
  nestedView: {
    backgroundColor: "white",
    padding: 15,
    margin: 10,
    alignItems:"center",
    borderRadius:10,
  },
});

/*Note: these styles can only be used within the same component, although we do have option to make the gloabl
        styles file and export the styles object and used it any where
          example: export const styles=StyleSheet.create({....})
          and import like this: import {styles} from "./stylesheet.js"
 
  ->We can also use styles object without StyleSheet Api but then we don't get access to auto complete suggestions
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
