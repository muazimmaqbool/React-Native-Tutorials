import { Button, PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import React from 'react'

/*
->PermissionsAndroid:
PermissionsAndroid provides access to Android's new permissions model. 
The so-called "normal" permissions are granted by default when the application is installed as 
long as they appear in AndroidManifest.xml. However, "some" permissions require a dialog prompt.
 You should use this module for those permissions.
 
*/

/*
The checkPermission function checks if the camera/other permission is already granted.
The requestForPermission function requests the permission if it's not already granted.
The handlePermissionRequest function combines these two steps.

*/

const N_Permissions = () => {


  const checkPermission = async () => {
    //here it checks for camera permission
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    if (hasPermission) {
      console.log("Camera permission is already granted");
      return true;
    }
    return false;
  }

  const requestForPermission = async() =>{
    try{
        const granted= await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title:"Camera Permissions Request",
                message:"we need access to your devices camera",
                buttonNeutral:"Ask Me Later",
                buttonNegative:"Cancel",
                buttonPositive:"OK",
            }
        )
        if(granted === PermissionsAndroid.RESULTS.GRANTED){ 
            console.log("You can use the camera app")
        }else{
            console.log("Camera Permission Denied")
        }
    }catch(err){
        console.log(err)
    }
  }

  const handlePermissionRequest = async () => {
    const hasPermission = await checkPermission();
    if (!hasPermission) {
      await requestForPermission();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Permissions Android</Text>
      <Button title="request permissions" onPress={handlePermissionRequest} />
    </View>
  )
}

export default N_Permissions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        gap:10
      },
      text:{
        fontSize:18,
        color:"black",
        fontWeight:"500"
      }
})