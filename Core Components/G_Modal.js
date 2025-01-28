import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const G_Modal = () => {
  //Modal: its the screen that overlays the app content to provide the important information to the user
  //Its used when necessary, its basically like an dialog box

  //used to manage the visiblity of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <View>
      {/* //Basic modal component, will open when app is opened */}
      {/* <Modal visible={true}>
          <View style={{flex:1,backgroundColor:"pink",padding:80}}>
          </View>
        </Modal> */}

      {/*visiblity of the modal can be handled by the state variable */}
      <Button
        title="Open Modal"
        onPress={() => setIsModalOpen(true)}
        color={"midnightblue"}
      />
      {/*onRequestClose: is called when user clicks on the back button on device otherwise it won't close the modal when 
      back button is called, 
      by adding this: onRequestClose={() => setIsModalOpen(false)} the modal is closed when back button is clicked
      */}
      <Modal
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        //animation is about how modal is opened
        //animationType="none" //default
        animationType="slide" // or use ="fade"

        //presentation style works only on ios
        //presentationStyle="fullscreen" //default value ="fullscreen", also can use ="formsheet","pagesheet"
        //Note using presentationStyle in android crashes the app
      >
        <View
          style={{
            flex: 0.5,
            margin: 20,
            backgroundColor: "#0000006E",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ color: "white",fontSize:20 }}>This is Modal Component</Text>
          <Button
            title="Close Modal"
            onPress={() => setIsModalOpen(false)}
            color={"green"}
          />
        </View>
      </Modal>
    </View>
  );
};

export default G_Modal;
