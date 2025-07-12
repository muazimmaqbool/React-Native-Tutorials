import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

//->First see previous code and this is solution to the drawback of dimensions API
const B_DimAPIsolution = () => {
  //stores devices dimensions when screen loads
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });
  //console.log("dimensions: ",dimensions)
  /*
 o/p:dimensions:  {"window": {"fontScale": 1, "height": 791.6363636363636,
                             "scale": 2.75, "width": 392.72727272727275}
                  }
 
 */

  //listens to changes in device dimensions and updating the dimensions states variable
  useEffect(() => {
    //listen to dimension changes using the static method and using addEventListener on dimensions API
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      //listening changes in dimension and we execute a callback function
      setDimensions({ window });
    });
    //cleanup code
    return () => subscription?.remove();
  });
  //extracting width and height from dimensions state variable
  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  //Now add inline styles that dynamically changes based on the device dimensions, now comment condition styles in stylesheet

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: windowWidth > 500 ? "teal" : "plum" },
      ]}
    >
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={{
            fontSize: windowWidth > 500 ? 50 : 24,
            color: windowWidth > 500 ? "white" : "black",
          }}
        >
          Welcome!
        </Text>
        {windowWidth > 500 ? (
          <Text style={styles.text}>You are in landscape mode</Text>
        ) : (
          <Text style={styles.text}>You are in potrait mode</Text>
        )}
      </View>
    </View>
  );
};
//Now when screen sizes changes styles also change immediately

//->But there is another easy way to achieve this (lec-42) is by using "useWindowDimensions" hook , see next code

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    //width: windowWidth > 500 ? "70%" : "90%",
    //height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default B_DimAPIsolution;
