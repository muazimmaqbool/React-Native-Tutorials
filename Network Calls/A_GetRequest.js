import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

/*
In this folder we will look at API calls etc
->Here we will use this endpoint to fetch fake data for testing:
https://jsonplaceholder.typicode.com/posts or https://jsonplaceholder.typicode.com/posts?_limit=10
*/
const A_GetRequest = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async (limit = 10) => {
   const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
   const result=await response.json();
   setPosts(result)
  };
  console.log("posts:",posts)

  //Now lets display data inside posts in ui using flatList
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text>#{item.id}</Text>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={<View style={{ height: 10 }} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>List Of Posts</Text>}
          ListFooterComponent={<Text style={styles.footerText}>End of Posts List</Text>}
        />
      </View>
      <Button title="Get Posts" onPress={()=>fetchData()}/>
    </SafeAreaView>
  );
};

export default A_GetRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight, //this one is for android
    paddingBottom:StatusBar.currentHeight+20,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 25,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText:{
    fontSize:24,
    textAlign:"center",
    marginBottom:12,
  },
  footerText:{
    fontSize:24,
    textAlign:"center",
    marginTop:12,
  },
});
