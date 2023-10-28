import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
FlexShrink: determines how children within a container shrink along the main/cross axis when the combined size
exceeds the conatiner size

values: flexShrink: 0 //default value
                  :any positive value to control the shrink behaviour
*/
const F_FlexShrink = ({ children, styleprop }) => {
  return (
    <View style={[styles.box, styleprop]}>
    <Text style={styles.text}>{children}</Text>
  </View>
  )
}

export default F_FlexShrink

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
  