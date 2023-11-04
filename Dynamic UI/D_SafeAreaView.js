import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
/*
lec-43: 
->Note: SafeAreaView: only works on IOS and not on Android
->SafeAreaView: 
  ->if you see the below code's output in ios and android , the text is visible in "android" and not in "IOS"
         because in ios the text is hidden behind the notch. 
  -- if you add paddingTop to container then text is visible in "ios" as well, but this not the right solution
        as we have unnecessary space at top in "Android".
  --> and to fix we need find out what is the "safe area" for the given device and render our application only
     within the view, that is exactly what the "SafeAreaView" component is for. 

  ->The purpose of "SafeAreaView" is to render content within the safe area boundries of a device, 
      it applies padding to reflect the physical limitations of the screen such as rounded corners and camera notches
    
  ->After applying the "SafeAreaView", you can see that our application is now rendered in safe area view which
    avoids the notch at the top and curve/buttons at the bottom
    ->but you can see outside the safe area: white color in ios and to fix this
      apply same background to "SafeAreaView" same as the container
*/

const D_SafeAreaView = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
        backgroundColor:"plum",
    },
  container: {
    flex: 1,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default D_SafeAreaView;
