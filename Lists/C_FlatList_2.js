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
In this code we will see: item Seperator prop of FlatList
-> itemSeperatorComponent : this prop accepts a react component and renders it between each item in the list
        but exculding the top and bottom,
        (here we can now replace the bottom margin we have in our card component)
 
  */

const C_Flat_List_2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollViewStyle}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log("id", item.id);
            return (
              <View key={item.id} style={styles.itemStyle}>
                <Text style={styles.itemText}>{item.type}</Text>
                <Text style={[styles.itemText, styles.nameColor]}>
                  {item.name}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={<View style={{height:16}}/>}
        />
      </View>
    </SafeAreaView>
  );
};

export default C_Flat_List_2;

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
    //marginBottom: 15,
  },
  itemText: {
    fontSize: 25,
  },
  nameColor: {
    color: "purple",
  },
});
