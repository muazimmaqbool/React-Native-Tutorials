import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
/*
->Dynamic User Interface:
    - All our app users won't be using same device, they will be using different devices with different sizes , some might be small and some
    might be larger, and some use Ipad,tablets also and some use app in portrait and some in landscape mode.
    ->Dynamic UI's goal is to ensure that our app's user interface remains responsive to the different device sizes while
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
/*
Important: Although this method works but Dimensions API has a drawback (lec-41)
    ->The dimensions API doesn't dynamically update when the screen size changes
    Eample: change orientation of the device, rotate the device and you will see no changes
    ->Go to app.json and change orientation to "default", then reload the app by pressing R , Now when device rotates the app also rotates
    But styles doesn't apply as it should have changes text size, and to make stles apply you need to again Reload the app and thats not the right way
    and thats the draw back of dimensions api the values doesn't dynamically updates when device orientation changes
    and the solution to this problem is use "useState and and useEffect hooks" in next code
*/
//console.log("width:",windowWidth," and height:",windowHeight)

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
