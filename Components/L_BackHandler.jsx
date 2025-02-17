import { StyleSheet, Text, View ,BackHandler,Alert} from 'react-native'
import React, { useEffect } from 'react'

/*
-> The Backhandler API detects hardware button presses for back navigation, 
   lets you register event listeners for the system's back action,
   and lets you control how your application responds. 
   It works only in android.
*/

const L_BackHandler = () => {

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to close the app?', [
            {
              text: 'Cancel',
              onPress: () => null,
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
            
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress', backAction,
        );
    
        return () => backHandler.remove();
      }, []);

      /*
      ->BackHandler.addEventListener creates an event listener & returns a NativeEventSubscription object which should be cleared using 
      NativeEventSubscription.remove method.
       */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BackHandler API</Text>
      <Text style={styles.text}>Click The Back Button On Your Device!</Text>
    </View>
  )
}

export default L_BackHandler

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap:20
      },
      title:{
        fontSize: 20,
        fontWeight: '700',
        color:"yellow"
      },
      text: {
        fontSize: 18,
        fontWeight: '500',
        color:"black",
        textAlign:"center"
      },
})