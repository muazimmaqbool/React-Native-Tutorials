import React, { useState } from "react";
import { Button, StatusBar, Text, View } from "react-native";

const H_Statusbar = () => {
  //StatusBar: allows you to control the applications status bar (area at the top of the screen)
  //->statusbar: displays various information such as : time, wifi, sim, battery info, etc
  //Statusbar component is used to modify the status bar

  const [isHidden, setIsHidden] = useState(false);
  //function to toggle the visibility of statusbar
  const toggleStatusBar=()=>{
    setIsHidden((prevValue)=>!prevValue);
  }
  return (
    <View>
      <StatusBar
        backgroundColor={"orange"} //only works on Android
        barStyle={"light-content"} // try: defult, dark-content also
        /*Note: default is white in android and black in ios
                dark-content: dark color in both
                ligh-content: white color in both*/

        //hidden //default is true, but we can control it using state variable
        hidden={isHidden}
      />
      {/*button to show and hide status bar */}
      <Button title={isHidden?"Show StatusBar":"Hide StatusBar"} onPress={toggleStatusBar}/>
    </View>
  );
};

export default H_Statusbar;
