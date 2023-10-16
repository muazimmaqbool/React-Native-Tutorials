import { ImageBackground, View,Text } from "react-native";
import Greet from "./Components/A_Greet";
import B_Styling from "./Components/B_Styling";
import C_StyleSheet from "./Components/C_StyleSheet";
import D_MultipleStyles from "./Components/D_MultipleStyles";
import E_BoxModel from "./Components/E_BoxModel";
import F_Shadows from "./Components/F_Shadows";
import G_StyleInheritance from "./Components/G_StyleInheritance";
const myImage=require("./assets/pic.jpg")
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>

      {/* first custom component
      <Greet name="Muazim Maqbool"/>
      <Greet name="Basit Mushtaq"/> */}

      {/* <B_Styling/>*/}
      {/* <C_StyleSheet/> */}
      {/* <D_MultipleStyles/> */}

      {/* <E_BoxModel/> */}

      {/* <F_Shadows/> */}

      <G_StyleInheritance/>
      
    </View>
  );
};
//learning about it first in components folder


export default App;
/*Introduction of React Native :
-> R.N is an open source framework for building native Android and Ios application using React.
-> R.N is basically an Js based mobile app framework that allows you to build natively-rendered mobile apps for both
   ios and android.
->React used react-dom for web apps and react-native for mobile apps

Note: checkout more intro and basic topics on code book

here i have done styling of view in App.js
*/

/*
  Added background image to the app
 return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Greet name="Muazim Maqbool"/>
      <Greet name="Basit Mushtaq"/>

      /*background image*
      <ImageBackground source={myImage} style={{flex:1}}>
      <Text>Text on top of image</Text>
     </ImageBackground>  
     </View>
     );
 */