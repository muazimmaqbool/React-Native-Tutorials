import { View, Text, Pressable } from "react-native";
import React from "react";

const CustomBtn = ({ onPress, title }) => {
  return(
    <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "teal",
      borderRadius: 5,
      padding: 10,
    }}
  >
    <Text style={{ color: "white", fontSize: 20 }}>{title}</Text>
  </Pressable>
  )
};

export default CustomBtn;
