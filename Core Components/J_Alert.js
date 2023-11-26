import React from "react";
import { Alert, Button, Text, View } from "react-native";

const J_Alert = () => {
  /*Alert: shows/launches an alert dialog with specified title and message
     -> we can also add buttons to it: only 3 allowed in Android and in ios any number of button can be added
     ->by default Alert has only one button i.e "ok"
    */
  return (
    <View style={{ gap: 10 }}>
      <Button title="Alert One" onPress={() => Alert.alert("Basic Allert")} />
      <Button
        title="Alert Two"
        onPress={() => Alert.alert("Allert Title", "This is Alert Body")}
      />
      {/*Alert with buttons, in android only 3 buttons are allowed in Alert and ios any number of button are allowed inside allert */}
      <Button
        title="Alert Three"
        onPress={() =>
          Alert.alert("This is Alert Title", "This is Body of Alert", [
            {
              text: "Cancel",
              onPress: () => console.log("You clicked Cancel "),
            },
            {
              text: "Ok",
              onPress: () => console.log("You clicked Ok "),
            },
            //this will be shown in android
            // {
            //     text:"New",
            //     onPress:()=>console.log("You clicked New ")
            // },
            //this won't be shown in android but in IOS this will be shown
            // {
            //     text:"New2",
            //     onPress:()=>console.log("You clicked New ")
            // },
          ])
        }
      />
      <Button
        title="Alert Four"
        onPress={() =>
          Alert.alert(
            "Your Enroll",
            "Please make sure corrent Enroll is displayed",
            [
              
              {
                text: "Find Enroll",
                onPress: () => console.log("You clicked on 'Find Enroll'"),
              },
              {
                text:"No",
                onPress:()=>console.log("You clicked on 'No'")
              },
              {
                text:"Yes",
                onPress:()=>console.log("You clicked on 'Yes'")
              },
              
              
            ]
          )
        }
      />
    </View>
    //visit react-native docs for more API components like this Alert
  );
};

export default J_Alert;
