import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
/*
->Dynamic User Interface:
    - All our app users won't be using same device, they will be using different devices with different sizes , some might be small and some
    might be larger, and some use Ipad,tablets also and some use app in potrait and some in landscape mode.
    ->Dynamic UI's goal is to ensure that our app's user interface remains responsive to the different device suzes while
     maintaining an optional user experience.
     -> And to acheive this we have Dimensions API

*/
const DimensionsAPI = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Welcome!</Text>
      </View>
    </View>
  )
}


//getting devices width and height
/*important -> Dimensions accepts two arguments screen and window
screen: refers to the entire physical display of the device including areas that might be outside of visible viewport
due to notches, statusbars,system nav bar's
window: refers to the visible area of the screen occupied by you app's ui(for tasks involving ui elements within your applicantions
    visible area you will want to use window)
*/
const windowWidth=Dimensions.get("window").width
const windowHeight=Dimensions.get("window").height
//we can now use these device dimensions to dynamically adjust styles based on the device size

//In summary: Dimensions API provides access to devices size and using devices width and height you can create responsive styles for your app

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"plum",
        backgroundColor:windowWidth>500?"teal":"plum",
        alignItems:"center",
        justifyContent:"center",
    },
    box:{
        //width:300,
        width:windowWidth > 500 ? "70%":"90%",
        //height:300,
        height:windowHeight > 600 ? "60%":"90%",
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
      //fontSize:24
        fontSize:windowWidth>500?50:24,
        color:windowWidth>500?"white":"black"
    }
})

export default DimensionsAPI
