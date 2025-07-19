import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    FlatList,
    Text,
    ActivityIndicator,
    Button
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
/*
->See previous code first
->Here we will see how to implement a loading state while the data is being fetched in the background
->Here we will use activityIndicator to show loading ui
*/
  
  const Aa_LoadingState = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async (limit) => {
      setIsLoading(true)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      if(!response.ok){
        setIsLoading(false)
        throw new Error("Error fetching")
      }
      const data = await response.json();
      setPosts(data);
      setIsLoading(false)
    };
    
    //here API is fast so we don't see loading animation for that long , to see Loading animation for long
    //comment this line in fetchData functuion : setIsLoading(false)
    if(isLoading){
        return(
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="blue"/>
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

    //now lets display data inside posts in ui using flatList
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
           <Button title="Get Posts" onPress={()=>fetchData(5)}/>
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>#{item.id} : {item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={<Text style={styles.headerText}>List Of Posts</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End of Posts List</Text>}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Aa_LoadingState;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      paddingTop: StatusBar.currentHeight, //this one is for android
    },
    listContainer: {
      flex: 1,
      padding: 16,
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
    loadingContainer:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5f5f5",
    }
  });
  