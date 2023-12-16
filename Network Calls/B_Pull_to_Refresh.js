import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    View,
    FlatList,
    Text,
    ActivityIndicator
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  /*
 see previous code first,
 here in this code we will see how to implement the pull to referesh functionality  with Flatlist
   in React Native
 -> this feature is very useful when you want to reload the data in your app without restarting the app
 
 ->here in Flast List two props , refreshing and onRefresh automatically renders a default loading spinner
   when the list is pulled down
  */
  
  const B_Pull_to_Refresh = () => {
    const [posts, setPosts] = useState([]);
    //for showing loading animation
    const [isLoading, setIsLoading] = useState(true)
    //for pull to refresh
    const [refreshState, setRefreshState] = useState(false)
    const fetchData = async (limit = 10) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPosts(data);
      setIsLoading(false)
    };
    useEffect(() => {
      fetchData();
    }, []);

    //used to handle pull to refresh
    const handleRefresh=()=>{
        setRefreshState(true);
        fetchData(30); //this time fetchData will fetch 30 posts
        setRefreshState(false);
    }
    
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
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.id+"-"+item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={<Text style={styles.headerText}>List Of Posts</Text>}
            ListFooterComponent={<Text style={styles.footerText}>End of Posts List</Text>}
            //used to refresh the data
            refreshing={refreshState}
            //onRefresh expects a function to be executed when the FlastList is pulled down for refreshing
            onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default B_Pull_to_Refresh;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      paddingTop: StatusBar.currentHeight, //this one is for android
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
    loadingContainer:{
        flex:1,
        paddingTop:StatusBar.currentHeight,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5f5f5",
    }
  });
  