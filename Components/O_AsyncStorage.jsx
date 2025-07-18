import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

/*
-> AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
   It should be used instead of LocalStorage.

-> It is recommended that you use an abstraction on top of AsyncStorage instead of AsyncStorage directly for anything more than light usage
   since it operates globally.

-> Async Storage can only store string data. In order to store object data, you need to serialize it first. For data that can be serialized
   to JSON, you can use JSON.stringify() when saving the data and use JSON.parse() when loading the data.

-> On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files.
   On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.

->Documentation: https://react-native-async-storage.github.io/async-storage/docs/install

->Installation: npm install @react-native-async-storage/async-storage / yarn add @react-native-async-storage/async-storage / npx expo install @react-native-async-storage/async-storage
*/

const O_AsyncStorage = () => {
  return (
    <View style={styles.container}>
      <ExampleOne/>
      {/* <ExampleTwo/> */}
    </View>
  )
}


function ExampleOne(){
  const [name, setname] = useState('');
  const setData=async()=>{
    await AsyncStorage.setItem("name","Test Name")
  }
  const getData=async()=>{
    const value=await AsyncStorage.getItem("name")
    setname(value)
    //console.warn(value)
  }
  const removeData=async()=>{
    await AsyncStorage.removeItem("name")
  }
  return(
    <View style={{gap:10}}>
      <Text style={styles.title}>Basic Example of Asycn Storage</Text>
      <Text style={styles.savedText}>{name}</Text>
       <Button title="Set Data" onPress={setData}/>
       <Button title="Get Data" onPress={getData}/>
       <Button title="Remove Data" onPress={removeData}/>
    </View>
   
  )
}

function ExampleTwo(){
  return(
    <View style={{gap:10}}>
      <Text style={styles.title}>Example of Asycn Storage</Text>
    </View>
  )
}

export default O_AsyncStorage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:18,
    fontWeight:"500",
    color:"black",

  },
  savedText:{
    fontSize:18,
    fontWeight:400,
    color:"black",
    textAlign:"center",
    textDecorationLine:"underline"
  }
})