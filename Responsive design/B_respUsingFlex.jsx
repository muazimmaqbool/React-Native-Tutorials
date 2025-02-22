import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//here we will see how to acheive responsiveness using flex layout
const B_respUsingFlex = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.section1} />
        {/*
        ->Making content (text) responsive
        */}
        <View style={styles.section2}>
          <Text style={styles.textContent}>
            The package exposes 2 basic methods: widthPercentageToDP and
            heightPercentageToDP. Their names essentially mean that you can
            supply a "percentage like" string value to each method and it will
            return the DP (indipendent pixel) that correspond to the supplied
            percentage of current screen's width/height respectivelly
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer} />
    </View>
  );
};

export default B_respUsingFlex;

const styles = StyleSheet.create({
  container: {
    flex: 1, //means it will take all available space
    gap: 5,
  },
  header: {
    flex: 1,
    backgroundColor: "tomato",
  },
  main: {
    flex: 4,
    // flexDirection: "row",
    gap: 5,
  },
  section1: {
    flex: 1,
    backgroundColor: "orange",
  },
  section2: {
    flex: 3,
    backgroundColor: "skyblue",
  },
  footer: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  textContent:{
    fontSize:hp(2)
  }
});
