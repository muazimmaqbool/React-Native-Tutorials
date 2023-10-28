import { ImageBackground, View,Text, StyleSheet } from "react-native";
import Greet from "./Components/A_Greet";
import B_Styling from "./Components/B_Styling";
import C_StyleSheet from "./Components/C_StyleSheet";
import D_MultipleStyles from "./Components/D_MultipleStyles";
import E_BoxModel from "./Components/E_BoxModel";
import F_Shadows from "./Components/F_Shadows";
import G_StyleInheritance from "./Components/G_StyleInheritance";
import A_FlexBox from "./FlexBox and layout/A_FlexBox";
import B_FlexDirection from "./FlexBox and layout/B_FlexDirection";
import C_JustifyContent from "./FlexBox and layout/C_JustifyContent";
import D_Align_ITEMSandSELF from "./FlexBox and layout/D_Align_ITEMSandSELF";
import E_FlexWrap from "./FlexBox and layout/E_FlexWrap";
import F_FlexShrink from "./FlexBox and layout/F_FlexShrink";
const myImage=require("./assets/pic.jpg")
const App = () => {
  return (
    // <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
    //view used only when working with flexbox
      <View style={styles.container}>

      {/* first custom component
      <Greet name="Muazim Maqbool"/>
      <Greet name="Basit Mushtaq"/> */}

      {/* <B_Styling/>*/}
      {/* <C_StyleSheet/> */}
      {/* <D_MultipleStyles/> */}

      {/* <E_BoxModel/> */}

      {/* <F_Shadows/> */}

      {/* <G_StyleInheritance/> */}

      {/*flexbox and flex property */}
      {/*we call this A_Flexbox multiple times to understand better (from lec-26 at 4:28) */}
      {/* <A_FlexBox styleprop={{backgroundColor:"blue",flex:1}} children={"BOX-1"}/>
      <A_FlexBox styleprop={{backgroundColor:"teal",flex:3}}>BOX-2</A_FlexBox>
      <A_FlexBox styleprop={{backgroundColor:"orange",}}>BOX-3</A_FlexBox>
      <A_FlexBox styleprop={{backgroundColor:"pink"}}>BOX-4</A_FlexBox>
      <A_FlexBox styleprop={{backgroundColor:"green"}}>BOX-5</A_FlexBox>
      <A_FlexBox styleprop={{backgroundColor:"skyblue"}}>BOX-6</A_FlexBox> */}

      {/*used for flex-direction */}
      {/* <B_FlexDirection styleprop={{backgroundColor:"teal"}}>BOX-1</B_FlexDirection>
      <B_FlexDirection styleprop={{backgroundColor:"green"}}>BOX-2</B_FlexDirection>
      <B_FlexDirection styleprop={{backgroundColor:"orange"}}>BOX-3</B_FlexDirection> */}

      {/*justify content */}
      {/* <C_JustifyContent styleprop={{backgroundColor:"teal"}} >Box1</C_JustifyContent>
      <C_JustifyContent styleprop={{backgroundColor:"green"}} >Box2</C_JustifyContent>
      <C_JustifyContent styleprop={{backgroundColor:"orange"}} >Box3</C_JustifyContent> */}

      {/*alignItems and alignSelf (Note, when working on alignItems first remove alignSelf and have only 3 boxes) */}
      {/*applying alignSelf to each item here */}
      {/* <D_Align_ITEMSandSELF styleprop={{backgroundColor:"teal",alignSelf:"flex-start"}}>Box-1</D_Align_ITEMSandSELF>
      <D_Align_ITEMSandSELF styleprop={{backgroundColor:"green",alignSelf:"flex-end"}}>Box-2</D_Align_ITEMSandSELF>
      <D_Align_ITEMSandSELF styleprop={{backgroundColor:"orange",alignSelf:"center"}}>Box-3</D_Align_ITEMSandSELF>
      <D_Align_ITEMSandSELF styleprop={{backgroundColor:"blue",alignSelf:"stretch"}}>Box-4</D_Align_ITEMSandSELF> */}
      {/*NOTE: auto is its default value, it takes value form its parent "alignItems" property, if its parent as "alignItems:"flex-start" the auto in alignSelft
      is also flex start, if alignSelf is not mention in children they still take value from their parent
       */}
       {/*if alignItems in parent is "center" then both box-5 and box-6 will be in center */}
      {/* <D_Align_ITEMSandSELF styleprop={{backgroundColor:"pink",alignSelf:"auto"}}>Box-5</D_Align_ITEMSandSELF>
      <D_Align_ITEMSandSELF styleprop={{backgroundColor:"yellow"}}>Box-6</D_Align_ITEMSandSELF> */}


       {/*flexWrap */}
       {/* <E_FlexWrap styleprop={{backgroundColor:"yellow"}}>Box1</E_FlexWrap>
       <E_FlexWrap styleprop={{backgroundColor:"green"}}>Box2</E_FlexWrap>
       <E_FlexWrap styleprop={{backgroundColor:"blue"}}>Box3</E_FlexWrap> */}
       {/*flexBasic makes the item more talls than other,Look at notes also to understand better */}
       {/* <E_FlexWrap styleprop={{backgroundColor:"teal",flexBasis:140}}>Box4</E_FlexWrap>
       <E_FlexWrap styleprop={{backgroundColor:"pink"}}>Box5</E_FlexWrap>
       <E_FlexWrap styleprop={{backgroundColor:"skyblue"}}>Box6</E_FlexWrap>
       <E_FlexWrap styleprop={{backgroundColor:"gray"}}>Box7</E_FlexWrap> */}


       {/*FlexShrink-> Note: make container flex-direction to row and alignItems to flexStart  and width to 300*/}
       <F_FlexShrink styleprop={{backgroundColor:"teal",flexShrink:1}}>Box 1 Shrink</F_FlexShrink>
      {/*if box2 has flexShrink:1 then they both have same width if box2 has 2 flexShrink then it shrinks twice as box1 */}
       <F_FlexShrink styleprop={{backgroundColor:"green",flexShrink:2}}>Box 2 Shrink</F_FlexShrink>

    </View>

  );
};
//learning about it first in components folder

//When started with flexbox remove inline styling of view and use this

/*Flex property: deinfes how much of a view will fill the screen along the main axis(top to bottom)
->it accepts an integer value "0" or more, indicating the fraction of available space the component should take
->Note in web dev, we write display:"flex" to make a container/div a flex container, but in 
React-Native: the view is already a flex container and its comp. inside it are flex items  
-> we can also apply flex:1 to the children/flexitems as well, if we add flex:1 to first Box above it occupies all the available space
->if we also apply flex:1 to another flex item they both will take 50-50% of the availabe space each,.... similarly for all
*/
const styles=StyleSheet.create({
  container:{
    marginTop:64,
    borderWidth:5,
    borderColor:"red",
    //for now the container takes only space which is required by its children, you can see red border wrapping the boxes
    flex:1, //now red border will be wrapping whole screen

    //flexDirection:
    //flexDirection:"column" //default value no change sets main axis from top to bottom
    //flexDirection:"column-reverse", //sets flex items in reverse order i.e bottom to top
    // flexDirection:"row" //sets items form left to right
    //flexDirection:"row-reverse", //sets items from right to left in reverse order

    //justifycontent:
    //justifyContent:"space-around" //values:flex-start, flex-end, center,space-between,space-evenly,space-around

    //alignItems: default value is "stretch" i.e the items will take entire width of cross axis
    //alignItems:"center" //values:stretch,flex-start,flex-end,center

    //flexWrap: (Note: first comment flex:1 above and set height to 300)
    //height:300, //box will come out of red container
    //flexWrap:"nowrap" //default value no change
    //flexWrap:"wrap", //content within the container-> works only when needed if you set height to 500 then they will not wrap to next column, they come in single liine
    //flexWrap:"wrap-reverse", //opposite of wrap
    // rowGap:20,
    // columnGap:30,
    //gap:20

    //flexShrink -> first set flexDirection to row and alignItems to flexStart and width to 300
    width:300,
    flexDirection:"row",
    alignItems:"flex-start",
    //flexShrink is applied above while calling the component
  }
})


export default App;
/*Introduction of React Native :
-> R.N is an open source framework for building native Android and Ios application using React.
-> R.N is basically an Js based mobile app framework that allows you to build natively-rendered mobile apps for both
   ios and android.
->React used react-dom for web apps and react-native for mobile apps

Note: checkout more intro and basic topics on code book

here i have done styling of view in App.js
*/

/*
  Added background image to the app
 return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Greet name="Muazim Maqbool"/>
      <Greet name="Basit Mushtaq"/>

      /*background image*
      <ImageBackground source={myImage} style={{flex:1}}>
      <Text>Text on top of image</Text>
     </ImageBackground>  
     </View>
     );
 */