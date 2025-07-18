import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  SectionList,
} from "react-native";
import React from "react";

import groupedPokemonList from "./grouped_testData.json";
import { Colors } from "react-native/Libraries/NewAppScreen";

//first see previous code
/*
->SectionList: A performant component designed for rendering sectioned lists
->In our example we will render list of pokemons categoriesed by type:
  there will be a section for fire type pokemon, water type and so on.
  making other test data set representing list of pokemons by type.
  
->SectionList: have two mendatory props - sections and renderItem 
  -sections={data} : data/source of information for section list
  :returns a jsx for rendering each item in the list
  -renderItem={({item})=>{ //item here refers to each element in the data array(inside grouped_testData.json)
                           and hence the property being called data is vital
    return(
      ! define here how return jsx will look like
    )
  }}
/>

*/

const E_SectionList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Section List</Text>
      <View style={styles.scrollViewStyle}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemStyle}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            );
          }}
          //used to define how each section header is rendered
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeadertext}>{section.type}:</Text>
          )}
          ItemSeparatorComponent={()=><View style={{height:20}}/>}
          SectionSeparatorComponent={()=><View style={{height:10}}/>}
          //it accepts many more props see on documentation
        />
      </View>
    </SafeAreaView>
  );
};

export default E_SectionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    gap:10
  },
  header:{
    color:"black",
    fontSize:25,
    textAlign:"center"
  },
  scrollViewStyle: {
    paddingHorizontal: 25,
  },
  itemStyle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    //marginBottom: 15,
  },
  itemText: {
    fontSize: 25,
  },
  
  sectionHeadertext: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
