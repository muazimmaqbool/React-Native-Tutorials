import React from "react";
import { StyleSheet, Text, View } from "react-native";

const D_MultipleStyles = () => {
  //First go through previous codes
  return (
    //if we remove this outer View it will still work as Outer View is Styled and metioned in APP.js its here just for add many components inside it
    <View>
    {/*
     style={styles.lightblueBg} : this way we add one style and to add multiple styles we put styles inside an array:
            i.e style={[styles.box, styles.lightblueBg]}
    */}
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lightblueBg: {
    backgroundColor: "lightblue",
    // width: 100,
    // height: 100,
    // padding: 10,
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
    // width: 100,
    // height: 100,
    // padding: 10,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor:"red",
  },
});
/*
  ->Note as you can see both the lightblueBg and lightgreenBg has some common styles and we can put them togther
    at one place rather than defining them again and again and we can use them on both the Keys

->Note: in multiple styling the last style takes precendence i.e the value from last style element in the array takes precendence"
      i.e if :  style={[styles.box, styles.lightblueBg]} and then we add backgroundColor in box, it won't effect as backgroundColor is also added in 
                 lightblueBg and it will take precendence and if box is added after lightblueBg and color is changed then it will effect
*/
export default D_MultipleStyles;
