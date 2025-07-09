import { StyleSheet, Text, View,ToastAndroid,StatusBar, Button } from 'react-native'
import React from 'react'

/*
->React Native's ToastAndroid API exposes the Android platform's ToastAndroid module as a JS module. 
  It provides the method show(message, duration) which takes the following parameters:
        - message A string with the text to toast
        - duration The duration of the toast: either ToastAndroid.SHORT or ToastAndroid.LONG

-> You can alternatively use showWithGravity(message, duration, gravity) to specify where the toast appears in the 
  screen's layout. May be ToastAndroid.TOP, ToastAndroid.BOTTOM or ToastAndroid.CENTER.

-> The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify
  an offset with in pixels.
*/

const M_ToastAndroid = () => {

    const showToast=()=>{
        ToastAndroid.show("This is a basic toast in android",ToastAndroid.SHORT)
    }

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          'This is toast with gravity',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      };

      /*for showWithGravityAndOffset:
        message: string,
        duration: number,
        gravity: number,
        xOffset: number,
        yOffset: number,
      */
    
      const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
          'A wild toast appeared!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          10    ,
          50,
        );
      };
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToastAndroid</Text>
      <Button title='Basic Toast' onPress={()=>showToast()}/>
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  )
}

export default M_ToastAndroid

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        paddingTop: StatusBar.currentHeight,
        gap:10
      },
      text:{
        fontSize:18,
        color:"black",
        fontWeight:"500"
      }
})