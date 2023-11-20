import { Button, Text, View } from "react-native";

const E_Button = () => {
  return (
    <View>
      <Text>This is button</Text>
      <Button title="Click Me" onPress={() => console.log("You Clicked Me!")} />
      {/*change color */}
      <Button title="I'm Different" color="green" />
      <Button
        title="I'm Not Working"
        onPress={() => console.log("I dont work")}
        disabled
      />
      {/*disabled =false */}
      <Button
        title="I'm Working"
        color="black"
        onPress={() => console.log("You make me workling")}
        disabled={false}
      />
    </View>
  );
};

export default E_Button;
/*
Button: used to trigger an action
Note-> button layout is showing differently on ios and android (we can customize it later so it will be displayed same in both)
Important:
->Button props:
  1) title="" : title prop is used to display button text
  2) onPress is used to handle the click action its like onClick here and console.log("") will be shown in terminal
  3) color="" used to change color of the button
  4) disabled prop is used to disable the button from trigerring any event
     by default disabled is true we can change it to false i.e disabled={false}
 */
