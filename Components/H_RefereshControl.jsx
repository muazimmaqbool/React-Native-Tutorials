import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";

/*
This component is used inside a ScrollView or ListView to add pull to refresh functionality.
When the ScrollView is at scrollY: 0, swiping down triggers an onRefresh event.
*/
const H_RefereshControl = () => {
  const [isRefresh, setisRefresh] = useState(false);

  const handleOnRefresh = () => {
    setisRefresh(true);
    console.log("refreshing started");
    setTimeout(() => {
      setisRefresh(false);
      console.log("refreshing completed");
    }, 5000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.subContainer}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={handleOnRefresh} />
        }
      >
        <Text style={styles.text}>
          Pull down to see RefreshControl indicator
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
/*
Props accepted by RefreshControl:
 1) colors : only works on android
        its accepts array of colors (default color is black)
        example: colors={["red","blue"]} or colors={["red"]}
2) size: only works on android exmaple: size={"large"}
   like this:  <RefreshControl colors={["blue"]} size={"large"} refreshing={isRefresh} onRefresh={handleOnRefresh} />

and many more props: check here: https://reactnative.dev/docs/refreshcontrol

*/

export default H_RefereshControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    color: "white",
    textAlign:"center",
  },
});
