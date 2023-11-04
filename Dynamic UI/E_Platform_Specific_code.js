import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import CustomBtn from "./PSFE Example/CustomButton/CustomBtn";
/*
PLATFORM SPECIFIC CODE:
    ->When developing a cross-platform app maximizing code reuse is a priority, but sometimes there are 
       situation when it becomes necessary to tailor your code to specific platform
    ->React-Native offers to approaches for organizing and seperating the platform specific code:
        1)-> Platform module   2)-> platform specific file extensions

    
    ->1)-> "platform" module: detects the platform on which the app is running

    ->Example: 
       here in this code the Welocome text is displayed on both ios and android and you can see in IOS
       its displayed within "SafeAreaView" but on android the text is close to top, 
       so if we set Padding top in container , its applied to both ios and android , 
       so we use "platform" Module to apply padding top only on android as it detects the platform on which app is currently running
       ->paddingTop: Platform.OS === "android" ? 30 : 0, 
         (the platform.OS is good for small changes but a better option for more comprehensive platform styles is
            to use Platform.select -> example below in text key inside styles)
    ->Note: "Platform" module is sutaible for small changes like making small and group of small changes
    
    ->2)-> Platform specific file extensions:
        this is used for more complex scenerios, this splits the code in sepereate files for "ios" and  "android"
        with .ios and .android extensions before the main extension.
        ->React Nativ detects the extension and loads the relevant platform file when required by other components
        Example: creating a button comp. that varies across the twp platforms 
        ->create new folder inside Dynamic Ui folder for this example
        >folder "PSFE example" and inside it a subfolder >custom button (inside it create two files: customBtn.ios.js and customBtn.android.js)
            importing them : import CustomBtn from "./PSFE Example/CustomButton/CustomBtn"; //here we didn't write customBtn.ios.js or .android.js extension React Native will figure it out
            now In UI you can see the same button is rendered in different ways on IOS and Android, React Native automatically selects the component based on the executing platform

-> In summary: React Native makes it possible to run platform specific code using "Platform" module and "Platform specific extensions"
      ->use "Platform.OS or Platform.select" for minor style differences
      ->for more complex components that need distinct appearances/behaviours across teh two platforms use .ios and .android file extensions is sutaible
            */

const E_Platform_Specific_code = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          {/*title and onPress are props accepts by CustomBtn's */}
          <CustomBtn title="press me!" onPress={()=>alert("pressed")}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    //setting paddingTop in android platform only
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    //changing font color and size for ios and android
    ...Platform.select({
      //for ios
      ios: {
        color: "teal",
        fontSize: 24,
      },
      //for android
      android: {
        color: "green",
        fontSize: 30,
        fontStyle: "italic",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default E_Platform_Specific_code;
