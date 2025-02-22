import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* [react-native-responsive-screen] important

-> To make the app responsive across all the devices of different screen sizes to you will using a library called:
   "react-native-responsive-screen" 
   command to install: -> npm i react-native-responsive-screen
   link: https://www.npmjs.com/package/react-native-responsive-screen

   ->This library uses dimensions object of react native which is also used to make our app responsive
      like this: 
          const {height,width}=Dimensions.get('window');
          console.log("height: ",height," and width: ",width)
      ->using dimensions object of react native is also used to make our app responsive but
      the "react-native-responsive-screen" library makes it easier 
*/

// const {height,width}=Dimensions.get('window');
// console.log("height: ",height," and width: ",width)
const A_responsive = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header} />

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.section1} />
        <View style={styles.section2} />
      </View>

      {/* Footer */}
      <View style={styles.footer} />
    </View>
  );
};

export default A_responsive;

const styles = StyleSheet.create({
  container: {
    height:hp(10), //hp: height percentage, hp(100) means 100% height of the current device screen
  },
  header:{
    height:hp(15), //15% height of the current device screen
    backgroundColor:"tomato", 
  },
  main:{
    height:hp(70), //70% height of the current device screen
    flexDirection:"row",
  },
  section1:{
    width:wp(50),//50% width of the current device screen
    backgroundColor:"orange",
  },
  section2:{
    width:wp(50),//50% width of the current device screen
    backgroundColor:"skyblue",
  },
  footer:{
    height:hp(15), //15% height of the current device screen
    backgroundColor:"lightgreen"
  }
});
