import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

/*
 see previous code first,
 Here in this code we will be making POST Request
 API used: 'https://jsonplaceholder.typicode.com/posts
 */

const C_Post_Request = () => {
  const [posts, setPosts] = useState([]);
  //for showing loading animation
  const [isLoading, setIsLoading] = useState(true);
  //for pull to refresh
  const [refreshState, setRefreshState] = useState(false);

  //for POST request
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPosts(data);
    setIsLoading(false);
  };

  //used to handle pull to refresh
  const handleRefresh = () => {
    setRefreshState(true);
    fetchData(30); //this time fetchData will fetch 30 posts
    setRefreshState(false);
  };

  const HandleAddPost = async () => {
    setIsPosting(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    });
    const newPost = await response.json();
    setPosts([newPost, ...posts]);
    setPostTitle("");
    setPostBody("");
    setIsPosting(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //here API is fast so we don't see loading animation for that long , to see Loading animation for long
  //comment this line in fetchData functuion : setIsLoading(false)
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  //now lets display data inside posts in ui using flatList
  return (
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Post Title"
            value={postTitle}
            onChangeText={setPostTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Post Body"
            value={postBody}
            onChangeText={setPostBody}
          />
          <Button
            title={isPosting ? "Adding..." : "Add Post"}
            onPress={HandleAddPost}
            disabled={isPosting}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>
                    {item.id + "-" + item.title}
                  </Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={ <View style={{ height: 15 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}>List Of Posts</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of Posts List</Text>
            }
            //used to refresh the data
            refreshing={refreshState}
            //onRefresh expects a function to be executed when the FlastList is pulled down for refreshing
            onRefresh={handleRefresh}
          />
        </View>
      </>
    </SafeAreaView>
  );
};

export default C_Post_Request;

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
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 10,
    borderRadius: 10,
  },
});
