import { StyleSheet, Text, View ,Vibration, Button, Platform} from 'react-native'
import React from 'react'

//Vibration API is used to Vibrate the device.
const J_Vibration = () => {
    const ONE_SECOND_IN_MS = 1000;

    const pattern=[
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS,
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vibration API</Text>
      <Button title='Vibrate Once' onPress={()=>Vibration.vibrate()}/>
      {Platform.OS === 'android'
        ? <Button title='Vibrate For 5 Seconds' onPress={()=>Vibration.vibrate(5 * ONE_SECOND_IN_MS)}/>
        : null}
        {/* of Vibration.vibrate(5000)  to vibrate for 5 seconds*/}
      
      <Button title='Vibrate In Pattern' onPress={()=>Vibration.vibrate(pattern)}/>

      <Button
        title="Vibrate with pattern until cancelled"
        onPress={() => Vibration.vibrate(pattern, true)}
      />
      {/* or Vibration.vibrate(5000,true):will vibrate for 5 seconds and if cancelled it stops before 5 seconds */}
      <Button
        title="Cancel vibration pattern"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </View>
  )
}

export default J_Vibration

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        gap:20,
    },
    heading:{
        fontSize:25,
        color:"white",
    }
})