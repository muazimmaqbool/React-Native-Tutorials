import { ImageBackground, View, Text, StyleSheet } from "react-native";
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
import G_FlexGrow from "./FlexBox and layout/G_FlexGrow";
import H_Relative_Absolute_layout from "./FlexBox and layout/H_Relative_Absolute_layout";
import DimensionsAPI from "./Dynamic UI/A_DimensionsAPI";
import B_DimAPIsolution from "./Dynamic UI/B_DimAPIsolution";
import C_UseWindowDimensions from "./Dynamic UI/C_UseWindowDimensions";
import D_SafeAreaView from "./Dynamic UI/D_SafeAreaView";
import E_Platform_Specific_code from "./Dynamic UI/E_Platform_Specific_code";
import Home from "./PockemonCard Example/Home";
import A_Lists_RN from "./Lists/A_Lists_RN";
import B_Flat_List from "./Lists/B_Flat_List";
import C_FlatList_2 from "./Lists/C_FlatList_2";
import D_Flat_List_3 from "./Lists/D_FlatList_3";
import E_SectionList from "./Lists/E_SectionList";
import B_TextInput from "./Inputs and Forms/B_TextInput";
import C_TextInput_props from "./Inputs and Forms/C_TextInput_props";
import D_MultiLine_TextInput from "./Inputs and Forms/D_MultiLine_TextInput";
import E_Switch from "./Inputs and Forms/E_Switch";
import F_LoginForm from "./Inputs and Forms/F_LoginForm";
import G_KeyboardAvoidingView from "./Inputs and Forms/G_KeyboardAvoidingView";
import H_FormValidation from "./Inputs and Forms/H_FormValidation";
import I_FormSubmission from "./Inputs and Forms/I_FormSubmission";
import A_GetRequest from "./Network Calls/A_GetRequest";
import Aa_LoadingState from "./Network Calls/Aa_LoadingState";
import B_Pull_to_Refresh from "./Network Calls/B_Pull_to_Refresh";
import C_Post_Request from "./Network Calls/C_Post_Request";
import D_ErrorHandling from "./Network Calls/D_ErrorHandling";

//core components
import A_View from "./Core Components/A_View";
import B_Text from "./Core Components/B_Text";
import C_Image from "./Core Components/C_Image";
import D_ScrollView from "./Core Components/D_ScrollView";
import E_Button from "./Core Components/E_Button";
import F_Pressable from "./Core Components/F_Pressable";
import G_Modal from "./Core Components/G_Modal";
import H_Statusbar from "./Core Components/H_Statusbar";
import I_ActivityIndicator from "./Core Components/I_ActivityIndicator";
import J_Alert from "./Core Components/J_Alert";
import Cc_styleSheet2 from "./Components/Cc_styleSheet2";
import H_RefereshControl from "./Components/H_RefereshControl";
import A_responsive from "./Responsive design/A_responsive";
import B_respUsingFlex from "./Responsive design/B_respUsingFlex";
import I_UseWindowDimensions from "./Components/I_UseWindowDimensions";
import J_Vibration from "./Components/J_Vibration";
import K_Dimensions from "./Components/K_Dimensions";
import L_BackHandler from "./Components/L_BackHandler";
import M_ToastAndroid from "./Components/M_ToastAndroid";
import N_Permissions from "./Components/N_Permissions";
import O_AsyncStorage from "./Components/O_AsyncStorage";

const myImage = require("./assets/pic.jpg");
const App = () => {
  return (
    <>
      {/*used for core components and custom components */}
      {/* <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}> */}

      {/* Core Components: */}
      {/* <A_View/> */}
      {/* <B_Text/> */}
      {/* <C_Image/> */}
      {/* <D_ScrollView/> */}
      {/* <E_Button/> */}
      {/* <F_Pressable/> */}
      {/* <G_Modal/> */}
      {/* <H_Statusbar/> */}
      {/* <I_ActivityIndicator/> */}
      {/* <J_Alert/> */}

      {/* Custom Components :*/}
      {/* <Greet name="Muazim Maqbool" enroll="6655"/>
      <Greet name="Basit Mushtaq" enroll={"6593"}/>  */}
      {/* <B_Styling /> */}
      {/* <C_StyleSheet/> */}
      {/* <Cc_styleSheet2/> */}
      {/* <D_MultipleStyles/> */}
      {/* <E_BoxModel/> */}
      {/* <F_Shadows/> */}
      {/* <G_StyleInheritance/> */}
      {/* <H_RefereshControl/> */}
      {/* <I_UseWindowDimensions/> */}
      {/* <J_Vibration/> */}
      {/* <K_Dimensions/> */}
      {/* <L_BackHandler/> */}
      {/* <M_ToastAndroid/> */}
      {/* <N_Permissions/> */}
      {/* <O_AsyncStorage/> */}

      {/*closing view of core components and custom components */}
      {/* </View> */}

      {/*responsive layout/design */}
      {/* <A_responsive/> */}
      {/* <B_respUsingFlex/> */}

      {/* use this view only when working with flexbox */}
      {/* <View style={styles.container}> */}

        {/*flexbox and flex property */}
        {/* we used this component: A_Flexbox multiple times to understand better  
        ->uncomment them all together A_FlexBox */}

        {/* Used to explain : Flex */}
        {/* 
        <A_FlexBox styleprop={{backgroundColor:"blue",flex:1}} children={"BOX-1"}/>
        <A_FlexBox styleprop={{backgroundColor:"teal",flex:3}}>BOX-2</A_FlexBox>
        <A_FlexBox styleprop={{backgroundColor:"orange",}}>BOX-3</A_FlexBox>
        <A_FlexBox styleprop={{backgroundColor:"pink"}}>BOX-4</A_FlexBox>
        <A_FlexBox styleprop={{backgroundColor:"green"}}>BOX-5</A_FlexBox>
        <A_FlexBox styleprop={{backgroundColor:"skyblue"}}>BOX-6</A_FlexBox> 
        */}

        {/* Used to explain: flex-direction */}
        {/* Note: the texts: BOX-1,2,3 will be received in component via children props */}
        {/*}
        <B_FlexDirection styleprop={{backgroundColor:"teal"}}>BOX-1</B_FlexDirection>
        <B_FlexDirection styleprop={{backgroundColor:"green"}}>BOX-2</B_FlexDirection>
        <B_FlexDirection styleprop={{backgroundColor:"orange"}}>BOX-3</B_FlexDirection> 
        */}

        {/* used To Explain justify content */}
        {/*
        <C_JustifyContent styleprop={{backgroundColor:"teal"}} >Box1</C_JustifyContent>
        <C_JustifyContent styleprop={{backgroundColor:"green"}} >Box2</C_JustifyContent>
        <C_JustifyContent styleprop={{backgroundColor:"orange"}} >Box3</C_JustifyContent>
        */}

        {/* Used to explain: alignItems and alignSelf 
         (Note, when working on alignItems first remove alignSelf and have only 3 boxes) */}
        {/*applying alignSelf to each item here */}
        {/* 
        <D_Align_ITEMSandSELF styleprop={{backgroundColor:"teal",alignSelf:"flex-start"}}>Box-1</D_Align_ITEMSandSELF>
        <D_Align_ITEMSandSELF styleprop={{backgroundColor:"green",alignSelf:"center"}}>Box-2</D_Align_ITEMSandSELF>
        <D_Align_ITEMSandSELF styleprop={{backgroundColor:"orange",alignSelf:"flex-end"}}>Box-3</D_Align_ITEMSandSELF>
        <D_Align_ITEMSandSELF styleprop={{backgroundColor:"blue",alignSelf:"stretch"}}>Box-4</D_Align_ITEMSandSELF> 
        */}

        {/*NOTE: auto is its default value, it takes value form its parent "alignItems" property, if its parent as "alignItems:"flex-start" the auto in alignSelf
              is also flex start, if alignSelf is not mention in children they still take value from their parent*/}
        {/*if alignItems in parent is "center" then both box-5 and box-6 will be in center
      now change value of alignItems inside container
      */}
        {/* <D_Align_ITEMSandSELF styleprop={{backgroundColor:"pink",alignSelf:"auto"}}>Box-5</D_Align_ITEMSandSELF>
        <D_Align_ITEMSandSELF styleprop={{backgroundColor:"yellow"}}>Box-6</D_Align_ITEMSandSELF> */}

        {/*Used to explain: flexWrap and flexBasis*/}
        {/*flexBasic makes the item more taller than other, Look at notes also to understand better (used on Box4)*/}
        {/* flex-wrap is explained below */}
        {/* 
        <E_FlexWrap styleprop={{backgroundColor:"yellow"}}>Box1</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"green"}}>Box2</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"blue"}}>Box3</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"teal",flexBasis:150}}>Box4</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"pink"}}>Box5</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"skyblue"}}>Box6</E_FlexWrap>
        <E_FlexWrap styleprop={{backgroundColor:"gray"}}>Box7</E_FlexWrap>
        */}

        {/*FlexShrink:
        ->Note: make container flex-direction to row and alignItems to flexStart and width to 300*/}
        {/* <F_FlexShrink styleprop={{backgroundColor:"teal",flexShrink:1}}>Box 1 Shrink</F_FlexShrink> */}
        {/*if box2 has flexShrink:1 then they both have same width if box2 has 2 flexShrink then it shrinks twice as box1 */}
        {/* <F_FlexShrink styleprop={{backgroundColor:"orange",flexShrink:2}}>Box 2 Shrink</F_FlexShrink> */}

        {/*Flex Grow :*/}
        {/* <G_FlexGrow styleprop={{backgroundColor:"teal"}}>BOX-1</G_FlexGrow>
        <G_FlexGrow styleprop={{backgroundColor:"orange"}}>BOX-2</G_FlexGrow> */}
        {/*no chnage as flexGrow:0 is default value */}
        {/* <G_FlexGrow styleprop={{backgroundColor:"yellow",flexGrow:0}}>BOX-3</G_FlexGrow>  */}
        {/*Box4 takes the all available space as its flexGrow is 1*/}
        {/* <G_FlexGrow styleprop={{backgroundColor:"pink",flexGrow:1}}>BOX-4</G_FlexGrow> */}
        {/*if flexGrow is 1 is applied to multiple boxes then available space is divided equally*/}
        {/* <G_FlexGrow styleprop={{backgroundColor:"blue",flexGrow:1}}>BOX-5</G_FlexGrow> */}
        {/*Box-6 takes 3times the space as box4 and 5 because it has flexGrow of 3 */}
        {/* <G_FlexGrow styleprop={{backgroundColor:"skyblue",flexGrow:3}}>BOX-6</G_FlexGrow> */}

        {/*Used to explain: relative and absolute layout */}
        {/*applied relative to Box1 and Box3, they are both relative by default */}
        {/*Now box5 has position of absolute,now after box-4 we have box-6, where box-5 was initially present */}
        
        {/* <H_Relative_Absolute_layout styleprop={{ backgroundColor: "teal", top: 20, left: 80 }}>
          Box-1
        </H_Relative_Absolute_layout>
        <H_Relative_Absolute_layout styleprop={{ backgroundColor: "green" }}>
          Box-2
        </H_Relative_Absolute_layout>

        {/*mentioning relative is optional 
        <H_Relative_Absolute_layout styleprop={{ backgroundColor: "pink",position:"relative",left: 60 }}>
          Box-3
        </H_Relative_Absolute_layout>
        <H_Relative_Absolute_layout styleprop={{ backgroundColor: "blue" }}>
          Box-4
        </H_Relative_Absolute_layout>
        now box5 is positioned using specific coordinated relative to its parent container 
        <H_Relative_Absolute_layout
          styleprop={{
            backgroundColor: "orange",
            position: "absolute",
            top: 100,
            left: 150,
          }}>
          Box-5
        </H_Relative_Absolute_layout>
        <H_Relative_Absolute_layout styleprop={{ backgroundColor: "purple" }}>
          Box-6
        </H_Relative_Absolute_layout> */}

      {/*closing View of flexbox */}
      {/* </View> */}

      {/*comment out Above code when working in Dynamic Ui folder, Lists folder, */}
      <DimensionsAPI/>
      {/* <B_DimAPIsolution/> */}
      {/* <C_UseWindowDimensions/> */}
      {/* <D_SafeAreaView/> */}
      {/* <E_Platform_Specific_code/> */}

      {/*pockemon example */}
      {/* <Home/> */}

      {/*Lists in React Native */}
      {/* <A_Lists_RN/> */}
      {/* <B_Flat_List/> */}
      {/* <C_FlatList_2/> */}
      {/* <D_Flat_List_3/> */}
      {/* <E_SectionList/> */}

      {/*Inputs and Forms in React Native */}
      {/* <B_TextInput/> */}
      {/* <C_TextInput_props/> */}
      {/* <D_MultiLine_TextInput/> */}
      {/* <E_Switch/> */}
      {/* <F_LoginForm/> */}
      {/* <G_KeyboardAvoidingView/> */}
      {/* <H_FormValidation/> */}
      {/* <I_FormSubmission/> */}

      {/*API calls /network calls */}
      {/* <A_GetRequest/> */}
      {/* <Aa_LoadingState/> */}
      {/* <B_Pull_to_Refresh/> */}
      {/* <C_Post_Request/> */}
      {/* <D_ErrorHandling/> */}

      {/*Navigation */}
      {/*Navigation is different project/branch RN_Navigation */}
    </>
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
const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 3,
    borderColor: "red",
    //for now the container takes only space which is required by its children, you can see red border wrapping the boxes
    flex: 1, //now red border will be wrapping whole screen

    //flexDirection:
    //gap:5,
    //flexDirection:"column", //default value no change sets main axis from top to bottom
    //flexDirection:"column-reverse", //sets flex items in reverse order i.e bottom to top
    //flexDirection:"row", //sets items form left to right
    //flexDirection:"row-reverse", //sets items from right to left in reverse order

    //justifycontent:
    //gap:5,
    // justifyContent:"flex-start", //default value
    // justifyContent:"flex-end",
    // justifyContent:"center",
    // justifyContent:"space-around",
    // justifyContent:"space-between",
    // justifyContent:"space-evenly"


    //alignItems: default value is "stretch" i.e the items will take entire width of cross axis
    //gap:5,
    // alignItems:"stretch" //default value
    // alignItems:"center",
    //alignItems:"flex-start",
    // alignItems:"flex-end",
    

    //flexWrap: (Note: first comment flex:1 above and set height to 300)
    //height:500, //box will come out of red container
    //flexWrap:"nowrap" //default value no change
    //flexWrap:"wrap", //content within the container-> works only when needed if you set height to 500 then they will not wrap to next column, they come in single line
    //flexWrap:"wrap-reverse", //opposite of wrap
    //rowGap:20,
    // columnGap:30,
    //gap:20 //for both row and column gap

    //flexShrink -> first set flexDirection to row and alignItems to flexStart and width to 300
    // width:300,
    // flexDirection:"row",
    // alignItems:"flex-start",
    //flexShrink is applied above while calling the component
  },
});

export default App;
/*Introduction of React Native :
-> R.N is an open source framework for building native Android and Ios application using React.
-> R.N is basically an Js based mobile app framework that allows you to build natively-rendered mobile apps for both
   ios and android.
->React uses react-dom for web apps and react-native for mobile apps

Note: checkout more intro and basic topics on note book
*/

//here i have done styling of view in App.js
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
