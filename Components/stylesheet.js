import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    titleText: {
        fontSize: 20,
        color: "midnightblue",
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        textAlign: "center",
      },
      nestedView: {
        backgroundColor: "white",
        padding: 15,
        margin: 10,
        alignItems:"center"
      },
      box:{
        width:200,
        height:200,
        backgroundColor:"blue",
        alignSelf:"center",
        borderRadius:10,
      }
})