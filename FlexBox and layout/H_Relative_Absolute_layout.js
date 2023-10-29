import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
->Relative and Absolute layout ,
check notes
*/
const H_Relative_Absolute_layout = ({ children, styleprop }) => {
  return (
    <View style={[styles.box, styleprop]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default H_Relative_Absolute_layout
const styles = StyleSheet.create({
    box: {
      backgroundColor: "white",
      padding: 20,
      width:100,
      height:100
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
  });
  