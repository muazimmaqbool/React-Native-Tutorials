import { View,Text } from "react-native";
const B_Text = () => {
  return (
     <View>
        <Text>This is Text Component</Text>
        {/*Nesting Text component */}
        <Text><Text style={{color:"white",fontSize:25}}>React</Text>Native</Text>
     </View>
    
  )
};

export default B_Text;
/*
Text component:
  ->Used for displaying text
  ->It also supports styling, nesting, touch handling
  ->Depending on the targeted platform R.N will translate the Text and other component according to the targetted platform
    example: UITextView(ios), TextView(android) and <p>(web)
*/
