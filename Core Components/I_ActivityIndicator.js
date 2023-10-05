import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const I_ActivityIndicator = () => {
    /*
    Activity Indicator: used to inform the users about the status of ongoing process. such as loading an app,
        submitting form or saving updates etc
     ->basically is an loader
     ->It takes three props: size, color and animating(used to hide and show loader by default its true)
     */
  return (
    <View>
        <ActivityIndicator/>
        <ActivityIndicator size={"large"}/>
        <ActivityIndicator size={"large"} color="white"/>

        {/*not visible as animating is set to "false", althogh we can control it using state variable */}
        <ActivityIndicator size={"large"} color={"blue"} animating={false}/>
        {/*animating={true} : visible, animating={false} : hidden */}
    </View>
  )
}

export default I_ActivityIndicator