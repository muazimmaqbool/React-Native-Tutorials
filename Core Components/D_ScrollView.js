import { Image, ScrollView, Text, View } from "react-native";
const myImage = require("../assets/pic.jpg");

/*
 ScrollView:
    ->Enables us to scroll to the screen to see full content when the content is too big
      to be fit inside the screen size by default we can't scroll
    ->ScrollView component wraps the scroll functionality
    ->ScrollView requires a bounded height to function properly
    ->Nest scrollView inside View by this way its bounded by the height of its parent i.e view in this case
*/
const D_ScrollView = () => {
  return (
    <View>
      {/*above View here is optional as we have View also in app.js*/}
      <ScrollView>
        {/* <ScrollView showsVerticalScrollIndicator={false}: removes scroll line which appears on right side */}
       
        <Image source={myImage} style={{ width: 250, height: 250 }} />
        <Text style={{ padding: 5,textAlign:"center"}}>
          Marigolds are famed ornamentals known for their vibrant daisy-like
          blooms. They are part of the Asteraceae family, which makes them
          related to sunflowers, chrysanthemums, asters, and dahlias, among many
          others. This October birth flower showcases beautiful blooms from
          spring to fall in bright orange, red, gold, and yellow shades. The
          Marigold is one of the two official birthday flowers for October.
          Native to the New World, it is currently a popular annual ornamental
          plant in many North American gardens and worldwide today. The Marigold
          is one of the two official birthday flowers for October. Native to the
          New World, it is currently a popular annual ornamental plant in many
          North American gardens and worldwide today. the two official birthday
          flowers for October. Native to the New World, it is currently a
          popular annual ornamental plant in many North American gardens and
          worldwide today.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/500" }}
          style={{ width: 300, height: 300 }}
        />

      </ScrollView>
    </View>
  );
};

export default D_ScrollView;
