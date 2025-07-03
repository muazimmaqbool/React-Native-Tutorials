import { View, Image, Text } from "react-native";
const myImage = require("../assets/pic.jpg");
//or import myImage from "../assets/pic.jpg";

const C_Image = () => {
  return (
    <View>
      <Image source={myImage} style={{ width: 300, height: 300,borderRadius:10, }} />
      <Text style={{ color: "black", paddingBlock: "10", textAlign: "center" }}>
        Below image is fetched online:
      </Text>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default C_Image;
/*
<Image/>: used to display image on the screen

->Displaying online images:
 <Image source={{uri:"url"}} style={{...}} />
 -> here source expects the value to be the {value} and not string and in order
   to reference a image link pass it in object {uri:"..link.."} and use 'uri' key
   NOTE: for online images specifying width and height is important and for local images its not important as
   R.N gets this data from local image dimensions

<ImageBackground><ImageBackground> :used to put backrgound image for the view
 example: this is done in app.js
 <ImageBackground source={myImage} style={{flex:1}}>
   <Text>Text on top of image</Text>
 </ImageBackground>
*/
