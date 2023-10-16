import React from "react";
import { View, Text, StyleSheet } from "react-native";
//Box Model: represents a box that includes every Html element consisting of Margin, Border, Padding, and the actual content
/*
In R.N all dimensions are unit less and represent density independent pixels no specific unit like rem/px is used
->But if parents dimensions are defined child components can have percentage dimensions/values
Example: in our case Outer "View" is set to flex:1 in App.js that is it takes entire available space and its children
is box etc which can have percentage value
*/

const E_BoxModel = () => {
  return (
    <View>
      <View style={[styles.box, styles.lightblueBg]}>
        {/*here borderRadius on text will only work on android not on ios */}
        <Text style={{ borderRadius: 5, backgroundColor: "purple" }}>
          Lightblue Box
        </Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    //width: '25%',
    //height: '25%',
    //takes 25% of the parents height and width respectively and together the conver 50% of its height and 25% of width
    width: 200,
    height: 200,
    box: {
      width: 100,
      height: 100,
      padding: 10,
      backgroundColor: "red",
    },
    padding: 10, //for all sides
    //paddingHorizontal:10,
    //paddingVertical:20,
    marginHorizontal: 20,
    marginVertical: 30,
    //in R.n Border:"2px solid white" didn't work, we need to specifiy them individually
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: 10, //works on both ios and android but when used on text component it only works on android
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});

export default E_BoxModel;
