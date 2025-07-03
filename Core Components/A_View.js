import { View,Text } from 'react-native'

//View component:
const A_View = () => {
  return (
    <View>
        <Text>Aslamualikum</Text>
    </View>
  )
}

/*
  ->Note to see this component import it in App.js and Call it in return inside View there like this

import A_View from "./Core Components/A_View"
  const App = () => {
    return (
      <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
        <A_View/>
      </View>
    );
  };
*/
export default A_View
/*View:
 ->This is fundamental core component in React Native
 ->Serves as building block for creating user interfaces
 ->Functions as container that supports flexbox, styling, touch handling etc
 ->Its like <div> in web development
 ->We can have nested views
 ->It only takes space occupy by its children and when you have no children in the view and you
   want to see it, set a bg color to view and set flex:1 (so it takes full space available in screen)
   and its done in to its parent view i.e APP.js
*/