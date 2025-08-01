import { View, Text, StyleSheet } from "react-native";
import React from "react";

/*Flexbox: its a powerful one-dimensional layout model used to arrange elements within a container
  ->can arrange items horizontally and vertically as well and also can control spacing and arrangement
  ->core of layout design in react-native is flexbox

  //important
  ->In REACT : the two axis are main and cross i.e main: "left to right" and cross: "top to bottom"
  ->But in REACT NATIVE its opposite: main axis is "top to bottom" and cross axis is "left to right"
    because by default in react native we have flex-direction column
*/

/*
  NOTE: in this section the parent is the View which is in App.js and the view their is 
       flex container (parent element)
*/

/*Flex property: deinfes how much of a view will fill the screen along the main axis(top to bottom)
->It accepts an integer value "0" or more, indicating the fraction(percentage) of available space the component should take
->Note in web dev, we write display:"flex" to make a container/div a flex container, but in 
  React Native: the view is already a flex container and its comp. inside it are flex items
  and view is by default: flex-direction:column  
*/
//Flex property is applied in APP.js
const A_FlexBox = ({ children, styleprop }) => {
  //children prop: allows the parent control the text rendered here
  //styleprop: allows the parent component to extend the styles applied to here
  return (
    <View style={[styles.box, styleprop]}>
      {/*  here box style will be used when styleprop is not passed */}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: { backgroundColor: "white", padding: 20 },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

export default A_FlexBox;
