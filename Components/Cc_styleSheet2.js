import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./stylesheet";
//the styles used in this component are defined inside stylesheet.js and imported here

const Cc_styleSheet2 = () => {
  return (
    <View>
      <Text style={styles.titleText}>
        Our styling is done in different file
      </Text>
      <View style={styles.nestedView}>
        <Text>Inside Another View</Text>
      </View>
      <View style={styles.box}></View>
    </View>
  );
};

export default Cc_styleSheet2;
