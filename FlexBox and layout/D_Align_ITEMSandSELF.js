import { StyleSheet, Text, View } from "react-native";
import React from "react";
/*
AlignItems: it works same as justify-content but in cross axis(left to right)

AlignSelf: its is applied individual items,allowing us to control the alignment of each item independently

*/

const D_Align_ITEMSandSELF = ({ children, styleprop }) => {
  return (
    <>
    <View style={[styles.box, styleprop]}>
      <Text style={styles.text}>{children}</Text>
    </View>
    </>
    
  );
};

export default D_Align_ITEMSandSELF;

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
