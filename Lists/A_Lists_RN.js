import { StyleSheet, Text, View,ScrollView,SafeAreaView,StatusBar } from 'react-native'
import React from 'react'
//this is mock data for example of list
import pokemonList from './TestData.json'

//In React "map" method is the common way to render a list
/*In React Native you use the same approach but their is a better approach to render a list in React Native
  but in this code we will use "map" */

/*Note: Adding key to item is necessary in React to effectantly update the list, it helps react identify
        which item have chaged/added/removed and it should be unique for each item
*/

const A_Lists_RN = () => {
  return (
    //safeareaview will give some padding from top on ios but for android we will use status bar
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewStyle}>
      {
        pokemonList.map(pokemon => {
            console.log("id:",pokemon.id);  //upto 100
            //here you can see that all items are rendered even if they are not in the viewport i.e visibile
            //this can lead to performance issues so, to overcome this React Native has a "FlatList" (see in next code)
            return(
                <View key={pokemon.id} style={styles.itemStyle}>
                <Text style={styles.itemText}>{pokemon.type}</Text>
                <Text style={[styles.itemText,styles.nameColor]}>{pokemon.name}</Text>
                </View>
            )
        })
      }
      </ScrollView>
    </SafeAreaView>
  )
}

export default A_Lists_RN

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"teal",
        paddingTop:StatusBar.currentHeight //this will not effect on ios
    },
    scrollViewStyle:{
        paddingHorizontal:25,
    },
    itemStyle:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        borderWidth:1,
        marginBottom:15,
       // alignItems:"center",
    },
    itemText:{
        fontSize:25,
    },
    nameColor:{
        color:"purple",
    }
})