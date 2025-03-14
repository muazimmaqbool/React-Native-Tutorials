import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
 ->FlexWrap: allows us to control how flex items behave when there is limited space within the container
*/
const E_FlexWrap = ({ children, styleprop }) => {
  return (
    <View style={[styles.box, styleprop]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default E_FlexWrap


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
  