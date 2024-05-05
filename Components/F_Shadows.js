import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const F_Shadows = () => {
    /*
    Box Shadow and Elevation
    ->To add box-shadow in android as well we have to use Elevation property which internally
    utilizes the Android Elevation API
    ->this is how we define box-shadow: 
     boxShadow:{
        shadowColor:"#333333",
        shadowOffset:{
            width:6,
            height:6,
        },
        shadowOpacity:0.5,
        shadowRadius:5
    },
    the shadowColor is the only property that work both on android and ios
    */
  return (
    <View >
    <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
      <Text style={{ borderRadius: 5, backgroundColor: "purple" }}>
        Lightblue Box
      </Text>
    </View>
    <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
      <Text>Lightgreen Box</Text>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    box: {
      width: 250,
      height: 250,
      paddingHorizontal:10,
      paddingVertical:20,
      marginVertical: 10,
      borderWidth: 5,
      borderColor: "white",
      borderRadius: 10,
    },
    lightblueBg: {
      backgroundColor: "lightblue",
    },
    lightgreenBg: {
      backgroundColor: "lightgreen",
    },
    //using this will only work on ios and not on android
    boxShadow:{
        shadowColor:"blue",
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowOpacity:0.6,
        shadowRadius:10
    },
    //this will make box-shadow to work on android as well
    androidShadow:{
        elevation:35,
    }
  });
export default F_Shadows