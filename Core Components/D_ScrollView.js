import { Image, ScrollView, Text, View } from "react-native";
const myImage = require("../assets/pic.jpg");
const D_ScrollView = () => {
  return (
    <View>
        <ScrollView>
      <Image source={myImage} style={{ width: 250, height: 250 }} />
      <Text style={{ padding: 5 }}>
        Marigolds are famed ornamentals known for their vibrant daisy-like
        blooms. They are part of the Asteraceae family, which makes them related
        to sunflowers, chrysanthemums, asters, and dahlias, among many others.
        This October birth flower showcases beautiful blooms from spring to fall
        in bright orange, red, gold, and yellow shades. The Marigold is one of
        the two official birthday flowers for October. Native to the New World,
        it is currently a popular annual ornamental plant in many North American
        gardens and worldwide today.
        The Marigold is one of
        the two official birthday flowers for October. Native to the New World,
        it is currently a popular annual ornamental plant in many North American
        gardens and worldwide today.
        the two official birthday flowers for October. Native to the New World,
        it is currently a popular annual ornamental plant in many North American
        gardens and worldwide today.
      </Text>
      <Image
        source={{uri:"https://picsum.photos/200"}}
        style={{ width: 300, height: 300 }}
      />
      </ScrollView>
    </View>
  );
};

export default D_ScrollView;
/*
 ScrollView:
    ->Enables us to scroll to the screen to see ful content when the content is too big
    to be fit inside the screen size by default we can't scroll
    ->ScrollView comp. wraps the scroll functionality
    ->scrollView requires a bounded heigh to function properly
    ->Nest scrollView inside View by this way its bounded by the height of of its parent i.e view in this case
*/
