import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

const Home = () => {
  //pokemon card content data
  const charmanderData = {
    name: "Charmander",
    //image:require("./assets/Charmander.png"), //replace with the actual image path
    image: {
      uri: "https://i.pinimg.com/originals/38/95/e3/3895e3419fa17eddf66fbd96cdaa16bc.png",
    },
    type: "Fire",
    hp: 40,
    moves: [" Scratch", " Ember", " Growl", " Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: {
      uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    },
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: {
      uri: "https://i.pinimg.com/originals/ef/33/2f/ef332f79619b7503ff40c766eb370219.png",
    },
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: {
      uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
    },
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  //passing the card content to PokemonCard comp. as props using the spread operator and destructer the data their
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "f5f5f5",
    paddingTop: Platform.OS == "android" ? 30 : 0,
  },
});
export default Home;
