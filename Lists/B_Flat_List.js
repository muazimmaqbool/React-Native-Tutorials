import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import pokemonList from "./TestData.json";

//first see previous code
/*
->In React Native the recommended way to render list is to use FlatList component:
  FlatList compt. renders only the items which are currently in view, making it high performant for long lists

FlatList has two mendatory props: data and renderItem
  -> data={arrayList} , pass it the array that you want to render in the list (source of information for flatList)
  -> renderItem:  its a function that returns the jsx  for rendering each item in the list
    renderItem={({item})=>{define here how each item is rendered}}
*/

const B_Flat_List = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollViewStyle}>
      {
        pokemonList.map(pokemon => {
            console.log("id:",pokemon.id); 
            return(
                <View key={pokemon.id} style={styles.itemStyle}>
                <Text style={styles.itemText}>{pokemon.type}</Text>
                <Text style={[styles.itemText,styles.nameColor]}>{pokemon.name}</Text>
                </View>
            )
        })
      }
      </ScrollView> */}
      <View style={styles.scrollViewStyle}>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          console.log("id",item.id) //will not print all 100 indexes/values
          /*it will print around 60-80/or less: but we only see 7-9 on mobile screen ?
          because FlatList ensures it generates a few devices length of content in advance to ensure smooth scrolling
           */
          return (
            <View key={item.id} style={styles.itemStyle}>
              <Text style={styles.itemText}>{item.type}</Text>
              <Text style={[styles.itemText, styles.nameColor]}>
                {item.name}
              </Text>
            </View>
          );
        }}
        //additional props of FlatList:
        //1: rendering list horizontally
          //horizontal={true}

        /*keyExtractor: this prop is a function that takes an item from data Array and returns a unique key for that item.
         It is used to indentify the unqiue items in the list similar to the key prop using the map method*/
         //bydefault it returns:
          //keyExtractor={item.key} //if its not present then:
          //keyExtractor={item.id} //if its not also present then:
          //keyExtractor={item.index}  
          keyExtractor={(item,index)=>item.id.toString()}

          //their are many more props of FlatList, check next code
      />
      </View>
    </SafeAreaView>
  );
};

export default B_Flat_List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    paddingTop: StatusBar.currentHeight,
  },
  scrollViewStyle: {
    paddingHorizontal: 25,
  },
  itemStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    // alignItems:"center",
  },
  itemText: {
    fontSize: 25,
  },
  nameColor: {
    color: "purple",
  },
});
