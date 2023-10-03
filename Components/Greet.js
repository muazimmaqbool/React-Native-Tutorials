import { View,Text } from 'react-native'
//this is our first custom component in react native
const Greet = ({name}) => {
  return (
    <View>
        <Text>Aslamualikum, {name}</Text>
    </View>
  )
}

export default Greet