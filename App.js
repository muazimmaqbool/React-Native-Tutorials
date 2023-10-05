import { ImageBackground, View,Text } from "react-native";
import Greet from "./Components/Greet";
import J_Alert from "./Core Components/J_Alert"
const myImage=require("./assets/pic.jpg")
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      {/* <Greet name="Muazim Maqbool"/>
      <Greet name="Basit Mushtaq"/> */}

      <J_Alert/>


      {/* background image
      <ImageBackground source={myImage} style={{flex:1}}>
      <Text>Text on top of image</Text>
     </ImageBackground> */} 
    </View>
  );
};

export default App;
/*Introduction of React Native :
-> R.N is an open source framework for building native Android and Ios application using React.
-> R.N is basically an Js based mobile app framework that allows you to build natively-rendered mobile apps for both
   ios and android.
->React used react-dom for web apps and react-native for mobile apps

Note: checkout more intro and basic topics on code book

here i have done styling of view in App.js
*/