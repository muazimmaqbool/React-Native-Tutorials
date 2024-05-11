import { StyleSheet, Text, View,useWindowDimensions } from "react-native";
import React from "react";
/*
useWindowDimensions hook : is easy way to implement styles/changes when device dimensions change
->no complex code is needed here
->useWindowDimension is recomended approach to achieve responsiveness
->its better to use useWindowDimensions over dimensions API
*/
const C_UseWindowDimensions = () => {
    const windowWidth=useWindowDimensions().width
    const windowHeight=useWindowDimensions().height
    console.log("width:",windowWidth,", height:",windowHeight)
    return (
        <View style={[styles.container,{backgroundColor:windowHeight>500?"skyblue":"plum"}]}>
          <View style={[styles.box,{
            width:windowWidth>500?"70%":"90%",
            height:windowHeight>600?"60%":"90%"
          }]}>
            <Text style={{fontSize:windowWidth>500?50:24,color:windowWidth>500?"white":"black"}}>Welcome!</Text>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      backgroundColor: "lightblue",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  

export default C_UseWindowDimensions
