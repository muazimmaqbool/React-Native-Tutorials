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
  In this code we will see: two more props of FlatList -> Header , Footer, ListEmptyComponent
    ->List Header: accepts react component and renders it at the top of the list
    ->List Footer: accepts react component and renders it at the bottom of the list
    -> ListEmptyComponent : used when no item in the list is present

    -> ListHeaderComponent={} , ListFooterComponent={} , ListEmptyComponent={}
    */
  
  const D_Flat_List_3 = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollViewStyle}>
          <FlatList
            data={pokemonList}
            renderItem={({ item }) => {
            //   console.log("id", item.id);
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
            //remove this line :"data={pokemonList}" to see below line 
            ListEmptyComponent={<Text>No Item Available</Text>} 
            ListHeaderComponent={<Text style={styles.HeaderText}>Pokemon List</Text>}
            ListFooterComponent={<Text style={styles.FooterText}>End Of List</Text>}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default D_Flat_List_3;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
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
    HeaderText:{
        fontSize:24,
        textAlign:"center",
        marginBottom:12,
        color: "teal",
        fontWeight: "bold",
    },
    FooterText:{
        fontSize:24,
        textAlign:"center",
        paddingVertical:10,
        color:"purple",
        borderWidth:1,
        borderColor: "white",
        borderStyle:"solid",
        marginVertical:10,
    }
  });
  