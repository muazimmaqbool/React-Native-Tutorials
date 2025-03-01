import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
  ->FlexGrow: determines how much space an item should occupy inside a flex container when there's extra space available
  ->values: 0,(default value which prevents the items in taking the extra space), any positive value(to make items take extra space when available)
  ->applied in app.js
*/
const G_FlexGrow = ({ children, styleprop }) => {
  return (
    <View style={[styles.box, styleprop]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default G_FlexGrow

const styles = StyleSheet.create({
    box: {
      padding: 20,
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
  });
  