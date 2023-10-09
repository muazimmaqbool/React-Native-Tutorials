import React from 'react'
import { Text, View } from 'react-native'
//Here only inline styling is used
const B_Styling = () => {
  return (
    <View>
        {/*styled using inline styling/css */}
        <Text style={{color:"white",fontSize:30}}>Stylied using Inlince Styles/css</Text>
    </View>
  )
}

export default B_Styling
/*
->Styling Your App
  -React Native didn't use css for styling instead it uses Javascript
  -the names and values are same css web but with slight modification like using camle case
       i.e backgroundColor instead of background-color

  ->Styling Approaches:
    1)inline styling:
        used before its i.e <Text style={{color:"white",padding:10,..}}>.....</Text>
    2)StyleSheet API: 
       it allows the user to define multiple styles at one place using "create" method
      ->Its mostly used
*/