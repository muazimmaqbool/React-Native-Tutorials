import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'

const I_ActivityIndicator = () => {
    /*
    Activity Indicator: used to inform the users about the status of ongoing process. 
      such as loading an app, submitting form or saving updates etc
     ->basically its an loader
     ->It takes three props: size, color and animating(used to hide and show loader by default its true)
     */

     const [isHidden, setIsHidden] = useState(false)
  return (
    <View>
        <ActivityIndicator />
        <ActivityIndicator size={"large"}/>
        {/*default size is small */}
        <ActivityIndicator size={"large"} color="white"/>

        {/*not visible as animating is set to "false", althogh we can control it using state variable */}
        <ActivityIndicator size={"large"} color={"blue"} animating={false}/>
        {/*animating={true} : visible, animating={false} : hidden */}

        {/*controlling show and hide of loader using state variable */}
        <ActivityIndicator size={"large"} color={"green"} animating={isHidden}/>
        <Button title={isHidden?"Hide":"Show"} color={"black"} onPress={()=>setIsHidden((prev)=>!prev)}/>

        {/*NOTE: size={number} i.e size={200} only works in android*/}
         <ActivityIndicator size={"100"} color="black"/>
    </View>
  )
}

export default I_ActivityIndicator