import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
/*
 ->useWindowDimensions is the preferred API for React components. Unlike Dimensions, it updates as the window's
   dimensions update. This works nicely with the React paradigm.

 ->Although dimensions are available immediately, they may change (e.g due to device rotation, foldable devices etc)
  so any rendering logic or styles that depend on these constants should try to call this function on every render,
  rather than caching the value (for example, using inline styles rather than setting a value from a StyleSheet).
 */

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

/*
Properties: 
  NAME	    TYPE	         DESCRIPTION
  window	ScaledSize	 Size of the visible Application window.
  screen	ScaledSize	 Size of the device's screen.
*/

const K_Dimensions = () => {
  const [dimensions, setdimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  //change: Fires when a property within the Dimensions object changes. The argument to the event handler is a DimensionsValue type object.
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setdimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text style={styles.text}>
          {key} - {value}
        </Text>
      ))}
      <Text style={styles.header}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text style={styles.text}>
          {key} - {value}
        </Text>
      ))}
    </View>
  );
};
/*
 Object.entries() is a JavaScript method that returns an array of a given object's own enumerable 
 string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop 
 (but without including properties in the prototype chain).
*/
export default K_Dimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginVertical: 10,
    color: "yellow",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
