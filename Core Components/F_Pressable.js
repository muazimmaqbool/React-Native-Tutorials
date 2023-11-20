import { Button, Image, Pressable, Text, View } from "react-native";
const myImage = require("../assets/pic.jpg");
const F_Pressable = () => {
  //pressable: its a wrapper component that detects various stages of press interactions on its children
  //any thing inside pressable becomes clickable or pressable
  /*
  ->Pressable supports:
        1) onPress: when clicked
        2) onPressIn: called when press is activated
        3) onLongPress: trigerred when press is held for longer than 500 milliseconds
        4) onPressOut: called when press gesture is deactivated
  */
  return (
    <View>
      <Pressable onPress={() => console.log("Clicked via pressable")}>
        <Text style={{ padding: 10, backgroundColor: "green" }}>
          This is clickable as its inside pressable
        </Text>
      </Pressable>
      <Pressable
        onLongPress={() => console.log("Clicked via onLongPress")}
        style={{ padding: 20}}
      >
        <Text>This is called via onLongPress</Text>
        <Image source={myImage} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable
        onPressOut={() => console.log("You called me via onPressOut")}
        style={{
          padding: 25,
          borderStyle: "solid",
          borderWidth: 5,
          borderColor: "yellow",
        }}
      >
        <Text>This is called via onPressout</Text>
      </Pressable>
    </View>
  );
};

export default F_Pressable;
