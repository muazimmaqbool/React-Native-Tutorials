import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
->justify-content: defines the alignment along main axis i.e top to bottom
->its applied in the container to control of the alignment of its content
->Note if we set flex-direction to row, then justify content defines the alignment along cross axis i.e left to right
->applied in app.js
*/
const C_JustifyContent = ({ children, styleprop }) => {
    return (
        <View style={[styles.box, styleprop]}>
          <Text style={styles.text}>{children}</Text>
        </View>
      );
}

export default C_JustifyContent

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