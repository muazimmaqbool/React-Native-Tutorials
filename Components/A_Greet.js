import { View, Text } from "react-native";
//this is our first custom component in react native
const Greet = ({ name ,enroll}) => {
  return (
    <View>
      <Text>Aslamualikum: {name}</Text>
      <Text>Your Enroll is:{enroll}</Text>
    </View>
  );
};

export default Greet;

/*
Lets first understand what is a custom component
  -> Components are independent and reusable bits of code. 
  We’ve already used some of them in react native for example TextInput,
  TouchableOpacity, Flatlist, etc. Now for example when we use TouchableOpacity most of 
  the time we make changes, like its style, height, width, etc. After making changes in
   TouchableOpacity now it has become a ‘custom component’

   call it like this in View after importing it :
    <Greet name="Muazim Maqbool" enroll="6655"/>
    <Greet name="Basit Mushtaq" enroll="6593/>
*/
